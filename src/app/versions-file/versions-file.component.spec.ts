import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionsFileComponent } from './versions-file.component';

describe('VersionsFileComponent', () => {
  let component: VersionsFileComponent;
  let fixture: ComponentFixture<VersionsFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionsFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersionsFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
