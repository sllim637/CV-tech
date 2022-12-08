import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImage implements PipeTransform {
  default = 'slim.jpg'
  transform(image?: string): string {
    return image?.trim().length ? image : this.default;
  }
}
