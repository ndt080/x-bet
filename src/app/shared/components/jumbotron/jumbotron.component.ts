import { Component, Input } from "@angular/core";

@Component({
  selector: 'jumbotron, [jumbotron]',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent {
  @Input() isHide = false;
  @Input() withDescription = true;

  onHideButtonClick() {
    this.isHide = !this.isHide;
  }
}
