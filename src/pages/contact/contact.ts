import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  message:string = null;
  file:string = null;
  link:string = null;
  subjet:string = null;

  constructor(public navCtrl: NavController, private socialSharing: SocialSharing) {

  }

  share(){
    this.socialSharing.share(this.message, null, this.file,  this.link)
    .then(()=> {

    }).catch(()=>{

    });
  }


}
