import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchTaxComponent } from './church-tax.component';

describe('ChurchTaxComponent', () => {
  let component: ChurchTaxComponent;
  let fixture: ComponentFixture<ChurchTaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChurchTaxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChurchTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
