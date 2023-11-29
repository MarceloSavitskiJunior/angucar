import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'decimalFormat' })
export class DecimalFormatPipe implements PipeTransform {
  transform(value: number, decimals: number = 2, prefix: string = '', suffix: string = ''): string {
    if (isNaN(value)) {
      return '';
    }
    const formattedValue = value.toFixed(decimals);
    return `${prefix} ${formattedValue} ${suffix}`;
  }
}