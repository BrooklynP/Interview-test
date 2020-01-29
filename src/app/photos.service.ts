import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  photos;

  getPhotos(){
    return this.api.get('photos?albumId=1');
  }

  constructor(private api: ApiService) {
   }
}
