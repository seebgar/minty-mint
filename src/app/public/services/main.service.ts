import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root",
})
export class MainService {
  constructor(public httpClient: HttpClient) {}

  /**
   * API GET
   * Retorna un objeto JSON dependiendo del API especificado
   * @param {string} api route: instructors | subjects | subject-filters
   * @return {Promise<any>} respuesta asincrónica
   */
  public get({ api }: { api: String }): Promise<any> {
    const request: Promise<any> = this.httpClient
      .get(`assets/data/${api}.json`)
      .toPromise();
    return request;
  }
}
