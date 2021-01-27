import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarouselComponent } from "./carousel.component";
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [CommonModule, NgbCarouselModule],
  declarations: [CarouselComponent],
  exports: [CarouselComponent],
})
export class CarouselModule {}
