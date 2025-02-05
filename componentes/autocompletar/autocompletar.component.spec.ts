import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompletarComponent } from './autocompletar.component';

describe('AutocompletarComponent', () => {
  let component: AutocompletarComponent;
  let fixture: ComponentFixture<AutocompletarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompletarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
