import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text',
})
export class TextPipe implements PipeTransform {
  transform(text: string, lng: number): string {
    if (text.length < lng) return text;
    else return `${text.substring(0, lng)}...`;
  }
}
