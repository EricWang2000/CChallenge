// src/app/calculator/calculator.component.ts
import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './../calculator.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstNumber: number = 0;
  secondNumber: number = 0;
  operation: string = '';
  result: number | null = null;
  errorMessage: string = '';
  operations: string[] = ['add', 'subtract', 'multiply', 'divide'];

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit(): void {
    // Initialization code here if needed
  }

  onFirstNumberChange(): void {
    this.calculate();
  }

  onSecondNumberChange(): void {
    this.calculate();
  }

  onOperationChange(): void {
    this.calculate();
  }

  clear(): void {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.operation = '';
    this.result = null;
    this.errorMessage = '';
  }

  calculate(): void {
    const location = 'default'; // Replace with actual location logic if needed

    this.calculatorService.setFirstNumber(location, this.firstNumber).subscribe({
      next: () => {
        this.calculatorService.setSecondNumber(location, this.secondNumber).subscribe({
          next: () => {
            if (!this.operation) {
              this.errorMessage = 'Please select an operation.';
              this.result = null;
              return;
            }

            this.calculatorService.performOperation(location, this.operation).subscribe({
              next: (res) => {
                this.result = res;
                this.errorMessage = '';
              },
              error: () => {
                this.result = null;
                this.errorMessage = 'Error occurred while performing operation.';
              }
            });
          },
          error: () => {
            this.errorMessage = 'Error setting second number.';
          }
        });
      },
      error: () => {
        this.errorMessage = 'Error setting first number.';
      }
    });
  }
}
