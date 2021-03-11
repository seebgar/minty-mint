import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CalendarComponent } from "./calendar/calendar.component";
import { InstructorsComponent } from "./instructors/instructors.component";
import { StudentsComponent } from "./students/students.component";
import { SubjectsComponent } from "./subjects/subjects.component";
import { IndexComponent } from "./_index/index/index.component";

const routes: Routes = [
  {
    path: "home",
    component: IndexComponent,
    children: [
      {
        path: "instructors",
        component: InstructorsComponent,
      },
      {
        path: "subjects",
        component: SubjectsComponent,
      },
      {
        path: "calendar",
        component: CalendarComponent,
      },
      {
        path: "students",
        component: StudentsComponent,
      },
    ],
  },

  { path: "", redirectTo: "home/instructors", pathMatch: "full" },
  { path: "/", redirectTo: "home/instructors", pathMatch: "full" },
  { path: "**", redirectTo: "home/instructors" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
