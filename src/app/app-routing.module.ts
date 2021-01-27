import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ReceitasComponent } from "./pages/receitas/receitas.component";
import { ViagensComponent } from "./pages/viagens/viagens.component";
import { PrincipalComponent } from "./pages/principal/principal.component";
import { ReceitaDetailComponent } from "./components/receita-detail/receita-detail.component";
import { ViagemDetailComponent } from "./components/viagem-detail/viagem-detail.component";
const routes: Routes = [
  { path: "receitas", component: ReceitasComponent },
  { path: "receitas/:id", component: ReceitaDetailComponent },
  { path: "viagens", component: ViagensComponent },
  { path: "viagens/:id", component: ViagemDetailComponent },
  { path: "**", component: PrincipalComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
