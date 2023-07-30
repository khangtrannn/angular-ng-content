import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabGroupComponent } from './tabs/tab-group.component';
import { TabPanelComponent } from './tabs/tab-panel.component';
import { TabBsGroupComponent } from './tabs/tab-bs-group.component';
import { CounterComponent } from './counter/counter.component';
import { TabContentDirective } from './tabs/tab-content.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TabGroupComponent, TabPanelComponent, TabBsGroupComponent, CounterComponent, TabContentDirective],
  template: `
    <app-tab-bs-group [(activeIndex)]="tabBsIndex">
      <app-tab-panel title="First Tab">
        <ng-template tabContent>
          First Tab Content<br/>
          <app-counter></app-counter>
        </ng-template>
      </app-tab-panel>
      <app-tab-panel title="Second Tab">
        <ng-template tabContent>
          Second Tab Content<br/>
          <app-counter></app-counter>
        </ng-template>
      </app-tab-panel>
      <app-tab-panel title="Third Tab">
        <ng-template tabContent>
          Third Tab Content<br/>
          <app-counter></app-counter>
        </ng-template>
      </app-tab-panel>
      <app-tab-panel title="Fourth Tab">
        <ng-template tabContent>
          Fourth Tab Content<br/>
          <app-counter></app-counter>
        </ng-template> 
      </app-tab-panel>
    </app-tab-bs-group>
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-ng-content';
  tabBsIndex = 0;
}
