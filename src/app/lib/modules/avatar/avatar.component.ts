import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
})

export class AvatarComponent {
  @Input() myImgUrl: string = 'https://webpublic.s3-eu-west-1.amazonaws.com/tech-test/img/iphone.png';
}
