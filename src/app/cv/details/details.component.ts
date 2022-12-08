import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carte } from 'src/app/carte-visite/carte/carte.model';
import { CvService } from 'src/app/cv-list/cv-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',  
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  cv?: Carte;
  cartes : Carte[]
  constructor(
    private router : Router , 
    private cvService : CvService,
    private route: ActivatedRoute
    ) { 
    this.route.params.subscribe((params: any) => {
      this.cv = cvService
        .getCvs()
        .find((element: Carte) => element.id.toString() === params.id)!;
      console.log(this.cv);
    });
    this.cartes = this.cvService.getCvs()

  }

  ngOnInit(): void {
  }
  deleteCv(){
    this.cvService.removeCv(this.cv!);
    this.router.navigateByUrl('/');
  }
}
