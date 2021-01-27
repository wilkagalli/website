import { Component, OnInit, Input } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ReceitasService } from "./receitas.service";

@Component({
  selector: "app-bloco-receitas",
  templateUrl: "./bloco-receitas.component.html",
  styleUrls: ["./bloco-receitas.component.css"],
})
export class BlocoReceitasComponent implements OnInit {
  @Input() receita;
  constructor(
    private modalService: NgbModal,
    private receitaService: ReceitasService
  ) {}

  ngOnInit() {}

  viewComments(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

  addLike() {
    this.receita.likes = this.receita.likes + 1;
  }

  addComment(comment) {
    const date = new Date();
    const commentDate = ` ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()} `;
    this.receita.comments.push(comment.value + commentDate);
    comment.value = "";
    // this.receitaService.addComment(this.receita.id, comment);
  }
}
