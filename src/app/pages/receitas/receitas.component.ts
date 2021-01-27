import { Component, OnInit } from "@angular/core";
import { ReceitasService } from "src/app/components/bloco-receitas/receitas.service";
import { resumos } from "src/app/components/resumo receita/resumo";
import { Router } from "@angular/router";

@Component({
  selector: "app-receitas",
  templateUrl: "./receitas.component.html",
  styleUrls: ["./receitas.component.css"],
})
export class ReceitasComponent implements OnInit {
  public minhasReceitas = [];
  public meusResumos = resumos;
  public filter: string = "";

  constructor(
    private receitaService: ReceitasService,
    private router: Router
  ) {}

  ngOnInit() {
    this.receitaService.getListaReceitas().subscribe((res: any) => {
      // console.log(res);
      this.minhasReceitas = res;
    });
  }

  navegar(resumo) {
    this.router.navigate([`/receitas/${resumo.id}`]);
  }
}
