import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { CalculatorService } from './calculator.service';
import { CalculatorComponent } from './calculator/calculator.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent, // Assume AppComponent is a standalone component
        CalculatorComponent // Import CalculatorComponent as it is a standalone component
      ],
      providers: [
        CalculatorService,
        provideHttpClient()
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'CalculatorApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('CalculatorApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Ensure the component and template are rendered
    const compiled = fixture.nativeElement as HTMLElement;
    console.log(compiled.innerHTML); // Log the entire HTML to debug
    expect(compiled.querySelector('h1')?.textContent).toContain('Welcome to CalculatorApp!');
  });
});
