import { NgModule } from "@angular/core";
import { ReceitaDetailComponent } from "./receita-detail.component";
import { CommonModule } from "@angular/common";
import { BlocoReceitasModule } from "../bloco-receitas/bloco-receitas.module";
import { HeaderModule } from "../header/header.module";

@NgModule({
  declarations: [ReceitaDetailComponent],
  imports: [CommonModule, BlocoReceitasModule, HeaderModule],
  exports: [ReceitaDetailComponent],
})
export class ReceitaDetailModule {}
