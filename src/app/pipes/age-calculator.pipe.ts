import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageCalculator'
})
export class AgeCalculatorPipe implements PipeTransform {

  transform(value:any): any {
    
    // current year
    const currentYear = new Date().getFullYear();
 
     //birth year
    var currentValue = new Date(value);
    const birthYear = currentValue.getFullYear();

    const age = currentYear - birthYear;
    return age + ' years old';
  }

}
