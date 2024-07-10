namespace CalculatorAPI.Interfaces
{
    public interface INumberStore
    {
        void StoreNumber(string location, int position, double number);
        void ClearNumbers(string location);
        Dictionary<int, double> RetrieveNumbers(string location);
    }
}
