import { Component, ViewChild, ElementRef } from '@angular/core';

/** Holds an enumerated list of calculator operations. */
enum Operator {
	add,
	subtract,
	divide,
	multiply,
	clear,
	equals
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	/** App title. */
	title = 'calculator';

	/** Public reference to the operators enum. */
	operator = Operator;

	/** Holds the last value set by the calculator. */
	private lastValue: number;

	/** Holds the current value in the calculator display. */
	private currentValue: number;

	/** DOM reference to the calculator display element. */
	@ViewChild('display', { static: true }) display: ElementRef;

	/**
	 * Handle the click event for number buttons.
	 * @param stringValue The value passed in string form.
	 */
	onClickNumber(stringValue: string): void {
		const value = parseInt(stringValue);
		const display = this.display.nativeElement;
		const atZero = value === 0;

		if (atZero) {
			display.innerText = value;
		} else {
			display.innerText += value;
		}

		this.lastValue = value;
	}

	/**
	 * Handles the click for the operator buttons.
	 * @param operator The operator value of the clicked
	 */
	onClickOperator(operator: Operator): void {
		this.currentValue = parseInt(this.display?.nativeElement?.innerText);
		switch (operator) {
			case Operator.add:
				this.add();
				break;
			case Operator.subtract:
				this.subtract();
				break;
			case Operator.multiply:
				this.multiply();
				break;
			case Operator.divide:
				this.divide();
				break;
			case Operator.clear:
				this.clear();
				break;
			case Operator.equals:
				this.equals();
				break;
			default:
				break;
		}

		// At the end of every operation, reset the value of the display
		this.display.nativeElement.innerText = '0';
	}

	private add(): void {
		if (!this.lastValue || !this.currentValue) return;
		console.log('operator clicked');
	}

	private subtract(): void {
		if (!this.lastValue || !this.currentValue) return;
		console.log('operator clicked');
	}

	private multiply(): void {
		if (!this.lastValue || !this.currentValue) return;
		console.log('operator clicked');
	}

	private divide(): void {
		if (!this.lastValue || !this.currentValue) return;
		console.log('operator clicked');
	}

	private equals(): void {
		if (!this.lastValue || !this.currentValue) return;
		console.log('operator clicked');
	}

	private clear(): void {
		if (!this.lastValue || !this.currentValue) return;
		console.log('operator clicked');
	}
}
