import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  typingText = '';
  private texts = [
    'Desarrollo de Software',
    'Creadora de Experiencias'
  ];
  private currentTextIndex = 0;
  private currentCharIndex = 0;
  private isDeleting = false;
  private typingSpeed = 100;
  private deletingSpeed = 50;
  private pauseTime = 2000;
  private intervalId: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.startTyping();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearTimeout(this.intervalId);
    }
  }

  private startTyping(): void {
    const currentText = this.texts[this.currentTextIndex];

    if (!this.isDeleting && this.currentCharIndex < currentText.length) {
      this.typingText = currentText.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
      this.cdr.markForCheck();
      this.intervalId = setTimeout(() => this.startTyping(), this.typingSpeed);
    } else if (this.isDeleting && this.currentCharIndex > 0) {
      this.typingText = currentText.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
      this.cdr.markForCheck();
      this.intervalId = setTimeout(() => this.startTyping(), this.deletingSpeed);
    } else if (!this.isDeleting && this.currentCharIndex === currentText.length) {
      this.isDeleting = true;
      this.intervalId = setTimeout(() => this.startTyping(), this.pauseTime);
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
      this.intervalId = setTimeout(() => this.startTyping(), 500);
    }
  }
}
