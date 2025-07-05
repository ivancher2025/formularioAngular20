import { Component } from '@angular/core';
import { NgFor, NgForOf, NgIf } from '@angular/common';
import { ReactiveFormsModule,FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-formu-reactivo',
  standalone:true,
  imports: [ReactiveFormsModule,NgIf,NgFor],
  templateUrl: './formu-reactivo.html',
  styleUrl: './formu-reactivo.scss'
})
export class FormuReactivo {

  //forms: FormGroup;
  correo:string="";
  correos: string[] = [];
  
   profileForm = new FormGroup({
    email:
     new FormControl('',[Validators.email,Validators.required]),
  
  });
 
  enviar(){
    this.correos.push(this.correo);
    this.correo="";
  }

/*
  enviar(){
   console.log(this.profileForm.get("corre")?.value);
   let name = this.profileForm.get('corre').value;
   const items = this.profileForm.get('corre') as FormArray;
    items.push(this.createItem());
    
  }

createItem(): FormGroup {
    return this.fb.group({
      emails: [this.profileForm.get("email")?.value]
    });
  }

*/
}
