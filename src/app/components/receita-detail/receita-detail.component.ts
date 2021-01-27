import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { receitas } from "../bloco-receitas/receitas";

@Component({
  selector: "app-receita-detail",
  templateUrl: "./receita-detail.component.html",
})
export class ReceitaDetailComponent implements OnInit {
  private receitaId;
  public encontradaReceita;
  private listaReceitas = receitas;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => (this.receitaId = params.get("id"))
    );

    this.listaReceitas.map((receita) => {
      if (receita.id == this.receitaId) {
        this.encontradaReceita = receita;
      }
    });
  }
}
