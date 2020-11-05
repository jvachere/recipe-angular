import { Pipe, PipeTransform } from '@angular/core';
import * as humanizeDuration from 'humanize-duration';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(minutes: number): string {
    return humanizeDuration(minutes * 60 * 1000);
  }
}
