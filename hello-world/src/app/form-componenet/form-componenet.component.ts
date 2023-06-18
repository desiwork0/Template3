import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-componenet',
  templateUrl: './form-componenet.component.html',
  styleUrls: ['./form-componenet.component.css']
})
export class FormComponenetComponent  {
	submit(login){
		console.log("Form submitted",login)
	}
}
