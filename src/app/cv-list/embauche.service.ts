import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Carte } from '../carte-visite/carte/carte.model';
import { CvService } from './cv-service.service';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  constructor(
    private cvService: CvService,
    private toastSerivce: ToastrService
  ) {}

  getEmbauchedCvs() : Carte[]{
    return this.cvService.getCvs().filter((cv) => cv.embauche);
  }

  setEmbauched(i: number) {
    if (this.isEmbauched(i)) {
      this.toastSerivce.error('CV deja embauché');
    } else {
      this.cvService.setCv(
        { ...this.cvService.getCvs()[i], embauche: true },
        i
      );

      this.toastSerivce.success('Embauché !');
    }
  }

  isEmbauched(i: number) {
    return this.cvService.getCvs()[i].embauche;
  }
}
