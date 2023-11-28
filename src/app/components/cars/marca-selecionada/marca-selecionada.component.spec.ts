import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaSelecionadaComponent } from './marca-selecionada.component';

describe('MarcaSelecionadaComponent', () => {
  let component: MarcaSelecionadaComponent;
  let fixture: ComponentFixture<MarcaSelecionadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarcaSelecionadaComponent]
    });
    fixture = TestBed.createComponent(MarcaSelecionadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
