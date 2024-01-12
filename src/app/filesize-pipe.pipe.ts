import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesizePipe'
})
export class FilesizePipePipe implements PipeTransform {
  transform(size: number): string {
    if (size === 0) {
      return '0 B';
    }

    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    const digitGroups = Math.floor(Math.log(size) / Math.log(1024));

    return (size / Math.pow(1024, digitGroups)).toFixed(2) + ' ' + units[digitGroups];
  }
}
