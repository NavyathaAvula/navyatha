import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoApp';
  cs:string="a";
  a='navya';
  b=['abc','def'];
  c=1;
  d:string =new Date().toLocaleTimeString();
  num=1;
  test(){
    //return 1;
    alert("hii");
  }



  // path:string="../assets/bg.jpg";
  // d:string= new Date().toLocaleTimeString();
  // timeid=setInterval(()=>{
  //   this.d=new Date().toLocaleTimeString();
  // },1000)
  
  // active:boolean=true;
  // cx:string="blue";
  // mystyle:object={
  //   color:"red",
  //   background : "black",
  //   border: "5px solid yellow"
  // }
}
