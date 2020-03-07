import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
})

export class AvatarComponent implements OnInit {

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  public myImgUrl : string = 'https://images.unsplash.com/photo-1541752710890-ea297c20d8be?ixlib=rb-1.2.1&auto=format&fit=crop&w=2800&q=80';
}
