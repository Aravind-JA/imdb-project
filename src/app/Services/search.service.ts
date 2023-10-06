import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class Search {
    constructor(private http: HttpClient) { }

    async getData(query: string) {
        return this.http.get(`https://imdb-api.projects.thetuhin.com/search?query=${query}`);
    }

    async getUniqueData(id: string) {
        return this.http.get(`https://imdb-api.projects.thetuhin.com/title/${id}`);
    }
}