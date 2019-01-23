import { Component, OnInit } from '@angular/core';
import { ApiService } from "./api.service";
import { elementEventFullName } from '@angular/core/src/view';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {
  currenciesList = [];
  countriesList;
  nameLang;
  keys = Object.keys;
  currCounSelected: Object = {};
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getCurrencies().subscribe(data => {
      console.log(data)
      this.currenciesList = data;
      this.currCounSelected = this.currenciesList[0].Countries[0];
    })
  }

  selectCurr(ev) {
    console.log("====>")
    const i = ev.target.value;
    this.currCounSelected = this.currenciesList[i].Countries[0];
    console.log(i)
    const countries = this.currenciesList[i].Countries[0]
    console.log(countries)
    this.countriesList = Object.keys(countries).map(elem => ({ lang: elem, value: countries[elem] }))
    console.log(this.countriesList)
    this.nameLang = Object.keys(this.currenciesList[i].Name).map(elem => ({ lang: elem, value: this.currenciesList[i].Name[elem] }))

  }

}
