import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PrincipalModule } from "./pages/principal/principal.module";
import { ReceitasModule } from "./pages/receitas/receitas.module";
import { ViagensModule } from "./pages/viagens/viagens.module";
import { AppRoutingModule } from ".//app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { ResumoReceitaModule } from "./components/resumo receita/resumo-receita.module";
import { ReceitaDetailModule } from "./components/receita-detail/receita-detail.module";
import { ResumoViagemModule } from "./components/resumo-viagem/resumo-viagem.module";
import { ViagemDetailModule } from "./components/viagem-detail/viagem-detail.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PrincipalModule,
    ReceitasModule,
    ViagensModule,
    AppRoutingModule,
    HttpClientModule,
    ResumoReceitaModule,
    ReceitaDetailModule,
    ResumoViagemModule,
    ViagemDetailModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
