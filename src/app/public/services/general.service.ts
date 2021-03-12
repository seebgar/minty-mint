import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class GeneralService {
  constructor(private router: Router, private location: Location) {}

  // =================================
  // Routing Functions
  // ================================

  /**
   * Navegación a url anterior
   */
  goBack() {
    this.location.back();
  }

  /**
   * Se encarga de navegar a la URL especificada
   * @param {string} path -> "/dashboard/inventario/:id"
   * @return void
   */
  public routerNavigateTo({ path }: { path: string }): void {
    this.router.navigate([path]).then((fulfilled) => {});
  }

  /**
   * Navegacion con Query
   * @param {string} path
   * @param {any} query
   * @return void
   */
  public routerNavQueryTo({ path, query }: { path: string; query: any }): void {
    this.router.navigate([path], {
      queryParams: query,
    });
  }
}
