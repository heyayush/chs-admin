import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input('gridData') gridData: any;
  @Input('gridColumns') gridColumns: any;
  @Input('gridTitle') gridTitle: string;
  private allColumns: Array<string>;
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @ViewChild(MatSort) sort: MatSort;

  constructor() {}

  ngOnInit() {
    this.allColumns = [...this.gridColumns, 'actions'];
  }

  applySorting() {
    this.gridData.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.gridData.filter = filterValue;
  }

  onEdit(_video: any) {
    this.edit.emit(_video);
  }
  onDelete(_video: any) {
    this.delete.emit(_video);
  }
}
