import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ViagensComponent } from "./viagens.component";
import { HeaderModule } from "src/app/components/header/header.module";
import { ResumoViagemModule } from "src/app/components/resumo-viagem/resumo-viagem.module";

@NgModule({
  imports: [CommonModule, HeaderModule, ResumoViagemModule],
  declarations: [ViagensComponent],
  exports: [ViagensComponent],
})
export class ViagensModule {}
