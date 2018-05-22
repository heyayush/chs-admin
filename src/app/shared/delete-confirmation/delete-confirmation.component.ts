import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent implements OnInit {
  deleteConfirm = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public item) {}

  ngOnInit() {}

  onDeleteConfirmation(item) {
    this.deleteConfirm.emit(item);
  }
}
