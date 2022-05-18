import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cardNumber: string = '';
  name:string = '';

  month :number=0;

  year:number=11;

  generateName()
  {
    var name:string[] =['latha','salma','bhargav','guru','shiva'] ;
    let i:number = Math.floor(Math.random()*(4 - 0))+0;
    // console.log(rname[i]);
    return name[i];
  }

  show:boolean=false;
  cardNumberGenerate()
  {
    let n:any = Math.floor(Math.random() * (7999999999999990 - 7900000000000009)) + 7900000000000009;
    // console.log(n);
    // return n ;
    var m:number = n;
    var ans = 0;
    var digits = [];
    while (m) {
      digits.push(m % 10);
      m = m / 10;
    }
    for (let i = 0; i < 16; i++) {
      if (i % 2 == 0) {
        ans += digits[i];
      }
      else {
        if (digits[i] == 5) {
          ans += 1;
        } else if (digits[i] == 6) {
          ans += 3;
        } else if (digits[i] == 7) {
          ans += 5;
        } else if (digits[i] == 8) {
          ans += 7;
        } else if (digits[i] == 9) {
          ans += 9;
        }
      }
    }
    const result = n - ans % 10;

    // console.log (result);
    // return result;
    let x = result.toString().replace(/\d{4}(?=.)/g, '$& ');
    return x;

  }

  cardGenerator() :string {
    this.cardNumber=this.cardNumberGenerate();
    this.name=this.generateName();
    this.show=true;
    const d = new Date();
     this.month = d.getMonth()+1;
     this.year = d.getFullYear()+2;
     console.log(this.month);
    return this.name;
  }
}
