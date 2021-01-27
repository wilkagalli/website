import { resumos } from "./resumo";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";

@Injectable({ providedIn: "root" })
export class ResumoService {
  private meusResumos = resumos;
  description: any;
  descricao: any;
  constructor(private http: HttpClient) {}

  getListaResumos() {
    // return this.http.get("localhost/receitas")

    return of(this.meusResumos);
  }
}
