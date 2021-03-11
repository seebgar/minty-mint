import { Injectable } from "@angular/core";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class GeneralService {
  constructor(
    private toastrService: NbToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialogService: NbDialogService,
    private location: Location
  ) {}

  // =================================
  // Metodos MANIPULACION
  // ================================

  /**
   * Retorna el valor ingresado en formato number
   * o 0 si no se puede parsear
   * @param fromVal
   * @return number
   */
  public getNumber(fromVal): number {
    const valor: string = parseFloat(`${fromVal || "0"}`).toString();
    if (valor === "NaN") return 0;
    else return parseFloat(valor);
  }

  /**
   * Remueve todos los espacios en blanco
   * tanto los del borde como los contenidos
   * @param x
   * @return string
   */
  public removeWS(x): string {
    return `${x}`.trim().replace(/\s/g, "");
  }

  /**
   * Remueve los diacriticos de una cadena
   * @param x
   * @return string
   */
  public removeDiacritics(x): string {
    return `${x}`.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  /**
   * Remueve los diacriticos de una cadena
   * y quita todos los espcaios en blanco
   * @param x
   * @return string
   */
  public getPlainString(x): string {
    return this.removeDiacritics(this.removeWS(x));
  }

  // =================================
  // Metodos TOASTR
  // ================================

  /**
   * Abre un dialogo estilo nebular
   * @param  {any} dialog referencia al template en html
   * que contiene el dialogo. Debería der tipye ElementRef o TypeReference
   * @returns void
   */
  public showDialog({ dialog }: { dialog: any }): any {
    return this.dialogService.open(dialog, { context: "" });
  }

  // =================================
  // Metodos TOASTR
  // ================================

  /**
   * Muestra una notificacion estilo Toastr en la pantalla actual
   * @param  {string} position determina en que parte de la pantalla se representará el Toastr
   * @param  {any} title titulo del Toastr
   * @param  {any} message contenido del Toastr
   * @param  {any} status puede ser (basic, primary, success, info, warning, danger, control)
   * @returns void
   */
  public showToastr({
    position,
    title,
    message,
    status,
  }: {
    position?: any;
    title: string;
    message?: string;
    status: any;
  }): void {
    let realPosition = position ? position : "top-end";
    let realMessage = message ? message : "";
    let duractionMilisec = 4650;
    this.toastrService.show(`${realMessage}`, `${title}`, {
      position: realPosition,
      status,
      duration: duractionMilisec,
    });
  }

  /**
   * Muestra un mensaje cuando el servidor responde NULL
   * @param {string} titulo o nombre del modulo para saber en qué componete se utiliza
   * @return void
   */
  public handleResponseNull({ titulo }: { titulo?: string }) {
    this.showToastr({
      title: "No se ha establecido una conexión con el servidor.",
      message: `${titulo || ""}`,
      status: "basic",
    });
  }

  /**
   * Muestra un mensaje con el error
   * @param {any} error objeto error a mostrar
   * @param {string} titulo o nombre del modulo para saber en qué componete se utiliza
   * @return void
   */
  public handleError({ error, titulo }: { error: any; titulo?: string }) {
    if (error.ok == false && error.status == 500) {
      const url: string[] = `${error.url}`.split("api/");
      const domain: string = url[0].includes("local")
        ? "Localhost Server"
        : "Heorku Server";
      this.handleResponseNull({
        titulo: `Servidor: ${domain || "inválido"}. API: ${
          url[1] || "inválido"
        }`,
      });
      return;
    }

    this.showToastr({
      title: `${error.message || error.data || error || "404 No Encontrado."}`,
      status: "warning",
    });
  }

  /**
   * Muestra un mensaje de success
   * @param {string} text - mensaje
   * @return void
   */
  public handleSuccess({ text }: { text: string }) {
    this.showToastr({
      title: `${text}`,
      status: "success",
    });
  }

  /**
   * Mensaje 401 no tiene permisos
   * @returns void
   */
  public on401(): void {
    this.showToastr({
      title: "No cuenta con los suficientes permisos.",
      status: "danger",
    });
  }

  /**
   * Mesnaje generico faltan campos por completar
   * @returns void
   */
  public onIncomplete(): void {
    this.showToastr({
      title: "Faltan campos por completar.",
      status: "warning",
    });
  }

  // =================================
  // Metodos GENERALES
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

  /**
   * Adiciona un query a la url actual
   * @param {any} query
   * @returns void
   */
  public onAddQuery({ query }: { query?: any }): void {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: query || null,
      queryParamsHandling: "merge",
    });
  }

  /**
   * Organiza por fecha de creadcion en el servidor
   * @param a primer objeto
   * @param b segundo objeto
   * @return number
   */
  public sortCreatedAt(a, b): number {
    const dateA: Date = a ? new Date(a.createdAt) : new Date();
    const dateB: Date = b ? new Date(b.createdAt) : new Date();
    return dateB.getTime() - dateA.getTime();
  }

  /**
   * Organiza por atributo dado
   * @param attr atributo a comparar
   * @param a primer objeto
   * @param b segundo objeto
   * @return number
   */
  public sortProperty(attr, a, b): number {
    if (attr) {
      return `${a[attr]}`.localeCompare(`${b[attr]}`);
    } else return 0;
  }

  /**
   * Organiza por fecha personalizada
   * @param a primer objeto
   * @param b segundo objeto
   * @return number
   */
  public sortDateProperty(attr, a, b): number {
    const dateA: Date = a[attr] ? new Date(a[attr]) : new Date();
    const dateB: Date = b[attr] ? new Date(b[attr]) : new Date();
    return dateB.getTime() - dateA.getTime();
  }
}
