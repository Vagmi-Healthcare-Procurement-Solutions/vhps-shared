import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideDrawerContentComponent } from '@src/app/shared/layouts/side-drawer-content/side-drawer-content.component';

describe('SideDrawerContentComponent', () => {
  let component: SideDrawerContentComponent;
  let fixture: ComponentFixture<SideDrawerContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideDrawerContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideDrawerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
