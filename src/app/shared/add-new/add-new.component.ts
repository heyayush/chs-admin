import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  @Output() new = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  _onClick() {
    this.new.emit();
  }
}
