import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReceitasComponent } from "./receitas.component";
import { HeaderModule } from "src/app/components/header/header.module";
import { ResumoReceitaModule } from "src/app/components/resumo receita/resumo-receita.module";
import { FilterByDescription } from "./filter-by-description.pipe";

@NgModule({
  imports: [CommonModule, HeaderModule, ResumoReceitaModule],
  declarations: [ReceitasComponent, FilterByDescription],
  exports: [ReceitasComponent],
})
export class ReceitasModule {}
