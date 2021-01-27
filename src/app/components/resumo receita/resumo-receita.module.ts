import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ResumoReceitaComponent } from "./resumo-receita.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ResumoReceitaComponent],
  exports: [ResumoReceitaComponent],
})
export class ResumoReceitaModule {}
