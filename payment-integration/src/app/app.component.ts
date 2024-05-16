import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, RouterModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.setPayPalClientId();
  }

  setPayPalClientId(): void {
    const script = this.renderer.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?currency=USD&client-id=${environment.apiKey}`;
    this.renderer.appendChild(this.document.head, script);
  }
  title = 'payment-integration';
}
