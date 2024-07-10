# CodingChallenge

These are all the files I worked on, not including the files created from running ng commands or the files generated from running the C# code.

The angular code I edited were all in the ClientApp/src/app folder, so that's attached in its entirety, with a Calculator component and all of the app component.

The C# code falls under the 3 other folders and any files you see at the beginning, as well as some Unit Tests for good measure. You can in theory run custom inputs using curl -X POST commands, but I assure you that this works.

If you want all the code, I can send it but I would likely need a secure folder to send to.


My decisions for the C# code were as follows, I defined the functions I wanted in the interface code, and then the implementations are in the implementation folder, where the code goes from something abstract to something actually tangible. Obviously the Controller is there to handle any requests from the user and play out these functions in real time.

For the Angular code, I simply wanted a straightforward calculator design, red and white, with functional buttons to do the proper arithmetic.

I suppose if I were to improve on my current calculator, I could add fraction arithmetic to the calculator, it would just involve some tweaking of the multiply functions, calculating a common multiple of the denominator function, and storing numbers as temporary variables in the arithmetic functions so that there can be a numerator and denominator in the output.
