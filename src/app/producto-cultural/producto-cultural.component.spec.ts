import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCulturalComponent } from './producto-cultural.component';

describe('ProductoCulturalComponent', () => {
  let component: ProductoCulturalComponent;
  let fixture: ComponentFixture<ProductoCulturalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoCulturalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoCulturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
