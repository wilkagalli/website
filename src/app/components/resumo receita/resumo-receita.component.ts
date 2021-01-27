import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { ResumoService } from "./resumo.service";

@Component({
  selector: "ap-resumo-receita",
  templateUrl: "./resumo-receita.component.html",
  styleUrls: ["./resumo-receita.component.css"],
})
export class ResumoReceitaComponent implements OnInit {
  @Input() resumo;
  @Output() clickResumo = new EventEmitter();
  constructor(private resumoService: ResumoService) {}
  ngOnInit(): void {
    this.resumoService.getListaResumos().subscribe((res: any) => {
      console.log(res);
    });
  }
}
