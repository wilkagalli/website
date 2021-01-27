import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { ViagensService } from "src/app/components/bloco-viagens/viagens.service";
import { viagens } from "src/app/components/bloco-viagens/viagens";
import { resumos } from "src/app/components/resumo-viagem/resumo";

@Component({
  selector: "app-viagens",
  templateUrl: "./viagens.component.html",
  styleUrls: ["./viagens.component.css"],
})
export class ViagensComponent implements OnInit {
  public minhasViagens = viagens;
  public nomeViagemClicada;
  public meusResumos = resumos;

  constructor(private viagemService: ViagensService, private router: Router) {}

  ngOnInit() {
    this.viagemService.getListaViagens().subscribe((res: any) => {
      this.minhasViagens = res;
    });
  }

  navegar(resumo) {
    this.router.navigate([`/viagens/${resumo.id}`]);
  }
}
