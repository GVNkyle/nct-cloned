import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    try {
      const date = new Date(0);
      date.setSeconds(value);
      const time = date.toISOString().slice(11, 19);
      const result = time.startsWith("00:0")
        ? time.slice(4)
        : time.startsWith("00")
          ? time.slice(3)
          : time.length === 8 && time.startsWith("0")
            ? time.slice(1)
            : time;
      return result;
    } catch (error) {
      return "0:00";
    }
  }

}
