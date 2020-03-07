import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Config {
    wallapopUrl: string;
    textfile: string;
}

@Injectable()
export class configservice {
    constructor(private http: HttpClient) {}

    configUrl = 'assets/config.json';

    getConfig(): Observable<HttpResponse<Config>> {
        // to returns an Observable of Config
        return this.http.get<Config> (
            this.configUrl, { observe: 'response'});
        // return this.http.get<Config>(this.configUrl);
    }

    getConfigResponse(): Observable<HttpResponse<Config>> {
        return this.http.get<Config>(
            this.configUrl, { observe: 'response' }
        );
    }
}
