import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretionsComponent } from './diretions.component';

describe('DiretionsComponent', () => {
  let component: DiretionsComponent;
  let fixture: ComponentFixture<DiretionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
