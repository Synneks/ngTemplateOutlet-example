import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() headers: string[] | undefined;
  @Input() data!: any[];
  @Input() hideRows: string[] = [];
  @Input() actionButtonFn: Function | undefined;

  @Output() actionClicked = new EventEmitter();

  rowVisible(key: unknown) {
    return !this.hideRows.includes(key as string);
  }
}
