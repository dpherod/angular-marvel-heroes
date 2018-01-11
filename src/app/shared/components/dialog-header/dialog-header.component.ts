import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-dialog-header',
  templateUrl: './dialog-header.component.html',
  styleUrls: ['./dialog-header.component.scss']
})
export class DialogHeaderComponent {

  @Output() close = new EventEmitter<void>();

  constructor() {
  }

}
