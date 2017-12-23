import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BidService {

  constructor(private _http: Http) { }

  getAllBids(callback){
    this._http.get('/mybids').subscribe(
      (response) => {
        callback(response.json())
      },
      (err) => {console.log(err);}
    )
  }

  // delete(id) {
  //   this._http.post('/delete', {id: id}).subscribe();
  // }

}
