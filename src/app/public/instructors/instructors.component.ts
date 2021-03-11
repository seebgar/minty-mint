import { Component, OnInit } from "@angular/core";
import { GeneralService } from "../services/general.service";
import { MainService } from "../services/main.service";

@Component({
  selector: "ngx-instructors",
  templateUrl: "./instructors.component.html",
  styleUrls: ["./instructors.component.scss"],
})
export class InstructorsComponent implements OnInit {
  /** Filter Objects */
  public filterItems: any[] = [];

  /** Instructors */
  public instructors: any[] = [];

  /** View Type */
  public longCards: boolean = true;

  /** Loading Progress */
  public isLoadingFilters: boolean = false;
  public isLoadingInstructors: boolean = false;

  constructor(
    private mainService: MainService,
    private generalService: GeneralService
  ) {}

  ngOnInit(): void {
    this.getInstructors();
    this.getFilterItems();
  }

  // ========================
  // Functions
  // ========================

  /**
   * Changes the layout
   */
  public onChangeLayout(): void {
    this.longCards = !this.longCards;
  }

  /**
   * Navigation to detail screen
   * @param {string} _id
   */
  public onGetDetail({ _id }: { _id: string }): void {
    this.generalService.routerNavQueryTo({
      path: "/index/home/detail",
      query: { instructor: "0" },
    });
  }

  /**
   * Initial filter items
   */
  private getFilterItems(): void {
    this.isLoadingFilters = true;
    this.mainService
      .get({ api: "instructor-filters" })
      .then((response) => {
        if (response) {
          this.filterItems = response;
        }
      })
      .finally(() => {
        this.isLoadingFilters = false;
      });
  }

  /**
   * Initial Subject items
   */
  private getInstructors(): void {
    this.isLoadingInstructors = true;
    this.mainService
      .get({ api: "instructors" })
      .then((response) => {
        if (response) {
          this.instructors = response;
        }
      })
      .finally(() => {
        this.isLoadingInstructors = false;
      });
  }
}
