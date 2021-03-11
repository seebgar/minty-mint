import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GeneralService } from "../services/general.service";
import { MainService } from "../services/main.service";

@Component({
  selector: "ngx-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit {
  /** Subject */
  public subject: any = {};

  /** Instructor */
  public instructor: any = {};
  public isInstructor: boolean = false;

  constructor(
    private mainService: MainService,
    private generalService: GeneralService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const instructor: string = params.get("instructor");
      const subject: string = params.get("subject");

      this.isInstructor = instructor && true;

      this.getSubject({ _id: subject });
      this.getInstructor({ _id: instructor });
    });
  }

  // ========================
  // Functions
  // ========================

  /**
   * Navigation to the prevous route
   */
  public onBackNav(): void {
    this.generalService.goBack();
  }

  /**
   * Retrieves the subject
   * @param {string} _id
   */
  private getSubject({ _id }: { _id: string }): void {
    this.mainService.get({ api: "subjects" }).then((response) => {
      this.subject = response[0];
      if (this.isInstructor) this.subject.title = "";
    });
  }

  /**
   * Retrieves the instructor
   * @param {string} _id
   */
  private getInstructor({ _id }: { _id: string }): void {
    this.mainService.get({ api: "instructors" }).then((response) => {
      this.instructor = response[0];
    });
  }
}
