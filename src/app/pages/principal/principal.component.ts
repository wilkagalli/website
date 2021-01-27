import { Component, OnInit } from "@angular/core";
import { receitas } from "src/app/components/bloco-receitas/receitas";
import { resumos } from "src/app/components/resumo receita/resumo";

@Component({
  selector: "app-principal",
  templateUrl: "./principal.component.html",
  styleUrls: ["./principal.component.css"],
})
export class PrincipalComponent implements OnInit {
  public resumos = resumos;
  constructor() {}

  ngOnInit() {}
}
