import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PrincipalComponent } from "./principal.component";
import { HeaderModule } from "src/app/components/header/header.module";
import { CarouselModule } from "src/app/components/carousel/carousel.module";
import { ResumoReceitaModule } from "src/app/components/resumo receita/resumo-receita.module";

@NgModule({
  imports: [CommonModule, HeaderModule, CarouselModule, ResumoReceitaModule],
  declarations: [PrincipalComponent],
  exports: [PrincipalComponent],
})
export class PrincipalModule {}
