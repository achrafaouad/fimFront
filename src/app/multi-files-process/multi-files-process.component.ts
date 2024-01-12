import { Component, OnInit } from '@angular/core';
import { LogServiceService } from '../log-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-multi-files-process',
  templateUrl: './multi-files-process.component.html',
  styleUrls: ['./multi-files-process.component.css']
})
export class MultiFilesProcessComponent implements OnInit {
  title = 'project';
  selectedFile!: File;
  file1Content: any;
  file2Content: any;
  response: any;
  selectedFiles: File[] = [];

constructor(private service:LogServiceService,private _snackBar: MatSnackBar){

}
  ngOnInit(): void {

  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  handleFiles(event: any): void {
    console.log(event);
    const files: FileList = event.target.files;
  
    if (files && files.length > 0) {
      this.selectedFiles = [];
      for (let i = 0; i < files.length; i++) {
        this.selectedFiles.push(files[i]);
      }
    }
  }



  downloadFile(): void {
    if(this.response){
      // this.downloadFiles(this.response.file1Bytes, 'file1Bytes.MOD');
      this.downloadFiles(this.response.file1Bytes, 'file1Bytes.MOD');
      this.openSnackBar("le ficher a été bien téléchrgé", "fermer")

    }else{
      this.openSnackBar("Merci d'effectuer le traitement", "fermer")

    }

  }



  

  uploadFiles(): void {

    if (this.selectedFiles.length == 0) {


      this.openSnackBar("No file selected.", "fermer")

      return;
    }

    const formData = new FormData();
    for (let i = 0; i < this.selectedFiles.length; i++) {
      formData.append('files', this.selectedFiles[i]);
    }

    console.log(formData);


    this.service.uploadFiles(formData).subscribe(response => {
      // Handle the binary response here
      // For example, you can create a Blob from the ArrayBuffer and provide a download link to the user
      const blob = new Blob([response], { type: 'application/zip' });
      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.download = 'filename.zip'; // Set the desired filename
      downloadLink.click();
      this.openSnackBar("Le traitement a été effectué avec succès ", "fermer")
      console.log('Upload response:', response);
      this.file1Content ="Le traitement a été effectué avec succès"
    }
    ,
      (error:any)=> {
        console.log(error.error);
        this.openSnackBar("Le traitement n'été pas effectué avec succès ", "fermer")
        this.file1Content ="Le traitement n'été pas effectué avec succès \n"
        this.file1Content+="vérifier les noms des stations"

        // Handle any errors that occur during the upload
        console.error('Upload error:', error);
      }
    );

// this.service.uploadFiles(formData).subscribe(
//       (response:any) => {
//         // Handle the response from the server

//         this.openSnackBar("Le traitement a été effectué avec succès ", "fermer")


//         this.response = response;
//         console.log('Upload response:', response);
//         this.file1Content ="Le traitement a été effectué avec succès"

//         this.downloadFile();
      
//       },
//       (error:any)=> {
//         console.log(error.message);
//         this.openSnackBar("Le traitement n'été pas effectué avec succès ", "fermer")
//         this.file1Content ="Le traitement n'été pas effectué avec succès"

//         // Handle any errors that occur during the upload
//         console.error('Upload error:', error);
//       }
//     );

    };


    
  

  downloadFiles(fileData:any , fileName:string) {
    
    const fileContent = atob(fileData);
    const fileBytes = new Uint8Array(fileContent.length);
  
    for (let i = 0; i < fileContent.length; i++) {
      fileBytes[i] = fileContent.charCodeAt(i);
    }
  
    const fileBlob = new Blob([fileBytes], { type: 'text/plain' });
    const fileUrl = URL.createObjectURL(fileBlob);
  
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  }
  
  

  deleteFile(fileToDelete: File): void {
    this.selectedFiles = this.selectedFiles.filter(file => file !== fileToDelete);
  }
  
  



}

