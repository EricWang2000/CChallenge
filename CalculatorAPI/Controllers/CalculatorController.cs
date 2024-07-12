using CalculatorAPI.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace CalculatorAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CalculatorController : ControllerBase
    {
        private readonly ICalculator _calculator;
        private readonly INumberStore _numberStore;

        public CalculatorController(ICalculator calculator, INumberStore numberStore)
        {
            _calculator = calculator;
            _numberStore = numberStore;
        }

        [HttpPost("SetFirstNumber")]
        public ActionResult<List<string>> SetFirstNumber([FromQuery] string location, [FromBody] SetNumberRequest request)
        {
            _numberStore.StoreNumber(location, 1, request.Number);
            return Ok(_calculator.ListAvailableOperations(location));
        }

        [HttpPost("SetSecondNumber")]
        public ActionResult<List<string>> SetSecondNumber([FromQuery] string location, [FromBody] SetNumberRequest request)
        {
            _numberStore.StoreNumber(location, 2, request.Number);
            return Ok(_calculator.ListAvailableOperations(location));
        }

        [HttpPost("DoMath")]
        public ActionResult<double> DoMath([FromQuery] string location, [FromBody] DoMathRequest request)
        {
            return Ok(_calculator.PerformCalculation(location, request.Operation));
        }

        [HttpDelete("ClearNumbers")]
        public IActionResult ClearNumbers([FromQuery] string location)
        {
            _numberStore.ClearNumbers(location);
            return NoContent();
        }
    }

    public class SetNumberRequest
    {
        public double Number { get; set; }
    }

    public class DoMathRequest
    {
        public string Operation { get; set; }
    }
}
