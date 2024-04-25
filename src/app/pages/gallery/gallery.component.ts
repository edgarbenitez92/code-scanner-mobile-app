import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
})
export class GalleryComponent implements OnInit {
  photo: string = '';

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {}

  async takePhoto() {
    console.log('0: ', this.photo);
    const newPhoto = (await this.photoService
      .addNewPhoto()
      .catch(() => console.log('error'))) as string;

    if (newPhoto) {
      console.log('newPhoto: ', newPhoto);
      this.photo = newPhoto;
    }
  }
}
