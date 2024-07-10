import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private apiUrl = 'https://localhost:5001/api/Calculator';

  constructor(private http: HttpClient) {}

  setFirstNumber(location: string, number: number): Observable<string[]> {
    return this.http.post<string[]>(`${this.apiUrl}/SetFirstNumber?location=${location}`, number);
  }

  setSecondNumber(location: string, number: number): Observable<string[]> {
    return this.http.post<string[]>(`${this.apiUrl}/SetSecondNumber?location=${location}`, number);
  }

  doMath(location: string, operation: string): Observable<number> {
    return this.http.post<number>(`${this.apiUrl}/DoMath?location=${location}`, operation);
  }

  clearNumbers(location: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/ClearNumbers?location=${location}`);
  }
}
