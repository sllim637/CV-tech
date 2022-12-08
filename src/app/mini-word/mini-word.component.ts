import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent implements OnInit {

  color: string = "yellow"
  taille: number = 12

  polices: string[] = []
  constructor() { }

  ngOnInit(): void {
    this.polices = ["Arial", "Helvetica", "Georgia", "Bookman", "URW Bookman"]
  }
  onSelected(police: string) {
    console.log("policeselected is : ", police);

  }

}
