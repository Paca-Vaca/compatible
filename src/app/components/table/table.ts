import { Component, Input } from '@angular/core';
import { Table } from '../../interfaces/table';

@Component({
    selector: 'app-table',
    template: `
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Value</th>
                    <th>Sample</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let x of data;">
                    <td class="name">{{ x.colorName }}</td>
                    <td class="value">
                        <span>{{ x.hexValue }}</span>
                    </td>
                    <td class="sample">
                        <app-color [color]="x.hexValue"></app-color>
                    </td>
                </tr>
            </tbody>
        </table>
    `,
})
export class TableComponent {
    @Input() data: Table[] = [];
}
