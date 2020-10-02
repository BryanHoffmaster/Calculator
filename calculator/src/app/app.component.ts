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

	/** The last operator action. */
	private operatorAction: Operator;

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
		const valueIsZero = display.innerText === '0';

		if (valueIsZero) {
			display.innerText = value;
		} else {
			display.innerText += value;
		}

		this.currentValue = parseInt(display.innerText);
	}

	/**
	 * Handles the click for the operator buttons.
	 * @param operator The operator value of the clicked
	 */
	onClickOperator(operator: Operator): void {
		switch (operator) {
			case Operator.add:
				this.operatorAction = Operator.add;
				this.setCurrentValue();
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
	}

	private setCurrentValue(): void {
		// move current to last
		this.lastValue = this.currentValue;
		// move current to zero
		this.currentValue = 0;
		// display the zero
		this.display.nativeElement.innerText = '0';
	}

	private add(): void {
		if (!this.lastValue || !this.currentValue) return;

		const addedValue = (this.currentValue + this.lastValue);
		// display the added value
		this.display.nativeElement.innerText = addedValue.toString();

		// set it as the current value
		this.currentValue = addedValue;

		// reset the action
		this.operatorAction = null;
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

	/** Performs the current operator action against the last and current value. */
	private equals(): void {
		if (!this.lastValue || !this.currentValue) return;
		switch (this.operatorAction) {
			case Operator.add:
				this.add();
				break;
			case Operator.subtract:
				break;
			case Operator.multiply:
				break;
			case Operator.clear:
				break;
			case Operator.equals:
				break;
			default:
				break;
		}
	}

	private clear(): void {
		if (!this.lastValue || !this.currentValue) return;
		console.log('operator clicked');
	}
}
