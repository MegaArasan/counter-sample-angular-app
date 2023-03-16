import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter';
  @Input() count:number=0;
  @Output() public oddArray:Array<number>=[];
  @Output() public evenArray:Array<number>=[];
  send(event: any){
    this.count=event;
    if(this.count%2==0){
      this.evenArray.push(this.count)
    }else{
      this.oddArray.push(this.count)
    }
  }
}
