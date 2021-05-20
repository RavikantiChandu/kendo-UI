import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ColumnComponent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'di-custom-grid-column',
  template: `<kendo-grid-column
  #diCustomGridColumn
  [field]="field"
  [title]="title"
  [width]="width">
  <ng-template kendoGridFilterCellTemplate let-filter let-column="column">
  <kendo-grid-string-filter-cell
    [showOperators]="false"
    [column]="column"
    [filter]="filter">
  </kendo-grid-string-filter-cell>
</ng-template>
</kendo-grid-column>`
})
export class DiCustomGridColumnComponent {
  @ViewChild(ColumnComponent) public realColumn: ColumnComponent | undefined;
  @Input() field: string = '';
  @Input() title: string = '';
  @Input() width: number = 0;

  constructor() { }

  ngAfterViewInit() {
    console.log(this.realColumn)
  }

}
