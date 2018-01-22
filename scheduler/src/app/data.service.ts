import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getServers(url) {
     return this.http.get(url)
      .map(
        (response: Response) => {
          console.log(response.json());
          return response.json();
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }
  // public parseData = (data: Response) => {
  //   const body = data.json();
  //   // // // console.log.log('Response:', (body));
  //   // if (data.body)
  //   return body || {};
  // }
  //
  // public handleError = (err: Error) => {
  //   // // // console.log.log(err);
  //   return Observable.throw(err);
  // }

}
