import { Component, OnInit } from "@angular/core";
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

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.getInstructors();
    this.getFilterItems();
  }

  // ========================
  // Methods
  // ========================

  /**
   * Changes the layout
   */
  public onChangeLayout(): void {
    this.longCards = !this.longCards;
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
