import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { TableComponent } from './table';

describe('TableComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TableComponent,
            ],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
        fixture = TestBed.createComponent(TableComponent);
        component = fixture.componentInstance;
    }));
    it('should create the table', () => {
        expect(component.data).toEqual(jasmine.any(Array));
        expect(fixture.debugElement.queryAll(By.css('.name')).length).toEqual(0);
        component.data = [{
            colorName: 'black',
            hexValue: '#000',
        }];
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(By.css('.name')).length).toEqual(1);
    });
});
