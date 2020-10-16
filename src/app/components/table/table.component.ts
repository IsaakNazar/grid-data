import { Component, Input, OnInit } from '@angular/core';
import { Column } from '../../models/column';
import { Table } from '../../models/table-column';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() items;
  @Input() columns: Table.Columns;
  @Input() cellMinWidth = 30;
  @Input() rowHeight = 30;

  columnsWidth: string;
  columnsKeys: string[] = [];
  headerColumns: Column[];
  data: any[][];
  total: any;

  constructor() {
  }

  ngOnInit(): void {
    this.columnsKeys = Object.keys(this.columns);
    this.initData();
    this.generateColumnsWidth();
  }

  initData(): void {
    this.headerColumns = this.items.meta.columns;
    this.data = this.items.data;
    this.total = this.items.meta.total;
  }

  private generateColumnsWidth(): void {
    this.columnsWidth = this.columnsKeys.map(key => {
      if (this.columns[key].width === 0) {
        return 0;
      }
      return 'minmax(' + (this.columns[key].minWidth || this.cellMinWidth) + 'px, ' + (this.columns[key].width || 1) + 'fr)';
    }).join(' ');
  }

  getValue(obj: any, column: Column): any {
    const result = Object.keys(obj).map((key) => {
      return {
        key,
        value: obj[key]
      };
    });

    return result.find(item => item.key === column.key)?.value;
  }

}
