import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { IAlbum } from '../interface/album.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  title = 'albume';
  public albumList: IAlbum[] = [];
  public errorMessage: string = '';

  constructor(private _albumService: AlbumService, private router: Router) {}

  ngOnInit(): void {
    this._albumService.getAlbumList().subscribe({
      next: (response) => {
        console.log('response recieved', response);
        this.albumList = response;
      },
      error: (err) => {
        console.log('error occured bro', err.message);
        this.errorMessage = err.message;
      },
      complete: () => {
        console.info('complete');
      },
    });
  }

  selectId(album: any) {
    this.router.navigate(['/album', album.id]);
  }
}
