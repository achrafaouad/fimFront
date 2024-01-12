import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneFileProcessComponent } from './one-file-process.component';

describe('OneFileProcessComponent', () => {
  let component: OneFileProcessComponent;
  let fixture: ComponentFixture<OneFileProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneFileProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneFileProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
