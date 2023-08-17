import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEvenementtComponent } from './ajouter-evenementt.component';

describe('AjouterEvenementtComponent', () => {
  let component: AjouterEvenementtComponent;
  let fixture: ComponentFixture<AjouterEvenementtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterEvenementtComponent]
    });
    fixture = TestBed.createComponent(AjouterEvenementtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
