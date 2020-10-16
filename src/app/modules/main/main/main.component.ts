import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import { Table } from '../../../models/table-column';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  items: any;
  columns: Table.Columns = {
    ad_set: {
      width: 0.2,
      wrapText: true,
      valueStyle: {fontWeight: 700, color: 'green'}
    },
    impressions: {
      width: 0.2,
      wrapText: true
    },
    clicks: {
      width: 0.1,
      valueClass: ['italic-text']
    },
    ctr: {
      width: 0.1
    },
    installs: {
      width: 0.1
    },
    cr0: {
      width: 0.1
    },
    register: {
      width: 0.1
    },
    register_unique: {
      width: 0.1
    },
    cr1: {
      width: 0.2
    },
    ftd: {
      width: 0.1
    },
    ftd_unique: {
      width: 0.1
    },
    cr2: {
      width: 0.2
    },
    af_purchase: {
      width: 0.1
    },
    spent: {
      width: 0.2,
      wrapText: true
    },
    revenue: {
      width: 0.3,
      wrapText: true
    },
    roas: {
      width: 0.2
    },
    ecpi: {
      width: 0.2,
      wrapText: true
    },
    arpu: {
      width: 0.2,
      wrapText: true
    },
    cpt: {
      width: 0.2,
      wrapText: true
    }
  };

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.getData().subscribe(
      resp => {
        this.items = resp;
      }
    );
  }

}
