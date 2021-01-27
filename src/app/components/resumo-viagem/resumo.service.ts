import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { resumos } from "./resumo";

@Injectable({ providedIn: "root" })
export class ResumoService {
  private meusResumos = resumos;
  constructor(private http: HttpClient) {}

  getListaResumos() {
    // return this.http.get("localhost/receitas")

    return of(this.meusResumos);
  }
}
