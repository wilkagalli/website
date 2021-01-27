import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocoReceitasComponent } from './bloco-receitas.component';

describe('BlocoReceitasComponent', () => {
  let component: BlocoReceitasComponent;
  let fixture: ComponentFixture<BlocoReceitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocoReceitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocoReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
