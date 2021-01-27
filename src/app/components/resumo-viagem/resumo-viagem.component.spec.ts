import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoViagemComponent } from './resumo-viagem.component';

describe('ResumoViagemComponent', () => {
  let component: ResumoViagemComponent;
  let fixture: ComponentFixture<ResumoViagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumoViagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
