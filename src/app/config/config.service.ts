import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Config {
    wallapopUrl: string;
    textfile: string;
}

export interface Item {
    title: string;
    description: string;
    price: string;
    email: string;
    image: string;
}

export type Items = Item[];

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    constructor(private http: HttpClient) {}

    configUrl: Config = {
        "wallapopUrl" : "https://webpublic.s3-eu-west-1.amazonaws.com/tech-test/items.json",
        "textfile": "assets/textfile.txt"
    };

    public items;

    getConfig(): Observable<HttpResponse<any>> {
        // to returns an Observable of Config
        return this.http.get<any> (
            this.configUrl.wallapopUrl, { observe: 'response'});
        // return this.http.get<Config>(this.configUrl);
    }

    getItems() {
        return this.items; 
    }

    setItems(data) {
        this.items = data;
    }
}
