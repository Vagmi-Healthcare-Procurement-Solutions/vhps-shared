import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisersComponent } from '@src/app/components/home/advertisers/advertisers/advertisers.component';

describe('AdvertisersComponent', () => {
  let component: AdvertisersComponent;
  let fixture: ComponentFixture<AdvertisersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
