using Microsoft.VisualStudio.TestTools.UnitTesting;
using CalculatorAPI.Interfaces;
using CalculatorAPI.Implementations;

namespace CalculatorTests
{
    [TestClass]
    public class CalculatorTests
    {
        private INumberStore _numberStore = null!;
        private ICalculator _calculator = null!;

        [TestInitialize]
        public void Setup()
        {
            _numberStore = new NumberStore();
            _calculator = new Calculator(_numberStore);
        }

        [TestMethod]
        public void TestAddition()
        {
            _numberStore.StoreNumber("UserA", 1, 2);
            _numberStore.StoreNumber("UserA", 2, 3);
            var result = _calculator.PerformCalculation("UserA", "Add");
            Assert.AreEqual(5, result);
        }

        [TestMethod]
        public void TestSubtraction()
        {
            _numberStore.StoreNumber("UserA", 1, 5);
            _numberStore.StoreNumber("UserA", 2, 3);
            var result = _calculator.PerformCalculation("UserA", "Subtract");
            Assert.AreEqual(2, result);
        }

        [TestMethod]
        public void TestMultiplication()
        {
            _numberStore.StoreNumber("UserB", 1, 13);
            _numberStore.StoreNumber("UserB", 2, 7);
            var result = _calculator.PerformCalculation("UserB", "Multiply");
            Assert.AreEqual(91, result);
        }

        [TestMethod]
        public void TestDivision()
        {
            _numberStore.StoreNumber("UserB", 1, 20);
            _numberStore.StoreNumber("UserB", 2, 4);
            var result = _calculator.PerformCalculation("UserB", "Divide");
            Assert.AreEqual(5, result);
        }
    }
}
