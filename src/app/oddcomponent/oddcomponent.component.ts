import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-oddcomponent',
  templateUrl: './oddcomponent.component.html',
  styleUrls: ['./oddcomponent.component.css']
})
export class OddcomponentComponent {
@Input() oddArray:Array<number>=[];
}
