import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  text: string;
  translatedText: string;

  constructor(private http: Http, public navCtrl: NavController) {

  }

  translateText() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const uriBase = 'https://server-googletranslateapi.wedeploy.io/translate';
    const data = {
      text: this.text,
      from: 'en',
      to: 'pt'
    };

    this.http.post(uriBase, data, { headers: headers })
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        this.translatedText = data.text;
      });
  }

}
