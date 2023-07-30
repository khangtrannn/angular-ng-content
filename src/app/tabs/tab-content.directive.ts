import { Directive, TemplateRef } from "@angular/core";

@Directive({
  selector: 'ng-template[tabContent]',
  standalone: true,
})
export class TabContentDirective {
  // Because this directive selector is based on ng-template, there must be a templateRef
  // constructor(public templateRef: TemplateRef<unknown>) {}
}