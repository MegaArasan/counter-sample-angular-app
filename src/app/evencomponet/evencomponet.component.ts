import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-evencomponet',
  templateUrl: './evencomponet.component.html',
  styleUrls: ['./evencomponet.component.css']
})
export class EvencomponetComponent {
  @Input() evenArray:Array<number>=[];
}
