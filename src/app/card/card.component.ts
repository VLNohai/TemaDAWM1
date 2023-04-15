import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() name : string = "name";
  @Input() text : string = "text";
  @Input() photo : string= "noimg.jpg";
  @Input() clickEvent : EventEmitter<string> = new EventEmitter<string>();

  emitEvent(message:string) {
    this.clickEvent.emit(message);
  }
}
