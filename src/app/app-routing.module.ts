import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

export const routes: Routes = [
  {
    path: "index",
    loadChildren: () =>
      import("./public/public.module").then((m) => m.PublicModule),
  },

  { path: "", redirectTo: "index", pathMatch: "full" },
  { path: "**", redirectTo: "index" },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
