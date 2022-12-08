import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Carte } from 'src/app/carte-visite/carte/carte.model';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css'],
})
export class ElementComponent implements OnInit {
  @Input() data?: Carte;
  @Input() selected?: boolean;
  @Output() onSelectEvent: EventEmitter<any> = new EventEmitter();

  constructor(private router : Router) {}

  ngOnInit(): void {}

  onSelect(nom? : string , prenom? : string) {
    this.onSelectEvent.emit()
  }
}
