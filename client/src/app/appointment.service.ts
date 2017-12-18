import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppointmentService {

  constructor(private _http: Http) { }

  getAllAppointments(callback){
    this._http.get('/myappointments').subscribe(
      (response) => {
        callback(response.json())
      },
      (err) => {console.log(err);}
    )
  }

  delete(id) {
    this._http.post('/delete', {id: id}).subscribe();
  }

}
