// update-machine-dialog/update-machine-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Machine } from '../machine.service';

export interface UpdateMachineDialogData {
  machine: Machine;
  updatedMachine: Partial<Machine>;
}

@Component({
  selector: 'app-update-machine-dialog',
  templateUrl: './update-machine-dialog.component.html',
  styleUrls: ['./update-machine-dialog.component.css']
})
export class UpdateMachineDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UpdateMachineDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UpdateMachineDialogData
  ) {if (!data.updatedMachine) {
    data.updatedMachine = {
      nom: '', // ou toute autre valeur par défaut
      type: '',
      description: ''
    };
  }}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
