import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumiPage } from './albumi.page';

describe('AlbumiPage', () => {
  let component: AlbumiPage;
  let fixture: ComponentFixture<AlbumiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
