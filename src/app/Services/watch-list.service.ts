import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WatchListItem } from '../Interfaces/watch-list-item';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class WatchList {
    constructor(private http: HttpClient) { }

    private _refreshRequired = new Subject<void>();

    get RefreshRequired() {
        return this._refreshRequired;
    }

    getData(): Observable<object> {
        return this.http.get('http://localhost:3003/data');
    }

    postData(body: WatchListItem) {
        this.http.post('http://localhost:3003/data', body)
            .subscribe((data: any) => {
                this.RefreshRequired.next();
            });
    }

    deleteData(id:string) {
        this.http.delete(`http://localhost:3003/data/${id}`)
            .subscribe((data: any) => {
                this.RefreshRequired.next();
        })
    }


    // getData(): Observable<WatchListItem[]> {
    //     return this.http.get<WatchListItem[]>('http://localhost:3003/data')
    //         .pipe(tap((data) => {
    //             console.log("All" + JSON.stringify(data))
    //         }))
    // }

    // getData() {
    //     return this.http.get('http://localhost:3003/data');
    // }
}