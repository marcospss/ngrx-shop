import { Component, Input } from '@angular/core';
import { Sections } from '@core/models/sections.model';
@Component({
  selector: 'mps-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input()
  sections: Sections;

  get slug() {
    return this.sections.slug;
  }

  get title() {
    return this.sections.title;
  }
}
