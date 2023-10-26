import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  isDisplayed = true;

  nom : string = "";
  prenom : string= "";
  adresse : string= "";
  codePostal : string = "";
  tel:string= "";
  pays :string= "";
  login : string = "";
  ville : string = "";
  email : string = "";
  civilite : string = "";
  password : string= "";
  
  displayLabel(){
    this.isDisplayed = !this.isDisplayed;
  }
}
