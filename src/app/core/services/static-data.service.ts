import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Gender } from "../model/gender.interface";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class StaticDataService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getGender(): Observable<Gender[]> {
    return this.http
      .get<Gender[]>(
        `${this.apiUrl}/gender`
      );
  }
}
