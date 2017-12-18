import { Component, OnInit } from '@angular/core';
import { AppointmentService } from './../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  appointments;
  id;
  constructor(private router: Router, private _appointmentService: AppointmentService) { }


  ngOnInit() {
    this._appointmentService.getAllAppointments((data) => {
      // console.log(data);
      this.appointments = data.appointments;
      this.id = data.id;
      console.log(this.appointments);
    })
  }

  onDelete(id) {
    this._appointmentService.delete(id);
    this.ngOnInit();
  }

}
