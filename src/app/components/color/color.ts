import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-color',
    template: `
        <div class="color-sample" [style.backgroundColor]="color"></div>
    `,
    styles: [`
        .color-sample {
            width: 64px;
            height: 64px;
        }
    `],
})
export class ColorComponent {
    @Input() color: string;
}
