import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class DownloaderService {

    private http: HttpClient;

    getTextFile(filename: string) {
        return this.http.get(filename, {responseType: 'text'})
            .pipe(
            tap( // Log the result or error
                data => this.log(filename, data),
                error => this.logError(filename, error)
            )
        );
    }

    private log(filename: string, data: string) {
        const message = `DownloaderService downloaded "${filename}" and got "${data}".`;
    }
    
    private logError(filename: string, error: any) {
        const message = `DownloaderService failed to download "${filename}"; got error "${error.message}".`;
    }
}

