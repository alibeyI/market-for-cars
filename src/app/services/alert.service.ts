import { Injectable } from '@angular/core';
declare let alert: any;

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  success(message: string) {

    alert(message)

  }
}
