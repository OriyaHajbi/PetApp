import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }


  getPets() {
    return setInterval(() => {
      return [];
    }, 2000)

  }
}
