import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

/** Theming */
import { CoreModule } from "./@core/core.module";
import { ThemeModule } from "./@theme/theme.module";
import {
  NbMenuModule,
  NbSidebarModule,
  NbWindowModule,
  NbToastrModule,
  NbDialogModule,
} from "@nebular/theme";

/** Components */
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

/** Services */
import { MainService } from "./public/services/main.service";
import { GeneralService } from "./public/services/general.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    HttpClientModule,
    HttpModule,

    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbWindowModule.forRoot(),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbToastrModule.forRoot(),
    NbDialogModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [MainService, GeneralService],
})
export class AppModule {}
