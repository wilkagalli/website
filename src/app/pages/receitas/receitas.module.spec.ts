import { ReceitasModule } from "./receitas.module";

describe("ReceitasModule", () => {
  let receitasModule: ReceitasModule;

  beforeEach(() => {
    receitasModule = new ReceitasModule();
  });

  it("should create an instance", () => {
    expect(receitasModule).toBeTruthy();
  });
});
