import { Component, OnInit } from '@angular/core';
import { configservice } from './config.service';
import { Config } from 'protractor';

@Component({
    selector: 'app-config',
    templateUrl: './config.component.html',
})

export class ConfigComponent implements OnInit {

    config: Config;
    headers: any;

    ngOnInit() {
        this.showConfig();
    }

    constructor(private configService : configservice) { }

    showConfig() {
        this.configService.getConfig()
        // clone the data object
            .subscribe((data: Config) => this.config = {
                // to receive data as an Obj
                wallapopUrl: (data as any).wallapoUrl,
                textfile:  (data as any).textfile,
        });
    }

    showConfigResponse() {
        this.configService.getConfigResponse()
            // resp is of type `HttpResponse<Config>`
            .subscribe(resp => {
            // display its headers
            const keys = resp.headers.keys();
            this.headers = keys.map(key =>
              `${key}: ${resp.headers.get(key)}`);
      
            // access the body directly, which is typed as `Config`.
            this.config = { ... resp.body };
        });
    }
}