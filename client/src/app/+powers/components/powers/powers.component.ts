import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Power} from "../../../core/models/power.model";

@Component({
  selector: 'app-powers',
  templateUrl: './powers.component.html',
  styleUrls: ['./powers.component.scss']
})
export class PowersComponent {

  @Input() loading: boolean;

  @Input() powers: Power[];

  @Output() deleteChange = new EventEmitter<Power>();

  @Output() editChange = new EventEmitter<Power>();

  constructor() {
  }

  // ngOnChanges() {
  //   if (this.powers) {
  //     this.powers = this.powers.sort( (a,b) => {
  //       const aName = a.name.toUpperCase();
  //       const bName = b.name.toUpperCase();
  //       if (aName < bName) {
  //         return -1;
  //          else if (aName > bName)
  //       }
  //
  //     })
  //   }
  // }


// .sort((a, b) => {
//   const aName = a.name.toUpperCase();
//   const bName = b.name.toUpperCase();
//   if (aName < bName) {
//   return -1;
// } else if (aName > bName) {
//   return 1;
// }
// return 0;
// }), state);
}
