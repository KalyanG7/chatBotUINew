import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadPdfService {

 // private uploadUrl = 'http://127.0.0.1:8080/api/upload'; // Adjust the URL if necessary

 private uploadUrl ='http://127.0.0.1:8080/demo/upload'

  constructor(private http: HttpClient) {}

  uploadFiles(path: string, files: File[]): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('path', path);
    files.forEach(file => formData.append('files', file, file.name));

    return this.http.post(this.uploadUrl, formData, { responseType: 'text' });
  }
}
