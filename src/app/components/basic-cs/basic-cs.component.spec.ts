import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCsComponent } from './basic-cs.component';

describe('BasicCsComponent', () => {
  let component: BasicCsComponent;
  let fixture: ComponentFixture<BasicCsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicCsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
