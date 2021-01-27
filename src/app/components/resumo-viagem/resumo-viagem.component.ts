import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ResumoService } from "./resumo.service";

@Component({
  selector: "app-resumo-viagem",
  templateUrl: "./resumo-viagem.component.html",
  styleUrls: ["./resumo-viagem.component.css"],
})
export class ResumoViagemComponent implements OnInit {
  @Input() resumo;
  @Output() clickResumo = new EventEmitter();

  constructor(private resumoService: ResumoService) {}

  ngOnInit(): void {
    this.resumoService.getListaResumos().subscribe((res: any) => {
      console.log(res);
    });
  }
}
