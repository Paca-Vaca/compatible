import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-loader',
    template: `
        <div class="loader" [ngClass]="{ 'visible': visible }">
            <div class="content">
                <div class="title">Loading...</div>
                <div class="animation">
                    <span class="first"></span>
                    <span class="second"></span>
                    <span class="third"></span>
                </div>
            </div>
        </div>
    `
})
export class LoaderComponent {
    @Input() visible: boolean;
}
