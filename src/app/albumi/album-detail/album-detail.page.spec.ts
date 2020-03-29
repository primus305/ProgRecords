import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDetailPage } from './album-detail.page';

describe('AlbumDetailPage', () => {
  let component: AlbumDetailPage;
  let fixture: ComponentFixture<AlbumDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
