import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Student } from '../../model/student.model';
import { HomePage } from '../home/home';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the CreateStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-student',
  templateUrl: 'create-student.html',
})
export class CreateStudentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
  }

  student:Student={

    id:0,
    name:null,
    rollNo:0
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateStudentPage');
  }

  logForm()
  {

    console.log(this.student);
    let headers = new HttpHeaders();
headers.append('Content-Type', 'application/json');
headers.append('Access-Control-Allow-Origin' , '*');
headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
//let body=JSON.stringify(this.student);
this.http.post('https://localhost:44336/api/Students',this.student,{ headers: headers }).subscribe(res => {
  alert("success "+res);
  }, (err) => {
  alert("failed");
  });
  }
  Ok()
  {
    this.navCtrl.push( HomePage);


  }

}
