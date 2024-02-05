import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import party from "party-js";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init(); 
    this.party();
  }

  party(){
    const target:any = document.querySelector('#descreption');
    party.confetti(target,{
      count: party.variation.range(20, 40),
      size: party.variation.range(0.8, 1.2),
    })
  }

  

  toSelected(data:any) {
    console.log(data);    
  const element :any = window.document.getElementById(data);
  element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}
    // document.getElementById(data).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }


