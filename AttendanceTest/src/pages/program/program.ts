import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Program } from '../../model/program.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';

/**
 * Generated class for the ProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-program',
  templateUrl: 'program.html',
})
export class ProgramPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
  }
  program:Program ={
    id:0,
    name:null,
    batchId:0
  };

  logForm()
  {
    console.log(this.program);
    let headers = new HttpHeaders();
headers.append('Content-Type', 'application/json');
headers.append('Access-Control-Allow-Origin' , '*');
headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
//let body=JSON.stringify(this.student);
this.http.post('https://localhost:44336/api/Programs',this.program,{ headers: headers }).subscribe(res => {
  alert("success "+res);
  }, (err) => {
  alert("failed");
  });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramPage');
  }

}
