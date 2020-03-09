import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
})

export class AvatarComponent implements OnInit {

  ngOnInit() {
  }
  
  public myImgUrl : string = 'https://webpublic.s3-eu-west-1.amazonaws.com/tech-test/img/iphone.png';
  
  // Json
  // @Input() set myImage(value: string) {
  //   this.myImage = this.myImage(items.image);
  // }
}
