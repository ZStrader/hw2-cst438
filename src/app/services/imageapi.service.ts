import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ImageapiService {

  constructor(protected httpClient: HttpClient) { }

  getGettyImages( ) {
    const httpOptions = {
      headers: new HttpHeaders ({
      'Content-Type' : 'application/json',
      'Api-Key' : environment.gettyKey
      })
    };
    const gettyUrl = 'https://api.gettyimages.com/v3/search/images?phrase=cat';
    return this.httpClient.get(gettyUrl, httpOptions);
  }
  
  getGiphyImages( ) {
    const giphyUrl = 'https://api.giphy.com/v1/gifs/random?api_key='+environment.giphyKey+'&tag='+environment.keyword+'&rating=PG-13'
    return this.httpClient.get(giphyUrl);
  }
}
