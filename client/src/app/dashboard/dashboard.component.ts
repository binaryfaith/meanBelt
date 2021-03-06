import { Component, OnInit } from '@angular/core';
import { BidService } from './../bid.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bids;
  id;
  product;
  constructor(private router: Router, private _bidService: BidService) { }


  ngOnInit() {
    this._bidService.getAllBids((data) => {
      // console.log(data);
      this.bids = data.bids;
      this.id = data.id;
      this.product = data.product;
      console.log(this.bids);
    })
  }

  // onDelete(id) {
  //   this._appointmentService.delete(id);
  //   this.ngOnInit();
  // }

}
