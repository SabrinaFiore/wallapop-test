import { Component, OnInit, HostBinding, Input } from '@angular/core';

export type appText = 'title' | 'paragraph' | 'amount' | 'contact' ;

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

  @HostBinding('class.text-title') get isTextTitle() {
    return this.type === 'title';
  }

  @HostBinding('class.text-paragraph') get isTextParagraph() {
    return this.type === 'paragraph';
  }

  @HostBinding('class.text-amount') get isTextAmount() {
    return this.type === 'amount';
  }

  @HostBinding('class.text-contact') get isTextContact() {
    return this.type === 'contact';
  }
}
