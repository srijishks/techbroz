import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlrewrite'
})
export class UrlrewritePipe implements PipeTransform {

  transform(value: any, id: any): any {
  	let val = value.replace(/[^a-zA-Z 0-9]/g, '');
  	let val2 = val.replace(/[\s]/gi, '-');
  	let val3 = "/details/"+val2+"-"+id;
  	// console.log(val2);
    return val3;
  }

}


@Pipe({
  name: 'strip'
})
export class StripPipe implements PipeTransform {

  transform(value: any, id: any): any {
  	let val1 = value.replace(/[^a-zA-Z 0-9]/g, '');
  	let val2 = val1.substring(0, id);
  	let val3 = val2+"...";
    return val3;
  }

}
