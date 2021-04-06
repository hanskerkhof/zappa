import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../shared/album.service';

@Component({
    selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
    public albums$: any;
    public displayMode: string | null = 'list';

    constructor(private albumService: AlbumService) {}

    ngOnInit(): void {
        if (localStorage.getItem('displayMode')) {
            this.displayMode = localStorage.getItem('displayMode'); // .toString();
        }

        this.albums$ = this.albumService.listMockAlbums();
    }

    setDisplayMode(mode: string): void {
        localStorage.setItem('displayMode', mode);
        this.displayMode = mode;
    }
}
