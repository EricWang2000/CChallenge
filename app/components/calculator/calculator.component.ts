import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstNumber: number | null = null;
  secondNumber: number | null = null;
  operation: string | null = null;
  result: number | null = null;
  operations: string[] = [];
  errorMessage: string | null = null;

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit(): void {}

  onFirstNumberChange(event: any): void {
    const number = parseFloat(event.target.value);
    if (!isNaN(number)) {
      this.calculatorService.setFirstNumber('User', number).subscribe(
        (ops) => {
          this.operations = ops;
          this.errorMessage = null;
        },
        (error) => {
          this.errorMessage = 'Error setting first number';
        }
      );
    }
  }

  onSecondNumberChange(event: any): void {
    const number = parseFloat(event.target.value);
    if (!isNaN(number)) {
      this.calculatorService.setSecondNumber('User', number).subscribe(
        (ops) => {
          this.operations = ops;
          this.errorMessage = null;
        },
        (error) => {
          this.errorMessage = 'Error setting second number';
        }
      );
    }
  }

  onOperationChange(event: any): void {
    this.operation = event.target.value;
    if (this.operation) {
      this.calculatorService.doMath('User', this.operation).subscribe(
        (result) => {
          this.result = parseFloat(result.toFixed(4));
          this.errorMessage = null;
        },
        (error) => {
          this.errorMessage = 'Error performing operation';
        }
      );
    }
  }

  clear(): void {
    this.calculatorService.clearNumbers('User').subscribe(
      () => {
        this.firstNumber = null;
        this.secondNumber = null;
        this.operation = null;
        this.result = null;
        this.operations = [];
        this.errorMessage = null;
      },
      (error) => {
        this.errorMessage = 'Error clearing numbers';
      }
    );
  }
}
