import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }

  girisKayit(){
      const giris=document.getElementById('giris');
      const kayit=document.getElementById('kayit');
      if(giris?.style.display=='block'){
      giris?.style.setProperty('display','none');
      kayit?.style.setProperty('display','block');
    }
    else{
      kayit?.style.setProperty('display','none');
      giris?.style.setProperty('display','block');
    }
  }
  ngOnInit() {
  }

}
