import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpProductService{

    data: any;


    constructor (private http: Http){

    }

    getProducts(): Observable<any> {

        return this.http.get("http://localhost:3367/api/ProductsWA");        
    }

    postProduct(): Observable<any>  {
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(
        'http://localhost:3367/api/ProductsWA',
        JSON.stringify({
            Name: 'Product from front-end',
            Price: 15
        }), opts);
  }
}