import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { viagens } from "../bloco-viagens/viagens";

@Component({
  selector: "app-viagem-detail",
  templateUrl: "./viagem-detail.component.html",
})
export class ViagemDetailComponent {
  private viagemId;
  public encontradaViagem;
  private listaViagens = viagens;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.viagemId = params.get("id");
    });

    this.listaViagens.map((viagem) => {
      if (viagem.id == this.viagemId) {
        this.encontradaViagem = viagem;
      }
    });
  }
}
