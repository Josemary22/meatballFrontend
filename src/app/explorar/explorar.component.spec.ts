import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExplorarComponent } from './explorar.component';

describe('ExplorarComponent', () => {
  let component: ExplorarComponent;
  let fixture: ComponentFixture<ExplorarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ExplorarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExplorarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
