import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countingVowel = true;
  count=0;
  text:string='';
  handleChange(){
    this.count=0;
    if (this.countingVowel){ for (let i = 0; i < this.text.length; i++) {
      if(this.isVowel(this.text[i]))
      {
        this.count = this.count+1;
      }
    }}
    else
    {
      for (let i = 0; i < this.text.length; i++) {
        if(!this.isVowel(this.text[i]) && this.isAlpha(this.text[i]))
        {
          this.count = this.count+1;
        }
      }
    }
  }

  resetText(){
    this.text="";
    this.handleChange();
  }

  toggleCountType(countingVowel:boolean){
    this.countingVowel = !countingVowel
    this.handleChange();
  }

  isVowel(c:string):boolean {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
  }

  isAlpha = function(ch:string){
    return /^[A-Z]$/i.test(ch);
  }
}
