import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  total: any;
  entries: any;
  noofpage: any;
  perpage: any = 5;
  actionbutton: any =[];
  arrays: any = [];
  ngOnInit(): any{


    this.total = this.entries.length
    this.noofpage =  Math.ceil(this.total/this.perpage )
// alert(this.total)
// alert(this.noofpage)
    for(var x=1 ; x <= this.noofpage  ; x++){

       this.actionbutton.push(x)
      console.log("this is calledddd");
      console.log (this.actionbutton);

    }
  }


  page1(index:any)
  {
// alert(index)

if(index == 1)
{

this.arrays = this.entries.slice(0,5);
}
if(index == 2)
{

this.arrays = this.entries.slice(5,10);
console.log(this.arrays);

}
if(index == 3)
{

this.arrays = this.entries.slice(10,15);
}
if(index == 4)
{

this.arrays = this.entries.slice(15,20);
}
  }


}
