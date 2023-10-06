import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { WatchListItem } from 'src/app/Interfaces/watch-list-item';
import { Search } from 'src/app/Services/search.service';
import { WatchList } from 'src/app/Services/watch-list.service';

@Component({
  selector: 'app-side-content',
  templateUrl: './side-content.component.html',
  styleUrls: ['./side-content.component.css']
})
export class SideContentComponent implements OnInit,OnChanges {
  @Input() title!: string;
  data: any;

  constructor(
    private search: Search,
    private router: Router,
  private watchList:WatchList
  ) { }
  
  ngOnChanges(): void {
    this.getData();
  }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    (await this.search.getData(this.title)).subscribe((data) => {
      this.data = data;
    });
  }

  onSelection(id: string) {
    this.router.navigate([`title/${id}`]);
  }

  addToWatchList(id:string,image:string,title:string) {
    const listItem: WatchListItem = {
      imageLink: image,
      title: title,
      id: id
    };
    this.watchList.postData(listItem);
  }
}
