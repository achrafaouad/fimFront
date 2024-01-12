import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogServiceService {

  constructor(private http: HttpClient) { }

  private apiUrl = "http://localhost:8013"


  uploadFile(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/upload`, formData);
  }


  yearinfo(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/yearinfo`);
  }

  deleteStationsForYear(data:any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/stations/${data}`);
  }


  uploadFiles(formData: FormData): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        // Add any required headers here
      }),
      responseType: 'arraybuffer' as 'json' // Set the response type to arraybuffer for binary data
    };
  
    return this.http.post(`${this.apiUrl}/rest/upload`, formData, httpOptions);
  
  
}
}
