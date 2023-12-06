import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueAddedTaxComponent } from './value-added-tax.component';

describe('ValueAddedTaxComponent', () => {
  let component: ValueAddedTaxComponent;
  let fixture: ComponentFixture<ValueAddedTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValueAddedTaxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValueAddedTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
