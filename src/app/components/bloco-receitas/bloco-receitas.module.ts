import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BlocoReceitasComponent } from "./bloco-receitas.component";

@NgModule({
  imports: [CommonModule],
  declarations: [BlocoReceitasComponent],
  exports: [BlocoReceitasComponent],
})
export class BlocoReceitasModule {}
