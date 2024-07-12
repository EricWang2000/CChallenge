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
    if (!this.operation || isNaN(this.firstNumber) || isNaN(this.secondNumber)) {
      this.result = null;
      this.errorMessage = 'Please enter valid numbers and select an operation.';
      return;
    }

    this.calculatorService.performOperation(this.firstNumber, this.secondNumber, this.operation)
      .subscribe(
        result => {
          this.result = result;
          this.errorMessage = '';
        },
        error => {
          this.result = null;
          this.errorMessage = 'Error occurred while performing operation.';
        }
      );
  }
}
