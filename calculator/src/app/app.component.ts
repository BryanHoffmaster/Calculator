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
	operators = Operator;

	/** The last operator action. */
	private operatorAction: Operator;

	/** Holds the last value set by the calculator. */
	private lastValue: number;

	/** Holds the current value in the calculator display. */
	currentValue: number = 0;

	/** Returns the text value of the calculator display. */
	get displayText(): string {
		return this.currentValue.toString();
	}

	set displayText(value: string) {
		if (value) {
			this.displayText = value;
		}
	}

	/** DOM reference to the calculator display element. */
	@ViewChild('display', { static: true }) display: ElementRef;

	/**
	 * Handle the click event for number buttons.
	 * @param stringValue The value passed in string form.
	 */
	onClickNumber(stringValue: string): void {
		const valueIsZero = this.currentValue === 0;

		// if we've performed an action, start a new value on number button press
		if (valueIsZero || !this.operatorAction) {
			const value = parseInt(stringValue);
			this.setLastValue(value);
		} else {
			// build the string and THEN set it to that int value
			const currentStringValue = this.currentValue.toString() + stringValue;
			const value = parseInt(currentStringValue);
			this.currentValue = value;
		}
	}

	/**
	 * Handles the click for the operator buttons.
	 * @param operator The operator value of the clicked
	 */
	onClickOperator(operator: Operator): void {
		switch (operator) {
			case Operator.add:
				this.operatorAction = Operator.add;
				this.setLastValue();
				break;
			case Operator.subtract:
				this.operatorAction = Operator.subtract;
				this.setLastValue();
				break;
			case Operator.multiply:
				this.operatorAction = Operator.multiply;
				this.setLastValue();
				break;
			case Operator.divide:
				this.operatorAction = Operator.divide;
				this.setLastValue();
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

	/**
	 * Sets the last value to the current value, and if a 
	 * value is provided, sets the current value to it. Otherwise
	 * it's reset back to zero.
	 * @param currentValue The new current value.
	 */
	private setLastValue(currentValue?: number): void {
		this.lastValue = this.currentValue;
		this.currentValue = currentValue ?? 0;
	}

	/**
	 * Sets the current value
	 * @param value What the current value will be
	 */
	private setCurrentValue(value: number): void {
		if (!value) return;
		this.currentValue = value;
		this.operatorAction = null;
	}

	private add(): void {
		if (!this.lastValue || !this.currentValue) return;
		// order does not matter
		this.setCurrentValue((this.currentValue + this.lastValue));
	}

	private subtract(): void {
		if (!this.lastValue || !this.currentValue) return;
		// order matters
		this.setCurrentValue((this.lastValue - this.currentValue));
	}

	private multiply(): void {
		if (!this.lastValue || !this.currentValue) return;
		// order does not matter
		this.setCurrentValue((this.lastValue * this.currentValue))
	}

	private divide(): void {
		if (!this.lastValue || !this.currentValue) return;
		// order does matter
		// dividing by zero just returns zero
		this.setCurrentValue((this.lastValue / this.currentValue));
	}

	/** Performs the current operator action against the last and current value. */
	private equals(): void {
		if (!this.lastValue || !this.currentValue) return;
		switch (this.operatorAction) {
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
			default:
				break;
		}
	}

	private clear(): void {
		this.lastValue = null;
		this.currentValue = 0;
	}
}
