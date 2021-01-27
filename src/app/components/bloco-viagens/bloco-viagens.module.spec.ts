import { BlocoViagensModule } from './bloco-viagens.module';

describe('BlocoViagensModule', () => {
  let blocoViagensModule: BlocoViagensModule;

  beforeEach(() => {
    blocoViagensModule = new BlocoViagensModule();
  });

  it('should create an instance', () => {
    expect(blocoViagensModule).toBeTruthy();
  });
});
