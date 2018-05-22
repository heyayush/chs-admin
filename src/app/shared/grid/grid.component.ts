import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';
import _ from 'lodash';

import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';

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

  constructor(private dialog: MatDialog) {}

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

  onEdit(item) {
    this.edit.emit(item);
  }

  deleteConfirmation(item) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = item;
    dialogConfig.height = '50vh';
    dialogConfig.width = '50vh';
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, dialogConfig);
    const sub = dialogRef.componentInstance.deleteConfirm.subscribe(deleteItem => {
      this.onDelete(deleteItem);
    });
    dialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe();
    });
  }

  onDelete(item) {
    this.gridData.data = _.reject(this.gridData.data, gridItem => {
      return gridItem.id === item.id;
    });
    this.delete.emit(item);
  }
}
