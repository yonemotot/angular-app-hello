import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import {MycheckService} from '../mycheck.Service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title:string;
  message:string;
  price:number;
  now:Date;
  styleClass:string;
  count:number;
  text1:string;

  constructor(private service:MycheckService) {}
    // setInterval(
    //   () => {this.now = new Date();},1000);
    // setInterval(
    //   () => {
    //     this.styleClass = this.styleClass == 'red' ? '': 'red';
    //   console.log(this.styleClass);},1000);
    // 
  ngOnInit() {
    this.title = 'Hello-app';
    // this.message = ['新しいコンポーネントです。',
    // '複数のメッセージを表示できます。',
    // '属性は配列を設定します。'];
    // this.price = 123450;
    // this.styleClass = 'red';
    // this.count = 0;
    // this.text1='';
    this.message = this.service.hello('Taro');
    
  }
  // today() {
  //   return  this.now.toLocaleString();
  // }

  // doClick() {
  //   this.message = ++this.count + "回、クリックしました。";
  // }
}
