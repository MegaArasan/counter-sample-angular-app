import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-gamecomponent',
  templateUrl: './gamecomponent.component.html',
  styleUrls: ['./gamecomponent.component.css']
})
export class GamecomponentComponent {
@Input() public count:number=0;
@Input() oddArray:Array<number>=[];
@Input() evenArray:Array<number>=[];
interval:any;
@Output() countchange=new EventEmitter<number>();
  start(){
   this.interval= setInterval(()=>{
      this.countchange.emit(this.count+1);
    this.count=this.count+1;
    }, 1000)
  }
  stop(){
    clearInterval(this.interval)
  }
}
