import { Component, OnInit } from '@angular/core';
import { LogServiceService } from '../log-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-versions-file',
  templateUrl: './versions-file.component.html',
  styleUrls: ['./versions-file.component.css']
})
export class VersionsFileComponent  implements OnInit {
  title = 'project';
  selectedFile!: File;
  file1Content: any;
  file2Content: any;
  response: any;
  selectedFiles: File[] = [];
  result: any;
  year: any;

constructor(private service:LogServiceService,private _snackBar: MatSnackBar){
  this.yearinfo()
}
  ngOnInit(): void {

  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }


  yearinfo() {
    this.service.yearinfo().subscribe(res=>{
      this.result = res.years;
    },err=>{
      console.log(err)
    });
  }

  deleteStationsForYear(){
    this.service.deleteStationsForYear(this.year).subscribe(res=>{
      console.log(res)
      this.openSnackBar("les données sont bien actualisé", "fermer")
      this.yearinfo()

    },err=>{
      console.log(err)
      this.openSnackBar("Vérifier que vous avez taper une année valide ", "fermer")

    })
  }



}


