import { Component, ViewChild, ChangeDetectorRef, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
// Register Custom Elements for Angular
import { Carousel, CarouselItem } from 'nativescript-carousel';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { UiService } from './shared/ui/ui.service';
import { Subscription } from 'rxjs';
import { RouterExtensions } from 'nativescript-angular/router';

registerElement('Carousel', () => Carousel);
registerElement('CarouselItem', () => CarouselItem);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  moduleId: module.id
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild(RadSideDrawerComponent, { static: false }) public drawerComponent: RadSideDrawerComponent;
  private drawer: RadSideDrawer;
  private drawerSub: Subscription;

  constructor(private _changeDetectionRef: ChangeDetectorRef,
    private uiService: UiService) {}

  ngAfterViewInit(): void {
    this.drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
  }

  ngOnInit() {
    this.drawerSub = this.uiService.drawerState.subscribe(() => {
      if (this.drawer) {
        this.drawer.toggleDrawerState();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.drawerSub) {
      this.drawerSub.unsubscribe();
    }
  }
}
