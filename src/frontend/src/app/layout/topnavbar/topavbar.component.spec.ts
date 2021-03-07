import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopavbarComponent } from './topavbar.component';

describe('TopavbarComponent', () => {
  let component: TopavbarComponent;
  let fixture: ComponentFixture<TopavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
