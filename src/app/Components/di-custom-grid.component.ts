import { Component, OnInit, ViewChild, ContentChildren, Input, Output, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ColumnComponent, GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from "@progress/kendo-data-query";
import {DiCustomGridColumnComponent} from './di-custom-grid-column.component';

@Component({
  selector: 'di-custom-grid',
  templateUrl: './di-custom-grid.component.html',
  styleUrls: ['./di-custom-grid.component.css'],
 // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiCustomGridComponent implements OnInit {

  @Input() gridData: any;
  @Input() loading: any;
  @Input() pageSize: any;
  @Input() skip: any = 0;
  @Input() filtera: any;
  @Input() groupable: boolean = false;
  @Input() pageable: boolean = true;
  @Input() scrollable: boolean = false;
  @Input() height: number = 0;
  public gridView!: GridDataResult;
  public sort: SortDescriptor[] = [{
    field: 'ProductName',
    dir: 'asc'
  }];
  public multiple = false;
  public allowUnsort = true;
  // @Output() onDataStateChange: EventEmitter<any> = new EventEmitter();

  @ViewChild('diCustomGrid')
  public diCustomGridRef!: { columns: { reset: (arg0: any[]) => void; }; }; 

  @ContentChildren(DiCustomGridColumnComponent)
  columns!: { toArray: () => any[]; };

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.skip=0;
   this.loadItems();
  }

  ngAfterViewInit() {
    console.log(this.columns)
    this.diCustomGridRef.columns.reset(this.columns.toArray().map((item: { realColumn: any; }) => item.realColumn));
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }

  public sortChange(sort: SortDescriptor[]): void {
       this.sort = sort;

    this.loadItems();
  }
  private loadItems(): void {
    this.gridView= {
      data: orderBy(this.gridData.slice(this.skip, this.skip + this.pageSize),this.sort),
      total: this.gridData.length,
    };
  }

}

