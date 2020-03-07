import { Component } from '@angular/core';
import { DownloaderService } from './downloader.service';

@Component({
  selector: 'app-downloader',
  templateUrl: './downloader.component.html',
  providers: [ DownloaderService ]
})

export class DownloaderComponent { 
   contents: string;

   constructor(private downloaderService: DownloaderService) {}
   
    download() {
        this.downloaderService.getTextFile('assets/textfile.txt')
        .subscribe(results => this.contents = results);
    }
}