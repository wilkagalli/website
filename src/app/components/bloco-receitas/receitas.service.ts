import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { receitas } from "./receitas";
import { from, of } from "rxjs";

@Injectable({ providedIn: "root" })
export class ReceitasService {
  static map(arg0: (receita: any) => void) {
    throw new Error("Method not implemented.");
  }
  private minhasReceitas = receitas;
  constructor(private http: HttpClient) {}

  getListaReceitas() {
    // return this.http.get("localhost/receitas")

    return of(this.minhasReceitas);
  }

  addComment(receitaId, comment) {
    this.minhasReceitas = receitas.map((receita) => {
      if (receita.id == receitaId) {
        receita.comments.push(comment);
      }
      return receita;
    });
    // return this.http.post({

    // });
  }
}
