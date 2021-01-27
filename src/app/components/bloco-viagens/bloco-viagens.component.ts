import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ViagensService } from "./viagens.service";

@Component({
  selector: "app-bloco-viagens",
  templateUrl: "./bloco-viagens.component.html",
  styleUrls: ["./bloco-viagens.component.css"],
})
export class BlocoViagensComponent implements OnInit {
  @Input() viagem;
  @Input() text = "";
  @Output()
  public clickViagem = new EventEmitter<string>();

  constructor(
    private modalService: NgbModal,
    private viagemService: ViagensService
  ) {}

  ngOnInit() {}

  enviaNome() {
    this.clickViagem.emit(this.viagem.nome);
  }

  viewComments(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

  addLike() {
    this.viagem.likes = this.viagem.likes + 1;
  }

  addComment(comment) {
    const date = new Date();
    const commentDate = ` ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()} `;
    this.viagem.comments.push(comment.value + commentDate);
    comment.value = "";
    // this.receitaService.addComment(this.receita.id, comment);
  }
}
