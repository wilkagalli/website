import { BlocoReceitasModule } from './bloco-receitas.module';

describe('BlocoReceitasModule', () => {
  let blocoReceitasModule: BlocoReceitasModule;

  beforeEach(() => {
    blocoReceitasModule = new BlocoReceitasModule();
  });

  it('should create an instance', () => {
    expect(blocoReceitasModule).toBeTruthy();
  });
});
