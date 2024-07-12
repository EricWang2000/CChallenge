# CodingChallenge

These are all the files I worked on, and should run on Angular 18 completely updated with no module files as 17+ deemed those mostly obsolete.

The angular code I edited is all in the CalculatorApp folder, where you can just npm install with Angular 18, then ng serve.

The C# code is all under CalculatorAPI, except for the tests which you have to go to CalculatorTests and run dotnet tests there.

All tests for both C# and Angular work as well, you can check with ng test or dotnet test.

just make sure you dotnet run on CalculatorAPI, and then in a separate terminal ng serve on CalculatorApp. You can then go to the localhost that it designates.


My decisions for the C# code were as follows, I defined the functions I wanted in the interface code, and then the implementations are in the implementation folder, where the code goes from something abstract to something actually tangible. Obviously the Controller is there to handle any requests from the user and play out these functions in real time.

For the Angular code, I simply wanted a straightforward calculator design, completely basic functionality with some nicely formatted CSS and functional buttons to do the proper arithmetic.

I suppose if I were to improve on my current calculator, I could add fraction arithmetic to the calculator, it would just involve some tweaking of the multiply functions, calculating a common multiple of the denominator function, and storing numbers as temporary variables in the arithmetic functions so that there can be a numerator and denominator in the output.
