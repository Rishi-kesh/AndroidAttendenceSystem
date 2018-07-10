import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudentList } from '../../model/studentList.model';

/**
 * Generated class for the StudentListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-list',
  templateUrl: 'student-list.html',
})
export class StudentListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
    
  }
 
  ionViewDidLoad() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    //let body=JSON.stringify(this.student);
    this.http.get('https://localhost:44336/api/Students').subscribe(res => {
      this.userTestStatus=res as StudentList[];
    console.log("rishi");
  }, (err) => {
      alert("failed");
      });  }
  itemSelected(item)
  {
    return;
  }
   userTestStatus: StudentList[] = [
    // { "id": 0, "name": "Ram",isPresent:false },
    // { "id": 1, "name": "Sham",isPresent:false },
    // { "id": 2, "name": "Raju",isPresent:false }
];

ChecboxClick(id:number)
{
console.log(id);
var item = this.userTestStatus.filter(x => x.id == id)[0];
item.isPresent=item.isPresent==true?false:true;

}
Submit()
{
  console.log(this.userTestStatus);
}
}
