import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input('gridData') gridData: any;
  @Input('gridColumns') gridColumns: any;
  private allColumns: Array<string>;
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {
    this.allColumns = [...this.gridColumns, 'actions'];
  }

  _onEdit(_video: any) {
    this.edit.emit(_video);
  }
  _onDelete(_video: any) {
    this.delete.emit(_video);
  }
}
