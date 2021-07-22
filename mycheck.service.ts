import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MycheckService {

  constructor() { }

  hello(name:string) {
    return "Hello, " + name + "!!";
  }
}
