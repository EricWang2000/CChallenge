// src/app/calculator.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private apiUrl = 'http://localhost:5141/api/calculator'; // Ensure this matches your backend URL

  constructor(private http: HttpClient) {}

  setFirstNumber(location: string, number: number): Observable<string[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<string[]>(`${this.apiUrl}/SetFirstNumber?location=${location}`, JSON.stringify({ number }), { headers });
  }

  setSecondNumber(location: string, number: number): Observable<string[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<string[]>(`${this.apiUrl}/SetSecondNumber?location=${location}`, JSON.stringify({ number }), { headers });
  }

  performOperation(location: string, operation: string): Observable<number> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<number>(`${this.apiUrl}/DoMath?location=${location}`, JSON.stringify({ operation }), { headers });
  }

  clearNumbers(location: string): Observable<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<void>(`${this.apiUrl}/ClearNumbers?location=${location}`, { headers });
  }
}
