import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'calculator';

	@ViewChild('display', { static: true }) display: ElementRef;

	onButtonClick(element: HTMLButtonElement) {
		const value = element.innerText;
		const display = this.display.nativeElement;
		const atZero = display.innerText === '0';

		if (atZero) {
			display.innerText = value;
		} else {
			display.innerText += value;
		}

	}
}
