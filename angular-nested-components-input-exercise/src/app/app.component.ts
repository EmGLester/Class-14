import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-nested-components-input-exercise';
  myPosts:string[] = ["let's get started", "Why am I doing this?", "Is it over yet?"];

}
