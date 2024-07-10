namespace CalculatorAPI.Interfaces
{
    public interface ICalculator
    {
        List<string> ListAvailableOperations(string location);
        double PerformCalculation(string location, string operation);
    }
}
