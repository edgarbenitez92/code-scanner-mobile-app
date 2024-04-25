import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  photo: string = '';

  constructor() { }

  async getNewPhoto() {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    if(photo.webPath) {
      console.log('photo promise: ', photo);
      this.photo = photo.webPath;
    }
  }
}
