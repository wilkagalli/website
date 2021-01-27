import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ViagemDetailComponent } from "./viagem-detail.component";
import { BlocoViagensModule } from "../bloco-viagens/bloco-viagens.module";
import { HeaderModule } from "../header/header.module";

@NgModule({
  declarations: [ViagemDetailComponent],
  imports: [CommonModule, HeaderModule, BlocoViagensModule],
  exports: [ViagemDetailComponent],
})
export class ViagemDetailModule {}
