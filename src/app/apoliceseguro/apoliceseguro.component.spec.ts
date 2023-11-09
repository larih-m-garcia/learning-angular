import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoliceseguroComponent } from './apoliceseguro.component';

describe('ApoliceseguroComponent', () => {
  let component: ApoliceseguroComponent;
  let fixture: ComponentFixture<ApoliceseguroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApoliceseguroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoliceseguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
