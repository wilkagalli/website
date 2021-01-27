import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { from, of } from "rxjs";
import { viagens } from "./viagens";

@Injectable({ providedIn: "root" })
export class ViagensService {
  private minhasViagens = viagens;
  constructor(private http: HttpClient) {}

  getListaViagens() {
    // return this.http.get("localhost/receitas")

    return of(this.minhasViagens);
  }

  addComment(viagemId, comment) {
    this.minhasViagens = viagens.map((viagens) => {
      if (viagens.id == viagemId) {
        viagens.comments.push(comment);
      }
      return viagens;
    });
    // return this.http.post({

    // });
  }
}
