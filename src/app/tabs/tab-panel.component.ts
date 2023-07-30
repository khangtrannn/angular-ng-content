import { Component, ContentChild, Input, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { TabGroupComponent } from "./tab-group.component";
import { TabContentDirective } from "./tab-content.directive";

@Component({
  selector: 'app-tab-panel',
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
  standalone: true,
})
export class TabPanelComponent implements OnInit {
  @Input({ required: true }) title!: string;

  // This template will be used by TabGroupComponent
  // <ng-container *ngTemplateOutlet="tabPanelList[activeIndex].panelBody"></ng-container>
  // static: true let 'panelBody' is resolved in ngOnInit
  @ViewChild(TemplateRef, { static: true }) implicitBody!: TemplateRef<unknown>;

  // read: TemplateRef let us get the TemplateRef reference instead of TabContentDirective reference
  @ContentChild(TabContentDirective, { static: true, read: TemplateRef }) explicitBody!: TemplateRef<unknown>;

  constructor(private tabGroup: TabGroupComponent) {}

  ngOnInit(): void {
    // Register itself to tabPanelList in TabGroupComponent
    console.log(this.explicitBody);
    this.tabGroup.addTab(this);
  }

  get panelBody(): TemplateRef<unknown> {
    return this.explicitBody || this.implicitBody;
  }
}