import { Component, OnInit } from "@angular/core";
import { MainService } from "../services/main.service";

@Component({
  selector: "ngx-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"],
})
export class CalendarComponent implements OnInit {
  /** Filter Objects */
  public filterItems: any[] = [];

  /** Loading Progress */
  public isLoadingFilters: boolean = false;

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.getFilterItems();
  }

  // ========================
  // Functions
  // ========================

  /**
   * Initial filter items
   */
  private getFilterItems(): void {
    this.isLoadingFilters = true;
    this.mainService
      .get({ api: "calendar-filters" })
      .then((response) => {
        if (response) {
          this.filterItems = response;
        }
      })
      .finally(() => {
        this.isLoadingFilters = false;
      });
  }
}
