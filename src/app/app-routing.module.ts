import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiFilesProcessComponent } from './multi-files-process/multi-files-process.component';
import { OneFileProcessComponent } from './one-file-process/one-file-process.component';
import { VersionsFileComponent } from './versions-file/versions-file.component';

const routes: Routes = [
  { path: '', redirectTo: 'oneFile', pathMatch: 'full' },
  { path: 'oneFile', component: OneFileProcessComponent },
  { path: 'multifile', component: MultiFilesProcessComponent },
  { path: 'versionsFile', component: VersionsFileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
