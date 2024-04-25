import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
})
export class GalleryComponent implements OnInit {
  currentPhoto: string = '';

  constructor(private photoService: PhotoService) {
    this.currentPhoto = this.photoService.photo;
  }

  ngOnInit(): void {}

  async takePhoto() {
    await this.photoService.getNewPhoto();
  }
}
