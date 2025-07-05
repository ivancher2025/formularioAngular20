import { NgFor, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formu-normal',
  imports: [FormsModule,NgIf,NgFor],
  templateUrl: './formu-normal.html',
  styleUrl: './formu-normal.scss'
})
export class FormuNormal {

  name: string = "";
  names:string[] = [];

  enviar() {
    if (this.name.trim()) {
      this.names.push(this.name.trim());
      this.name="";
      console.log(this.names);
    }
  }
}
