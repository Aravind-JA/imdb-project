import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WatchList } from 'src/app/Services/watch-list.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {
  watchList: any;
  constructor(
    private service: WatchList,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getData().subscribe(result => {
      this.watchList = result;
    })
  }
  goToContent(id:string) {
    this.router.navigate([`title/${id}`]);
  }
}
