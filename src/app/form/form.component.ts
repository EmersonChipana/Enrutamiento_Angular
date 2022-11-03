import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title: string = sessionStorage.getItem('title') || '';
  image: string = sessionStorage.getItem('image') || '';
  description: string = sessionStorage.getItem('description') || '';

  constructor(private _router: Router) { }


  ngOnInit(): void {
  }

  enviar(){
    sessionStorage.clear();
    this._router.navigate(['/home']);
  }
}
