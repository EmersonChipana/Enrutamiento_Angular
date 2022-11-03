import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() image: string='';
  @Input() title: string='';
  @Input() description: string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.';

  constructor(private _router: Router) { 

  }

  ngOnInit(): void {
  }

  createForm(){
    sessionStorage.setItem('image', this.image);
    sessionStorage.setItem('title', this.title);
    sessionStorage.setItem('description', this.description);
    this._router.navigate(['/form']);
  }

}
