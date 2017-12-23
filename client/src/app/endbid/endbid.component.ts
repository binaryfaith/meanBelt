import { Component, OnInit } from '@angular/core';
import { BidService } from './../bid.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-endbid',
  templateUrl: './endbid.component.html',
  styleUrls: ['./endbid.component.css']
})
export class EndbidComponent implements OnInit {
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
}