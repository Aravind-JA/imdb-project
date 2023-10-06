import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WatchListItem } from 'src/app/Interfaces/watch-list-item';
import { Search } from 'src/app/Services/search.service';
import { WatchList } from 'src/app/Services/watch-list.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  id: any;
  data: any;
  watchLists: any;
  isLoading: boolean = true;
  inWatchList: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private search: Search,
    private watchList: WatchList
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(async params => {
      const id = params.get('id');
      this.id = id;
      this.isLoading = true;
      await this.onQueryChange(id!);
    });

    this.PageInitialisation();
    this.watchList.RefreshRequired.subscribe(result => {
      this.PageInitialisation();
    });
  }

  PageInitialisation() {
    this.watchList.getData().subscribe((res) => {
      this.watchLists = res;
      for (let index = 0; index < this.watchLists.length; index++) {
        const element = this.watchLists[index];
        if (this.id === element.id) {
          this.inWatchList = true;
        }
      }
    });
  }

  async onQueryChange(id: string) {
    (await this.search.getUniqueData(id!)).subscribe((result) => {
      this.data = result;
      if (result) {
        this.isLoading = false;
      }
    });
  }

  addToWatchList() {
    const listItem: WatchListItem = {
      imageLink: this.data.image,
      title: this.data.title,
      id: this.data.id
    };
    this.watchList.postData(listItem);
    this.inWatchList = true;
  }

  removeFromWatchList(id: string) {
    this.watchList.deleteData(id);
    this.inWatchList = false;
  }
}
