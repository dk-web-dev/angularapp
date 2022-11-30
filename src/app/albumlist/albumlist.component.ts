import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { IAlbum } from '../interface/album.interface';

@Component({
  selector: 'app-albumlist',
  templateUrl: './albumlist.component.html',
  styleUrls: ['./albumlist.component.css'],
})
export class AlbumlistComponent implements OnInit {
  public albumId = '';
  public singlealbumDetail: any = [];
  public errorMessage = '';

  constructor(
    private _albumService: AlbumService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id: any = this.router.snapshot.paramMap.get('id');
    this.albumId = id;

    this._albumService.getAlbumById(this.albumId).subscribe({
      next: (response) => {
        console.log('response recieved', response);
        this.singlealbumDetail = response;
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
}
