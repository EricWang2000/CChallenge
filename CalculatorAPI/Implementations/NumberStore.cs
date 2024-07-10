using CalculatorAPI.Interfaces;
using System.Collections.Generic;

namespace CalculatorAPI.Implementations
{
    public class NumberStore : INumberStore
    {
        private readonly Dictionary<string, Dictionary<int, double>> _store = new Dictionary<string, Dictionary<int, double>>();

        public void StoreNumber(string location, int position, double number)
        {
            if (!_store.ContainsKey(location))
            {
                _store[location] = new Dictionary<int, double>();
            }
            _store[location][position] = number;
        }

        public void ClearNumbers(string location)
        {
            if (_store.ContainsKey(location))
            {
                _store[location].Clear();
            }
        }

        public Dictionary<int, double> RetrieveNumbers(string location)
        {
            if (_store.ContainsKey(location))
            {
                return new Dictionary<int, double>(_store[location]);
            }
            return new Dictionary<int, double>();
        }
    }
}
