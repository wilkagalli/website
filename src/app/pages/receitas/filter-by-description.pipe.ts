import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "filterByDescription" })
export class FilterByDescription implements PipeTransform {
  transform(resumos, descriptionQuery: string) {
    descriptionQuery = descriptionQuery.trim().toLowerCase();

    if (descriptionQuery) {
      return resumos.filter((resumo) =>
        resumo.descricao.toLowerCase().includes(descriptionQuery)
      );
    } else {
      return resumos;
    }
  }
}
