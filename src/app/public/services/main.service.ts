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
   * @param {string} api route: instructors | subjects
   * @return {Observable<any>} respuesta asincrónica
   */
  public get({ api }: { api: String }): Observable<any> {
    const path: string = api.toLowerCase().includes("instructors")
      ? "assets/data/instructors.json"
      : "assets/data/subjects.json";

    const request: Observable<any> = this.httpClient.get(path);
    return request;
  }
}
