import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { ParticlesBg } from './components/particles-bg/particles-bg';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Hero,
    About,
    Skills,
    Projects,
    Contact,
    Footer,
    ParticlesBg
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
