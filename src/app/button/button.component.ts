import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
@Input() btext1 : string="";
@Input() disabled:boolean=true;
@Output() inc: EventEmitter<number> = new EventEmitter<number>();
public on_click()
{
  this.inc.emit();
}
}
