import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsComponent } from '@src/app/components/home/brands/brands.component';

describe('BrandsComponent', () => {
  let component: BrandsComponent;
  let fixture: ComponentFixture<BrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
