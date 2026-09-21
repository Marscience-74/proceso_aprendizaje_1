import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ControlFlow } from './components/control-flow/control-flow';
import { Data } from './components/data/data';

@Component({
  imports: [RouterOutlet, Header, Footer, ControlFlow, Data],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-pa1');
}
