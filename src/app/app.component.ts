import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
title = 'internship-angular-test-2024';
counter:number=0;

public increase()
{
  this.counter++;
}
public decrease()
{ if(this.counter>0){
  this.counter--;
}
}
}
