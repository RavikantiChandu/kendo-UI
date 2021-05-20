import { Component, OnInit } from '@angular/core';
import { products } from './products';
import {
  DialogService,
  DialogRef,
  DialogCloseResult,
} from "@progress/kendo-angular-dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private dialogService: DialogService) {}
  public result: any;
  ngOnInit(): void {
      
  }
  title = 'Reusable Kendo UI Grid';

  
  public gridData: any[] = products;

  public showConfirmation() {
    const dialog: DialogRef = this.dialogService.open({
      title: "Please confirm",
      content: "Are you sure?",
      actions: [{ text: "No" }, { text: "Yes", primary: true }],
      width: 450,
      height: 200,
      minWidth: 250,
    });

    dialog.result.subscribe((result: any) => {
      if (result instanceof DialogCloseResult) {
        console.log("close");
      } else {
        console.log("action", result);
      }

      this.result = JSON.stringify(result);
    });
  
}
}
