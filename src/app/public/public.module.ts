import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

/** Gannt */
import { GanttModule } from "@syncfusion/ej2-angular-gantt";

/** Theming */
import {
  NbLayoutModule,
  NbMenuModule,
  NbButtonModule,
  NbIconModule,
  NbThemeModule,
  NbInputModule,
  NbCheckboxModule,
  NbSpinnerModule,
  NbActionsModule,
  NbRadioModule,
  NbFormFieldModule,
} from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";

/** Components */
import { PublicRoutingModule } from "./public-routing.module";
import { IndexComponent } from "./_index/index/index.component";
import { HeaderComponent } from "./_index/header/header.component";
import { FooterComponent } from "./_index/footer/footer.component";
import { InstructorsComponent } from "./instructors/instructors.component";
import { SubjectsComponent } from "./subjects/subjects.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { StudentsComponent } from "./students/students.component";
import { DetailComponent } from "./detail/detail.component";
import { MintyGanttComponent } from "./calendar/minty-gantt/minty-gantt.component";

@NgModule({
  declarations: [
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    InstructorsComponent,
    SubjectsComponent,
    CalendarComponent,
    StudentsComponent,
    DetailComponent,
    MintyGanttComponent,
  ],
  imports: [
    HttpClientModule,
    HttpClientModule,

    CommonModule,
    PublicRoutingModule,

    ReactiveFormsModule,
    FormsModule,

    NbLayoutModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbSpinnerModule,
    NbActionsModule,
    NbLayoutModule,
    NbMenuModule,
    NbThemeModule,
    NbButtonModule,
    NbIconModule,
    NbEvaIconsModule,
    NbFormFieldModule,
    NbRadioModule,

    GanttModule,
  ],
  providers: [],
})
export class PublicModule {}
