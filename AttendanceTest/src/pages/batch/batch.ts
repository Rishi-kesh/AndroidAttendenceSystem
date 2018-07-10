import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Batch } from '../../model/batch.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';

/**
 * Generated class for the BatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-batch',
  templateUrl: 'batch.html',
})
export class BatchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
  }

  batch:Batch={
    id:0,
    name:null
  };

  logForm()
  {
    console.log(this.batch);
    let headers = new HttpHeaders();
headers.append('Content-Type', 'application/json');
headers.append('Access-Control-Allow-Origin' , '*');
headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
//let body=JSON.stringify(this.student);
this.http.post('https://localhost:44336/api/Batches',this.batch,{ headers: headers }).subscribe(res => {
  alert("success "+res);
  }, (err) => {
  alert("failed");
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BatchPage');
  }

}
