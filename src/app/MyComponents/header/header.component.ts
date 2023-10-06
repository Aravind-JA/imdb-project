import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WatchList } from 'src/app/Services/watch-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() searchQuery!: string;
  count: number =0;
  // data: WatchListItem[]=[];
  data: any;

  constructor(
    private router: Router,
    private watchList: WatchList
  ) { }

  // ngOnInit(): void {
  //   this.watchList.getData().subscribe({
  //     next: data => {
  //       this.data = data;
  //       this.count = this.data.length;
  //     }
  //   });
  // }

  ngOnInit(): void {
    this.getData();
    this.watchList.RefreshRequired.subscribe(result => {
      this.getData();
    });
  }
  getData() {
    this.watchList.getData().subscribe(result => {
      this.data = result;
      this.count = this.data.length;
    })
  }

  onSearch() {
    const query = this.searchQuery;
    this.router.navigate(['/search'], { queryParams: { query: query } });
  }
  goHome() {
    this.router.navigate(['home']);
  }
  showWatchList() {
    this.router.navigate(['watch-list']);
  }
  // ngOnInit():void {
  //   this.watchList.getData()
  //   .subscribe((data: any) => {
  //     this.count = data.length;
  //   });
  // }
}
