import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAlbum, IAlbumSource } from './album';

@Injectable({
    providedIn: 'root',
})
export class AlbumService {
    public items: any;

    // public listAlbums(): Observable<any> {
    //   return this.albums$;
    // }

    // public createAlbum(album: IAlbum): firebase.Promise<any> {
    //   return this.albums$.push(new Album(album.name, album.year, album.spotifyAlbumId));
    // }

    // public updateAlbum(album: IAlbum, changes: IAlbum): firebase.Promise<any> {
    //   return this.albums$.update(album.$key, changes);
    // }

    // public deleteAlbum(album: IAlbum): firebase.Promise<any> {
    //   return this.albums$.remove(album.$key);
    // }

    // public removeAll(album: IAlbum): firebase.Promise<any> {
    //   let a = confirm('Really delete all albums?\nYou can restore them from the backup any time.');
    //   if (a) {
    //     return this.albums$.remove(null);
    //   }
    // }

    ALBUM_DATA: IAlbumSource = {
        '-KdHEbb_Y1kYGu733npj': {
            name: 'Freak out',
            owned: true,
            spotifyAlbumId: '3PZXB9NBWf11eDS72JCGaY',
            uuid: '54dbc5ea-c2ac-e023-d39e-9667a22f65f3',
            year: 1966,
        },
        '-KdHEbbdQcqRTIGpmLfy': {
            name: 'Absolutely Free',
            owned: true,
            spotifyAlbumId: '5quWwqogyMjzEXWgCVyvRP',
            uuid: '87034b44-daf4-6cba-2f25-97338985a79b',
            year: 1967,
        },
        '-KdHEbbhX5KpTzn7WFrM': {
            name: 'Lumpy Gravy',
            owned: false,
            spotifyAlbumId: '2WtjHoqPZlQhCNzEhy6TkZ',
            uuid: '777eca33-c484-7f88-1d38-018031421603',
            year: 1967,
        },
        '-KdHEbbkFKyFhTCjCDWT': {
            // prettier-ignore
            name: 'We\'re Only in It for the Money',
            owned: false,
            spotifyAlbumId: '0L8n5dW0KfoNnLuYfyOFPg',
            uuid: 'e2cd2858-bbe6-7bde-fa68-4819438c4027',
            year: 1968,
        },
        '-KdHEbboi3xkRU0iniya': {
            name: 'Cruising with Ruben & the Jets',
            owned: true,
            spotifyAlbumId: '0ICjOkJJox6JujYd0RLcut',
            uuid: 'aed43400-2808-48c4-1fd1-79776e47af5f',
            year: 1968,
        },
        '-KdHEbbsXc-ZB4ZZottX': {
            name: 'Uncle Meat',
            owned: true,
            spotifyAlbumId: '4g97BOZb8mXl9BzBB3DX1m',
            uuid: '8b1dd315-6c49-28d2-973f-7b7dc9d1f6fc',
            year: 1969,
        },
        '-KdHEbbvVKEg-j2z3sT4': {
            name: 'Mothermania',
            owned: false,
            spotifyAlbumId: '64YH7tdVSFfhbKTVypXO72',
            uuid: 'c495a8d9-9ad9-ba05-eb5e-26d9cc0419be',
            year: 1969,
        },
        '-KdHEbbx77Xs340RZMgx': {
            name: 'Hot Rats',
            owned: true,
            spotifyAlbumId: '0HAdB95fMVAojYTtQ74JDc',
            uuid: 'd5b5b5f4-a3ba-0010-c647-c0ab2e83a6df',
            year: 1969,
        },
        '-KdHEbbzqs4M5glwSDgB': {
            name: 'Burnt Weeny Sandwich',
            owned: false,
            spotifyAlbumId: '5sTtFC2SNK38bxG0XSfPLo',
            uuid: '8c5ff925-78f0-2cd6-bcbf-c84ad8b35b05',
            year: 1970,
        },
        '-KdHEbc1EjLBy0nrrz1f': {
            name: 'Weasels Ripped My Flesh',
            owned: true,
            spotifyAlbumId: '7zINPoNwb8ArQgUbq0wlUw',
            uuid: 'f6979d66-9f37-cb9d-6269-f58b1248a49a',
            year: 1970,
        },
        '-KdHEbc4m1Ar0CKPNA6H': {
            // prettier-ignore
            name: 'Chunga\'s Revenge',
            owned: false,
            spotifyAlbumId: '5s6JIqQl2AjuKK7kGUu7xV',
            uuid: '926a3c53-b9e3-d658-6a75-a209e9e620c9',
            year: 1970,
        },
        '-KdHEbc7XURm5JXj7RJv': {
            name: 'Fillmore East – June 1971',
            owned: true,
            spotifyAlbumId: '6TNlQWB8LytLztzjUyoxYx',
            uuid: '8c6ae805-7733-826f-8746-6bdfd1969de4',
            year: 1971,
        },
        '-KdHEbc9RNByuQWIyE_K': {
            name: '200 Motels',
            owned: false,
            spotifyAlbumId: '25I6if8boGA6tk9tY9aFwc',
            uuid: '607ecc88-2703-cbf6-2a2a-a896d179b0e5',
            year: 1971,
        },
        '-KdHEbcATJed_pL-9NMI': {
            name: 'Just Another Band from L.A.',
            owned: true,
            spotifyAlbumId: '5GvGvPQuMy7ouApH7OSwhE',
            uuid: '29326ae1-7d9a-c4bb-f717-aa7837ab895c',
            year: 1972,
        },
        '-KdHEbcDgWwKkN2XxEff': {
            name: 'Waka/Jawaka',
            owned: true,
            spotifyAlbumId: '6yfVhI2a2RM94OdpDTPZgH',
            uuid: '9e437cdc-88c6-f23c-bb22-aeeb39a4fafb',
            year: 1972,
        },
        '-KdHEbcFoaFmi995EC04': {
            name: 'The Grand Wazoo',
            owned: true,
            spotifyAlbumId: '67GJo4ajqUWHsuY0f4aQz2',
            uuid: 'd2b9d41c-84f8-f5ea-9fb9-d709915df348',
            year: 1972,
        },
        '-KdHEbcI1h3G2OnQ6lV5': {
            name: 'Over-Nite Sensation',
            owned: false,
            spotifyAlbumId: '3QrEk9Va9qO4uobczNUtqe',
            uuid: '9f994b45-3515-f95f-7b2b-43d38c1e5e71',
            year: 1973,
        },
        '-KdHEbcLkwa6nu5jxeNY': {
            // prettier-ignore
            name: 'Apostrophe (\')',
            owned: true,
            spotifyAlbumId: '3EbtMJsHbspjhN6Xd4plIu',
            uuid: '523eb597-1cdc-4fed-61e6-8a391454f96d',
            year: 1974,
        },
        '-KdHEbcNiBLIKqvy0h6S': {
            name: 'Roxy & Elsewhere',
            owned: true,
            spotifyAlbumId: '6P1LexINkoPcMsRNU4gNpE',
            uuid: '8f1bd73d-1cfd-72ea-185d-1405924a7374',
            year: 1974,
        },
        '-KdHEbcOZ2TcMi04Vjeu': {
            name: 'One Size Fits All',
            owned: false,
            spotifyAlbumId: '4mp2SC1Wq9jZJINGPAKv0V',
            uuid: '6bfe5b10-eb8f-eb2f-f4fb-0613a3d4f66d',
            year: 1975,
        },
        '-KdHEbcQ3-SnX55jZGiU': {
            name: 'Bongo Fury',
            owned: true,
            spotifyAlbumId: '0u4GsfF3p8pt7BVSHIZq2N',
            uuid: '05de0dd6-78ad-a1c4-6d9c-552714ca4962',
            year: 1975,
        },
        '-KdHEbcRl2adXKBal6yY': {
            name: 'Zoot Allures',
            owned: false,
            spotifyAlbumId: '3rxfGp9OzH5jjEDX1nFqJc',
            uuid: '5ca206d4-f457-6f6c-cb5c-812b00e668bc',
            year: 1976,
        },
        '-KdHEbcTBPORmTn7BzLp': {
            name: 'Zappa in New York',
            owned: true,
            spotifyAlbumId: '08QQB3vMwdNlVH7VDRLISR',
            uuid: 'd7dc5b46-82ae-b738-1f0d-a063673eb490',
            year: 1978,
        },
        '-KdHEbcVKJwYBeiJ5R5o': {
            name: 'Studio Tan',
            owned: false,
            spotifyAlbumId: '2Z39MzRC9Jh5eBt7dcJsdL',
            uuid: 'c2daffc0-06c3-5b13-3502-3a1e77af5461',
            year: 1978,
        },
        '-KdHEbcY-RRx7DhXqyEy': {
            name: 'Sleep Dirt',
            owned: true,
            spotifyAlbumId: '4mxbiUjBnnamJdxtF26VbX',
            uuid: 'c66b912d-c01a-546b-7bdf-d48d0221614a',
            year: 1979,
        },
        '-KdHEbc_bRuKCd-QaT2N': {
            name: 'Sheik Yerbouti',
            owned: true,
            spotifyAlbumId: '4hBKoHOpEvQ6g4CQFsEAdU',
            uuid: '949aad0a-d273-493a-18f4-32b378a2ade9',
            year: 1979,
        },
        '-KdHEbcb2HKih-lwkEim': {
            name: 'Orchestral Favorites',
            owned: false,
            spotifyAlbumId: '5q4XLpZzW6bv5RSYczId0z',
            uuid: 'd585976d-245a-cc30-ead2-307b3f10ab5c',
            year: 1979,
        },
        '-KdHEbcc1Nw2YNKP7No9': {
            // prettier-ignore
            name: 'Joe\'s Garage Act 1',
            owned: true,
            spotifyAlbumId: '6uJkCskko3O83SRYWQVsjS',
            uuid: 'e86e4dad-1d37-e190-03e9-34bfb9889148',
            year: 1979,
        },
        '-KdHEbcd45ypzuWhROaB': {
            // prettier-ignore
            name: 'Joe\'s Garage Acts II & III',
            owned: true,
            spotifyAlbumId: '6uJkCskko3O83SRYWQVsjS',
            uuid: 'cd9e41a5-c498-6ac1-b6a9-426e0fad7f16',
            year: 1979,
        },
        '-KdHEbcfHGi4iTrSO7Pu': {
            name: 'Tinsel Town Rebellion',
            owned: false,
            spotifyAlbumId: '4aCbCtIXm5dGgiLBFTAuPW',
            uuid: '745de6c9-6da9-5dfc-8ef0-fb0a7e731998',
            year: 1981,
        },
        '-KdHEbcgwmjyvRuq9vmy': {
            // prettier-ignore
            name: 'Shut Up \'n Play Yer Guitar',
            owned: false,
            spotifyAlbumId: '2AqSKqjAjqH08IahvJdojg',
            uuid: '846944f1-4d5a-5eb1-ee14-61ae7e5ffd45',
            year: 1981,
        },
        '-KdHEbchEdSDmWaURg-U': {
            // prettier-ignore
            name: 'Shut Up \'n Play Yer Guitar Some More',
            owned: false,
            uuid: 'd014fc33-e0e6-8f05-ab53-c3289de1b2d4',
            year: 1981,
        },
        '-KdHEbcjicrEwWXPMQNA': {
            // prettier-ignore
            name: 'Return of the Son of Shut Up \'n Play Yer Guitar',
            owned: false,
            uuid: 'ee787319-31aa-dba3-8fcf-654f38a991e8',
            year: 1981,
        },
        '-KdHEbcmM2S9qKQomNwc': {
            name: 'You Are What You Is',
            owned: false,
            spotifyAlbumId: '2pY7S6zvkALbtQU7qSwc2d',
            uuid: 'cbe9f95f-c1cb-37e9-23df-6bec4636181d',
            year: 1981,
        },
        '-KdHEbcp0em_Lxabl-EB': {
            name: 'Ship Arriving Too Late to Save a Drowning Witch',
            owned: true,
            spotifyAlbumId: '5AHD37TxCc4lRaUgacYiDA',
            uuid: '072c72dc-fe95-c2af-02ec-3b1676b813f8',
            year: 1981,
        },
        '-KdHEbcrkncsZBeGd5Gg': {
            name: 'The Man from Utopia',
            owned: false,
            spotifyAlbumId: '6yiK0GlblmgFj24bOnLi9n',
            uuid: 'a6fccc59-2379-957f-6984-7f55d57a1038',
            year: 1983,
        },
        '-KdHEbctLo2Fz-at6MsN': {
            name: 'Baby Snakes',
            owned: false,
            spotifyAlbumId: '1uP0keTh0tZExdC9JXwTN8',
            uuid: 'd0e78e68-01f7-75a2-d726-774f9e5a9543',
            year: 1983,
        },
        '-KdHEbcubxCtvTnBnqxx': {
            name: 'London Symphony Orchestra, Vol. I',
            owned: false,
            uuid: 'b0ddce98-3e71-f798-d95e-847893f9ea3d',
            year: 1983,
        },
        '-KdHEbcvkKYZboh6zM65': {
            name: 'Boulez Conducts Zappa: The Perfect Stranger',
            owned: false,
            spotifyAlbumId: '6ICDwjflDaw6OQaI5SoPzw',
            uuid: '4cc5d762-57ee-5c57-75f5-e2c033ba3b9f',
            year: 1984,
        },
        '-KdHEbcxRjZKdhM7Nb1I': {
            name: 'Them or Us',
            owned: true,
            spotifyAlbumId: '5atfbe2DChot26rSR0nOrI',
            uuid: '478522d4-0f24-9f60-8159-1f4355dc6643',
            year: 1984,
        },
        '-KdHEbcyqw3gtN32QB6Z': {
            name: 'Thing-Fish',
            owned: false,
            spotifyAlbumId: '6swSYsukcykmLmfNvqYpl7',
            uuid: 'd663f1ae-329e-4c56-4180-68a9c69e42c1',
            year: 1984,
        },
        '-KdHEbd-veghyn3NzAad': {
            name: 'Francesco Zappa',
            owned: false,
            spotifyAlbumId: '2YFFxyazzVBc31JWekbhqz',
            uuid: '7011a538-443e-37ad-cb4a-515901ecdbad',
            year: 1984,
        },
        '-KdHEbd1bDMLlc1e1MhW': {
            name: 'The Old Masters, Box I',
            owned: false,
            uuid: '7cbf87fa-8a67-3ee0-8d23-8666d5cf74a2',
            year: 1984,
        },
        '-KdHEbd4LdCBybM6EAo_': {
            name: 'Frank Zappa Meets the Mothers of Prevention',
            owned: false,
            spotifyAlbumId: '1NVnPUNo6DOhvp11vYl7pr',
            uuid: '65a998f9-1882-f04b-d141-8090e9eb4cf0',
            year: 1985,
        },
        '-KdHEbd6kO80Gek6kgY-': {
            name: 'Does Humor Belong in Music?',
            owned: false,
            spotifyAlbumId: '18r6oyFgtFNEM3W15u1gzo',
            uuid: '4fd15263-b425-07fe-7a39-edfc59ccc076',
            year: 1986,
        },
        '-KdHEbd8YHRmebXgrQhD': {
            name: 'The Old Masters, Box II',
            owned: false,
            uuid: '3e098e00-0879-cbb2-543a-cb015f02d4f3',
            year: 1986,
        },
        '-KdHEbd9Tustx4M89pJa': {
            name: 'Jazz from Hell',
            owned: false,
            spotifyAlbumId: '1MqpbO67sGvB8ZbfnhAHrr',
            uuid: '46716bbf-998a-4859-19ab-fed8f7836db7',
            year: 1986,
        },
        '-KdHEbdA7HpIeTYra9d8': {
            name: 'London Symphony Orchestra, Vol. II',
            owned: false,
            uuid: '475183c8-9534-394e-eac5-32e1a70077d8',
            year: 1987,
        },
        '-KdHEbdBODKG1pKLztPv': {
            name: 'The Old Masters, Box III',
            owned: false,
            uuid: 'c406f48b-596a-58fb-a3bf-8ce25ddcc338',
            year: 1987,
        },
        '-KdHEbdCXEVm_o-gu2HU': {
            name: 'Guitar',
            owned: false,
            spotifyAlbumId: '5z3hp6KctlaRfpbJR0rchP',
            uuid: '919b7105-13c6-b09e-61c0-ead391f3cfba',
            year: 1988,
        },
        '-KdHEbdEbOUtjlb55b06': {
            // prettier-ignore
            name: 'You Can\'t Do That on Stage Anymore, Vol. 1',
            owned: false,
            spotifyAlbumId: '4V5G0bOjOc6zNyit1VKLyR',
            uuid: '88e8bc45-4a7b-f965-b568-46d08358f837',
            year: 1988,
        },
        '-KdHEbdFh3auk0vmpFoP': {
            // prettier-ignore
            name: 'You Can\'t Do That on Stage Anymore, Vol. 2',
            owned: false,
            spotifyAlbumId: '0aWKPchKKttHe15Kt6Z1yn',
            uuid: '345c1060-8d3a-42b0-2261-b2fcfde18c20',
            year: 1988,
        },
        '-KdHEbdHnF3EbmNpiNdl': {
            name: 'Broadway the Hard Way',
            owned: false,
            spotifyAlbumId: '2phI9hXkfvn8DeBiqbZu4I',
            uuid: '2cf06eb0-860a-172d-6862-6e53c20f1be1',
            year: 1988,
        },
        '-KdHEbdJvsatyzv4tmSc': {
            // prettier-ignore
            name: 'You Can\'t Do That on Stage Anymore, Vol. 3',
            owned: false,
            spotifyAlbumId: '7b6afRizkdejM1XyoKXacB',
            uuid: '5c415c51-1c18-cafe-14bd-0bf84b371d42',
            year: 1989,
        },
        '-KdHEbdMI-SHLyq6QGGw': {
            name: 'The Best Band You Never Heard in Your Life',
            owned: false,
            spotifyAlbumId: '73Ks6qxJTQ4hyHBJOQ16tI',
            uuid: '6c675081-dcbd-b6b3-b6d9-4f162450bbb3',
            year: 1991,
        },
        '-KdHEbdOJ_bIvljUqd_o': {
            // prettier-ignore
            name: 'You Can\'t Do That on Stage Anymore, Vol. 4',
            owned: false,
            spotifyAlbumId: '641iIWqguKb93idvyLEvHC',
            uuid: 'e668990e-fcd7-452a-3af9-7cc3023087ba',
            year: 1991,
        },
        '-KdHEbdPuRcB8m3ZgybE': {
            name: 'Make a Jazz Noise Here',
            owned: false,
            spotifyAlbumId: '2KmlLjck6t4HGgFdkIq4lw',
            uuid: '0aed1c56-ed7f-9e3e-7e64-26a1b5ed2d93',
            year: 1991,
        },
        '-KdHEbdQyfsbjTrAPusZ': {
            // prettier-ignore
            name: 'You Can\'t Do That on Stage Anymore, Vol. 5',
            owned: false,
            spotifyAlbumId: '7Hp7JYrAeTevdePWOPouez',
            uuid: 'c3fd1972-7b72-b9a5-3ae4-b62bc36ea652',
            year: 1992,
        },
        '-KdHEbdR2P4RHyWY-UfO': {
            // prettier-ignore
            name: 'You Can\'t Do That on Stage Anymore, Vol. 6',
            owned: false,
            spotifyAlbumId: '2vN71IqV0ucqeYAoNGlHxV',
            uuid: 'ce696fb4-f954-30cf-0002-462776a49fe1',
            year: 1992,
        },
        '-KdHEbdS7t_NGzFba8wG': {
            name: 'Playground Psychotics',
            owned: false,
            spotifyAlbumId: '4r2Xg0n5AVWCFhu2Rx4Yib',
            uuid: '27c79a07-4eb8-a0b7-5cdd-5ed5fca97305',
            year: 1992,
        },
        '-KdHEbdUmQKQYes7emke': {
            name: 'Ahead of Their Time',
            owned: false,
            spotifyAlbumId: '4PgmrT2FbyIysJsTx4WzxP',
            uuid: 'e85ebee7-7a07-cfd1-cd8a-422c7406f97b',
            year: 1993,
        },
        '-KdHEbdWJQU1TdrnpIn3': {
            name: 'The Yellow Shark',
            owned: false,
            spotifyAlbumId: '7sZEHobWVNVWwvBYycTP1z',
            uuid: 'b346c4bd-118a-2c1e-172b-de18b5e4c6e1',
            year: 1993,
        },
    };

    // private albums$: FirebaseListObservable<IAlbum[]>;

    // constructor(af: AngularFire) {
    //   const path = '/zappa-discography';
    //
    //   this.albums$ = af.database.list(path,
    //     {
    //       query: {
    //         orderByChild: 'year'
    //       }
    //     });
    //   this.items = af.database.list('/zappa-discography');
    // }

    // fromBackup(): void {
    //   let a = confirm('Really restore all albums?\nCurrent albums will be removed.');
    //   if (a) {
    //     this.albums$.remove(null);
    //     for (let key in AlbumData.ALBUM_DATA) {
    //       if (AlbumData.ALBUM_DATA[key]) {
    //         this.albums$.push(AlbumData.ALBUM_DATA[key]);
    //       }
    //     }
    //   }
    // }

    public listMockAlbums(): Observable<IAlbum[]> {
        return of(Object.values(this.ALBUM_DATA));
    }
}
