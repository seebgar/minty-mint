import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GeneralService } from "../../services/general.service";

@Component({
  selector: "ngx-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  /** Menu Tabs */
  public mainTabs: any[] = [
    {
      name: "Instructors",
      isActive: false,
    },
    {
      name: "Subjects",
      isActive: false,
    },
    {
      name: "Calendar",
      isActive: false,
    },
    {
      name: "Students",
      isActive: false,
    },
  ];

  constructor(private router: Router, private generalService: GeneralService) {
    const url: string = this.router.url;

    console.log(url, `${url}`.toLowerCase().endsWith("/subjects"));

    if (`${url}`.toLowerCase().endsWith("/instructors")) {
      this.setActiveItem({ name: "Instructors", navigate: false });
    } else if (`${url}`.toLowerCase().endsWith("/subjects")) {
      this.setActiveItem({ name: "Subjects", navigate: false });
    } else if (`${url}`.toLowerCase().endsWith("/calendar")) {
      this.setActiveItem({ name: "Calendar", navigate: false });
    } else if (`${url}`.toLowerCase().endsWith("/students")) {
      this.setActiveItem({ name: "Students", navigate: false });
    }
  }

  ngOnInit() {}

  // =================================
  // Metodos
  // ================================

  /**
   * Selección de tab activo
   * @returns
   */
  public setActiveItem({ name, navigate = true }) {
    console.log(name);
    this.mainTabs.forEach((item) => {
      if (item.name === name) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    });

    if (navigate) {
      if (`${name}`.toLowerCase().includes("instructors")) {
        this.generalService.routerNavigateTo({
          path: "/index/home/instructors",
        });
      } else if (`${name}`.toLowerCase().includes("subjects")) {
        this.generalService.routerNavigateTo({
          path: "/index/home/subjects",
        });
      } else if (`${name}`.toLowerCase().includes("calendar")) {
        this.generalService.routerNavigateTo({
          path: "/index/home/calendar",
        });
      } else if (`${name}`.toLowerCase().includes("students")) {
        this.generalService.routerNavigateTo({
          path: "/index/home/students",
        });
      }
    }
  }
}
