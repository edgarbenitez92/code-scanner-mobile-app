import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  photo: string[] = [];

  constructor() {}

  async addNewPhoto(): Promise<string | null> {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    if (photo.webPath) {
      console.log('photo promise: ', photo);
      return photo.webPath;
    }

    return null;
  }
}
