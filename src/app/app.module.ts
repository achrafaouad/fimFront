import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RxStompService } from '@stomp/ng2-stompjs';
import { rxStompConfig } from './rx-stomp.config'; // Create a new file rx-stomp.config.ts
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiFilesProcessComponent } from './multi-files-process/multi-files-process.component';
import { OneFileProcessComponent } from './one-file-process/one-file-process.component';
import { FilesizePipePipe } from './filesize-pipe.pipe';
import { VersionsFileComponent } from './versions-file/versions-file.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiFilesProcessComponent,
    OneFileProcessComponent,
    FilesizePipePipe,
    VersionsFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [
    RxStompService,
    {
      provide: 'RXSTOMP_CONFIG',
      useValue: rxStompConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
