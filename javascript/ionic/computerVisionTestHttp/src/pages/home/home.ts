import { Component } from '@angular/core';
// import { Http, Headers } from '@angular/http';
import { Headers } from '@angular/http';
import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public description: string;
  public image: string;

  constructor(private camera: Camera,
              private transfer: FileTransfer,
              // private fileUploadOptions: FileUploadOptions,
              private file: File,
              public navCtrl: NavController) {

  }

  fileTransfer: FileTransferObject = this.transfer.create();

  // takePicture() {
  //   const subscriptionKey = 'aeaaa0e3a68748209eda59d6d5dfeb8c';
  //   const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Categories%2CDescription%2CColor&details=&language=en';
  //   const sourceImageUrl = 'http://upload.wikimedia.org/wikipedia/commons/3/3c/Shaki_waterfall.jpg';

  //   let headers = new Headers();
  //   headers.append("Content-Type","application/json");
  //   headers.append("Ocp-Apim-Subscription-Key", subscriptionKey);

  //   let data = '{"url": ' + '"' + sourceImageUrl + '"}'

  //   console.log('test');

  //   this.http.post(uriBase, data, { headers: headers })
  //     .map(res => res.json())
  //     .subscribe(data => {
  //       console.log(data.description.captions[0].text);
  //     });

  // }

  // takePicture() {
  //   const subscriptionKey = 'aeaaa0e3a68748209eda59d6d5dfeb8c';
  //   const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Categories%2CDescription%2CColor&details=&language=en';
  //   const sourceImageUrl = 'http://upload.wikimedia.org/wikipedia/commons/3/3c/Shaki_waterfall.jpg';

  //   let headers = new Headers();
  //   headers.append("Content-Type","application/json");
  //   headers.append("Ocp-Apim-Subscription-Key", subscriptionKey);

  //   // console.log('test');

  //   this.camera.getPicture({
  //     // destinationType: this.camera.DestinationType.DATA_URL,
  //     // destinationType: this.camera.DestinationType.NATIVE_URI,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     targetWidth: 100,
  //     targetHeight: 100
  //   }).then((imageData) => {
  //     // imageData is a based64 encoded string
  //     // this.base64Image = `data:image/jpeg;base64,${imageData}`;

  //       let data = '{"url": ' + '"' + imageData + '"}';
  //       // let data = '{"url": ' + '"' + sourceImageUrl + '"}';

  //       this.description = imageData;

  //       this.http.post(uriBase, data, { headers: headers })
  //         .map(res => res.json())
  //         .subscribe(data => {
  //           this.description = 'Entrei';

  //           if (data.description) {
  //             this.description = data.description.captions[0].text;
  //           }
  //           else {
  //             this.description = 'Error!';
  //           }
  //         });
  //   });

  // }

  takePicture() {
    const subscriptionKey = '';
    const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Categories%2CDescription%2CColor&details=&language=en';
    const sourceImageUrl = 'http://upload.wikimedia.org/wikipedia/commons/3/3c/Shaki_waterfall.jpg';

    let headers = new Headers();
    // headers.append("Content-Type","application/json");
    headers.append("Content-Type","application/octet-stream");
    headers.append("Ocp-Apim-Subscription-Key", subscriptionKey);

    this.camera.getPicture({
      // destinationType: this.camera.DestinationType.DATA_URL,
      // destinationType: this.camera.DestinationType.NATIVE_URI,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 500,
      targetHeight: 500
    }).then((imageData) => {

      this.description = imageData;
      this.image = imageData;
      // this.image = sourceImageUrl;

      let options: FileUploadOptions = {
         fileKey: 'file',
         // fileName: 'name.jpg',
         httpMethod: 'POST',
         mimeType: 'image/jpeg',
         headers: headers
      };

      this.fileTransfer.upload(imageData, uriBase, options)
       .then((data) => {
        // console.log(data);
        this.description = JSON.stringify(data);
        // let d = JSON.parse(data);
        // this.description = d.description.captions[0].text;
       }, (err) => {
         this.description = 'error!';
       });

    });
  }

}
