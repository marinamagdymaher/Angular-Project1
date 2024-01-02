import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  http: any;

  constructor() { }
  uploadImage(data:any){
    const headers = new HttpHeaders();
    return this.http.post("src/assets/images", data, )
      .subscribe((arg:any) => console.log(arg));
    ;
}
}
