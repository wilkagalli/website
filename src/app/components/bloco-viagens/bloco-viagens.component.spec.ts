import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocoViagensComponent } from './bloco-viagens.component';

describe('BlocoViagensComponent', () => {
  let component: BlocoViagensComponent;
  let fixture: ComponentFixture<BlocoViagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocoViagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocoViagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
