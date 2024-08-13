import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

/*
 * To set up your API key, create a file named 'environment.ts' in the 'src/environments' folder.
 * The file should have the following content:
 *
 * export const environment = {
 *   production: false,
 *   chatGptApiKey: 'YOUR_API_KEY_HERE',
 * };
 *
 * Replace 'YOUR_API_KEY_HERE' with your actual OpenAI API key.
 */

@Injectable({
  providedIn: 'root'
})
export class ChatGptService {
private apiUrl = 'http://127.0.0.1:8080/demo/answerpdf';
 
  constructor(private http: HttpClient) {}
 
  chat(messages:  Array<{ role: string; content: String }>): Observable<string> {
 
    let HTTPOptions:Object = {
 
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text'
    }
    return this.http.get<string>(`${this.apiUrl}?query=${messages[messages.length-1].content}`, HTTPOptions);
  }
}