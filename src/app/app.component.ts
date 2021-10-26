import {Component, Input, OnInit} from '@angular/core';
import {Cat} from "./model/cat";
import {CatService} from "./shared/cat.service";
import { DataSource } from '@angular/cdk/table';
import {MatTableDataSource} from "@angular/material/table";
import {timestamp} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @Input()
  dataSource : any;

  @Input()
  displayedColumns: String[];
  cats: Cat[];
  catsTest: Cat[];

  constructor(private catService :CatService) {
    this.displayedColumns = ['name', 'gender', 'lenght', 'height', 'color', 'age','weight'];
    this.cats = [];
    this.catsTest = []
    this.catsTest[0] = new Cat('Mruczek',10,90,'black',10,10,'miaumiua')
    catService.getAllCats().subscribe(
      (next) => {this.cats = next;},
      (error: String) =>{console.log(error)}
    )
    this.dataSource = new MatTableDataSource(this.cats);
    setInterval(()=> { this.refresh(catService) }, 2 * 1000);
  }

  refresh(catService : CatService) {
    this.catService.getAllCats().subscribe((data: Cat[]) => {
      this.dataSource.data = data;
    })
  }




  ngOnInit(): void {
  }
}
