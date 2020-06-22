import { Component } from '@angular/core';

@Component({
  selector: 'app-sucess-msg',
  templateUrl: './sucess-msg.component.html',
  styleUrls: ['./sucess-msg.component.css']
})
export class SucessMsgComponent {
  public msgSucess: string;
  constructor() { }

  setMsgSucess(msg: string, tempo: number = 5000)
  {
    this.msgSucess = msg;
    setTimeout(() =>
    {
      this.msgSucess = null;
    }, tempo);
  }
}
