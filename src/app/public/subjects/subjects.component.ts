import { Component, OnInit } from "@angular/core";
import { GeneralService } from "../services/general.service";
import { MainService } from "../services/main.service";

@Component({
  selector: "ngx-subjects",
  templateUrl: "./subjects.component.html",
  styleUrls: ["./subjects.component.scss"],
})
export class SubjectsComponent implements OnInit {
  /** Filter Objects */
  public filterItems: any[] = [];

  /** Subjects */
  public subjects: any[] = [];

  /** Loading Progress */
  public isLoadingFilters: boolean = false;
  public isLoadingSubjects: boolean = false;

  constructor(
    private mainService: MainService,
    private generalService: GeneralService
  ) {}

  ngOnInit(): void {
    this.getSubjects();
    this.getFilterItems();
  }

  // ========================
  // Functions
  // ========================

  /**
   * Navigation to detail screen
   * @param {string} _id
   */
  public onGetDetail({ _id }: { _id: string }): void {
    this.generalService.routerNavQueryTo({
      path: "/index/home/detail",
      query: { subject: "0" },
    });
  }

  /**
   * Initial filter items
   */
  private getFilterItems(): void {
    this.isLoadingFilters = true;
    this.mainService
      .get({ api: "subject-filters" })
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
  private getSubjects(): void {
    this.isLoadingSubjects = true;
    this.mainService
      .get({ api: "subjects" })
      .then((response) => {
        if (response) {
          this.subjects = response;
        }
      })
      .finally(() => {
        this.isLoadingSubjects = false;
      });
  }
}
