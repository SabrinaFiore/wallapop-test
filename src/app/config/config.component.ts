import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { Config } from 'protractor';

@Component({
    selector: 'app-config',
    templateUrl: './config.component.html',
})

export class ConfigComponent implements OnInit {

    config: Config;
    headers: any;

    constructor(private ConfigService : ConfigService) { }

    ngOnInit() {
        this.showConfig();
    }

    showConfig() {
        this.ConfigService.getConfig()
        // clone the data object
            .subscribe((data: Config) => {
                this.config = {
                    // to receive data as an Obj
                    wallapopUrl: (data as any).wallapoUrl,
                    textfile:  (data as any).textfile
                }

                console.log(this.config);
            }
        );
    }

    showConfigResponse() {
        this.ConfigService.getConfig()
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