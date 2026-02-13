import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { Footer } from './footer/footer';
import { Contactus } from './contactus/contactus';
import { Clothes } from './clothes/clothes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Navbar , Home , Footer , Contactus , Clothes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('trendyol');
}
