import { Injectable } from '@angular/core';
import { IAlbum } from './interface/album.interface';
import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
import {  Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  albums_url: string = 'https://jsonplaceholder.typicode.com/albums';
  
  constructor(private _http: HttpClient) {}

  getAlbumList():Observable<IAlbum[]> {
    return this._http.get<IAlbum[]>(this.albums_url);
  }


  getAlbumById(id:any):Observable<IAlbum[]>{
    console.log("hello",id);
    return this._http.get<IAlbum[]>(`${this.albums_url}/${id}`);
  }

}
