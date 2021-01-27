import { ViagensModule } from './viagens.module';

describe('ViagensModule', () => {
  let viagensModule: ViagensModule;

  beforeEach(() => {
    viagensModule = new ViagensModule();
  });

  it('should create an instance', () => {
    expect(viagensModule).toBeTruthy();
  });
});
