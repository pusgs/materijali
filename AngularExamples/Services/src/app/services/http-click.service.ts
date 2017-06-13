import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpClickService{

    constructor (private http: Http){

    }

    click(): Observable<any> {
        const headers: Headers = new Headers();
        headers.append("Accept", "text/plain")
        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;
        
        return this.http.post("http://localhost:54043/api/WSClick", "", opts);
    }
}