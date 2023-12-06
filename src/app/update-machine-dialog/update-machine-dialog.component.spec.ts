import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMachineDialogComponent } from './update-machine-dialog.component';

describe('UpdateMachineDialogComponent', () => {
  let component: UpdateMachineDialogComponent;
  let fixture: ComponentFixture<UpdateMachineDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateMachineDialogComponent]
    });
    fixture = TestBed.createComponent(UpdateMachineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
