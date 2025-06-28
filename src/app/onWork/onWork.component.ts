import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onWork',
  templateUrl: './onWork.component.html',
  styleUrls: ['./onWork.component.css']
})
export class OnWorkComponent implements OnInit {

  constructor() { }
  bmiGoster(){
    const BMI=document.getElementById('BMI');
    if(BMI?.style.display=='none')
    BMI.style.setProperty('display','flex');
    else
    BMI?.style.setProperty('display','none');
  }

  bmiHesapla(){
    const kilobox=document.getElementById('kilo') as HTMLInputElement;
    const boybox=document.getElementById('boy') as HTMLInputElement;
    const sonucbox=document.getElementById('sonuc');

    if(kilobox.value!=""&&boybox.value!="")
    {
      const kilo=parseInt(kilobox.value)
      const boy=parseInt(boybox.value)/100;
      var endeks=Math.round(kilo/(boy*boy))
      if(sonucbox){
      if(endeks<18.5)
      sonucbox.innerText="Sonuç: "+endeks+" Malesef fazla zayıfsın. Salonumuza üye olarak bu sıkıntını çözebilirsin."
      else if(endeks>18.5&&endeks<25)
      sonucbox.innerText="Sonuç: "+endeks+" Sağlıklı bir vücuda sahipsin. Yine de salonumuza üye olup daha kaslı ve fit olabilirsin."
      else if(endeks>25&&endeks<30)
      sonucbox.innerText="Sonuç: "+endeks+" Biraz kilolusun. Salonumuza üye olarak kısa sürede fit olabilirsin."
      else if(endeks>30&&endeks<40)
      sonucbox.innerText="Sonuç: "+endeks+" Kilolu olmanın bir sonraki evresi olan şişman kategorisindesin. Seçim senin Daha fazla kilo alıp obezite mi olmak istiyorsun yoksa o fazlalıkları yok edip uzun yaşamak mı?"
      else if(endeks>40)
      sonucbox.innerText="Sonuç: "+endeks+" Hayatını tehllikeye atacak kadar kilolusun. Kendine bunu nasıl yaptıysan hemen bundan vazgeç. Önce doktora sonra salonumuza uğramak zorundasın."
    }}
  }
  ngOnInit() {
  }

}
