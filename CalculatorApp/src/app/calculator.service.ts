import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private apiUrl = 'http://localhost:5141'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) { }

  performOperation(firstNumber: number, secondNumber: number, operation: string): Observable<number> {
    const body = { firstNumber, secondNumber, operation };
    return this.http.post<number>(`${this.apiUrl}/calculate`, body);
  }
}
