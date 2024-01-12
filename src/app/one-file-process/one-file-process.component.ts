import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LogServiceService } from '../log-service.service';

@Component({
  selector: 'app-one-file-process',
  templateUrl: './one-file-process.component.html',
  styleUrls: ['./one-file-process.component.css']
})
export class OneFileProcessComponent implements OnInit {
  title = 'project';
  selectedFile!: File;
  file1Content: any;
  file2Content: any;
  response: any;

constructor(private service:LogServiceService,private _snackBar: MatSnackBar){

}
  ngOnInit(): void {

  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  handleFile(event: any): void {

    console.log(event)
    const file: File = event.target.files[0];

    if (file) {
      // Perform further operations with the file
      console.log('Selected file:', file);

      this.selectedFile = file;
    }
  }



  uploadFile(): void {
    if (!this.selectedFile) {


      this.openSnackBar("No file selected.", "fermer")

      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.service.uploadFile(formData).subscribe(
      (response:any) => {
        // Handle the response from the server

        this.openSnackBar("Le traitement a été effectué avec succès ", "fermer")


        this.response = response;
        console.log('Upload response:', response);
        this.file1Content = response.file1Content
        this.file2Content = response.file2Content
      },
      (error:any)=> {

        this.openSnackBar("Le traitement n'été pas effectué avec succès ", "fermer")

        // Handle any errors that occur during the upload
        console.error('Upload error:', error);
      }
    );
  }



  downloadFile1(): void {
    if(this.response){
      console.log(this.response)
      // this.downloadFiles(this.response.file1Bytes, 'file1Bytes.MOD');
      this.downloadFiles(this.response.file1Bytes, `${this.response.fileName}.MOD`);
      this.openSnackBar("le ficher a été bien téléchrgé", "fermer")

    }else{
      this.openSnackBar("Merci d'effectuer le traitement", "fermer")

    }

  }
  downloadFile2(): void {
    if(this.response){
      // this.downloadFiles(this.response.file1Bytes, 'file1Bytes.MOD');
      this.downloadFiles(this.response.file2Bytes, 'logs.txt');
      this.openSnackBar("le ficher a été bien téléchrgé", "fermer")
    }
    else{
      this.openSnackBar("Merci d'effectuer le traitement", "fermer")

    }
  
  }


  // downloadFiles(file: any, name: string): void {
  //   // Create a Blob from the response data
  //   const blob = new Blob([file], { type: 'application/octet-stream' });

  //   // Create a download link element
  //   const downloadLink = document.createElement('a');
  //   downloadLink.href = window.URL.createObjectURL(blob);

  //   // Set the file names for the attachments
  //   downloadLink.download = 'file1.txt';
  //   downloadLink.download = 'file2.txt';

  //   // Trigger the download by simulating a click on the download link
  //   downloadLink.click();
  // }

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
  
  
  
  



}

