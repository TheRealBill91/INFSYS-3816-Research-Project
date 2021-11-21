import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostInstanceComponent } from './host-instance.component';

describe('HostInstanceComponent', () => {
  let component: HostInstanceComponent;
  let fixture: ComponentFixture<HostInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostInstanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
