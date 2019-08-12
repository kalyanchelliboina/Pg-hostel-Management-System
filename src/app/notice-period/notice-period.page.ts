import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-notice-period',
  templateUrl: './notice-period.page.html',
  styleUrls: ['./notice-period.page.scss'],
})
export class NoticePeriodPage implements OnInit {
  today = Date.now();
  SetTime:any;
  onlyDate: number;
  constructor() { }

  ngOnInit() {
    this.SetTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    this.onlyDate = parseInt(moment().format('DD'));
  }

}
