import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/';
import {ImagePicker} from '@ionic-native/image-picker';


import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  selectedFilter = null;
  image = '';
  level = 1;
  result: HTMLElement;

  constructor(public picker: ImagePicker, public navCtrl: NavController, public camera: Camera) {
    this.image= 'assets/imgs/uploadimage2.png'
  }

  imageLoaded(e) {
    // Grab a reference to the canvas/image
    this.result = e.detail.result;
  }
  captureImage() {
    // Use with a local asset for testing
     this.image = 'assets/imgs/uploadimage2.png';
     this.filter(null, 1);
 
    // Real usage with Camera
   /* const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation: true
    }
 
    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
      this.filter(null, 1);
    });*/
  }

  choosePicture()
   {

    //this.image = 'assets/imgs/uploadimage2.png';
    

   let option = {
      title: 'Select picture',
      message: 'Select at least 1 picture',
      maximumImagesCount: 1,
      outType: 0 //0=path, 1= base 64 string ? no se bien
    };

    this.picker.getPictures(option).then(results=> {
      for(var i=0; i< results.length; i++)
      {
        this.image = results[i];
        alert("Gallery Path :" + results[i])
        this.filter(null, 1);
      }
    }, err => {
      alert("Error "+ err);
    }) 
   }

   takePicture()
   {
     
    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation: true
    };
    
    this.camera.getPicture(options).then(url=> {
      this.image = url;
      alert("Camera url is : " + url);
      this.filter(null, 1);
    }, err => {
      alert("Error " + err);
    });
   }
 
  filter(selected, level?) {
    this.selectedFilter = selected;
    this.level = level ? level : 1;
  }
 
  saveImage() {
    if (!this.selectedFilter) {
      // Use the original image!
    } else {
      let canvas = this.result as HTMLCanvasElement;
      // export as dataUrl or Blob!
      let base64 = canvas.toDataURL('image/jpeg', 1.0);
      // Do whatever you want with the result!
    }
  }

  download() {
    if (!this.selectedFilter) {
      // Use the original image!
    } else {
      let e;
      const link = document.createElement("a");

      let canvas = this.result as HTMLCanvasElement;
      // export as dataUrl or Blob!
      let base64 = canvas.toDataURL('image/jpeg', 1.0);
      // Do whatever you want with the result!
      e = new MouseEvent("click");
      link.dispatchEvent(e);
    } 
  }

}
