import { Component, OnInit, HostBinding, Input } from '@angular/core';

export type appText = 'title' | 'paragraph' | 'price' | 'email' ;

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
})

export class TextComponent implements OnInit {

  mySvgUrl: string = '../../../../assets/icons/star-empty.svg';

  constructor() { }

  ngOnInit() { }

  @Input() type;

  @Input() haveIcon: boolean = false;

  @HostBinding('class.text-header') get isTextHeader() {
    return this.type === 'header';
  }

  @HostBinding('class.text-title') get isTextTitle() {
    return this.type === 'title';
  }

  @HostBinding('class.text-paragraph') get isTextParagraph() {
    return this.type === 'paragraph';
  }

  @HostBinding('class.text-price') get isTextprice() {
    return this.type === 'price';
  }

  @HostBinding('class.text-email') get isTextemail() {
    return this.type === 'email';
  }
}
