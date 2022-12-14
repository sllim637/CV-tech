import { Injectable } from '@angular/core';
import { Carte } from '../carte-visite/carte/carte.model';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs = [
    {
      id: 1,
      nom: 'Slim',
      prenom: 'Hammami',
      job: 'Software Engineer',
      image: 'slim.jpg',
      citation: 'the end is always the begining of a new thing',
      description: 'I build web applications for fun',
      keys: 'programming',
      couleur: '#5fa5fa',
      embauche: false,
    },
    {
      id: 2,
      nom: 'Mohamed',
      prenom: 'Sahnoun',
      job: 'Software Engineer',
      image: 'mohamed.jpg',
      citation: 'What doesnt kill you makes you stronger',
      description: 'I build web applications for fun',
      keys: 'HTML CSS JS REACT ANGULAR PHP',
      couleur: '#5fa5fa',
      embauche: false,
    },
  ];
  constructor() { }

  getCvs(): Carte[] {
    return this.cvs;
  }

  setCv(cv: Carte, i: number) {
    this.cvs[i] = cv;
  }
  removeCv(cv: Carte) {
    const index = this.cvs.findIndex((element) => cv.id === element.id);
    this.cvs.splice(index, 1);
  }
  addCv(cv: Carte) {
    this.cvs.push(cv);
  }
}
