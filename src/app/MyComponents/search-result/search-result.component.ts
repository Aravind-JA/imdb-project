import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { WatchListItem } from 'src/app/Interfaces/watch-list-item';
import { Search } from 'src/app/Services/search.service';
import { WatchList } from 'src/app/Services/watch-list.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  data: any;
  query!: string;
  constructor(
    private search: Search,
    private route: ActivatedRoute,
    private router: Router,
    private watchList:WatchList
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(async (queryParams) => {
      this.query = queryParams['query'];
      await this.onQueryChange(this.query);
    });
  }

  async onQueryChange(query: string) {
    (await this.search.getData(this.query)).subscribe((result) => {
      this.data = result;
    });
  }

  goToContent(id: string) {
    this.router.navigate([`title/${id}`]);
  }

  addToWatchList(id:string,image:string,title:string) {
    const listItem: WatchListItem = {
      imageLink: image,
      title: title,
      id: id
    };
    console.log(listItem);
    this.watchList.postData(listItem);
    console.log("this is executed");
  }
}
