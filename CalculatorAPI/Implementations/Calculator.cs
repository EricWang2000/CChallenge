using CalculatorAPI.Interfaces;
using System;
using System.Collections.Generic;

namespace CalculatorAPI.Implementations
{
    public class Calculator : ICalculator
    {
        private readonly INumberStore _numberStore;

        public Calculator(INumberStore numberStore)
        {
            _numberStore = numberStore;
        }

        public List<string> ListAvailableOperations(string location)
        {
            var numbers = _numberStore.RetrieveNumbers(location);
            if (numbers.Count < 2)
            {
                return new List<string>();
            }
            return new List<string> { "Add", "Subtract", "Multiply", "Divide" };
        }

        public double PerformCalculation(string location, string operation)
        {
            var numbers = _numberStore.RetrieveNumbers(location);
            if (numbers.Count < 2)
            {
                throw new InvalidOperationException("Insufficient numbers to perform calculation.");
            }

            double firstNumber = numbers[1];
            double secondNumber = numbers[2];

            return operation.ToLower() switch
            {
                "add" => firstNumber + secondNumber,
                "subtract" => firstNumber - secondNumber,
                "multiply" => firstNumber * secondNumber,
                "divide" => firstNumber / secondNumber,
                _ => throw new InvalidOperationException("Invalid operation."),
            };
        }
    }
}
