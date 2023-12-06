// machine-list.component.ts
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MachineService, Machine } from '../machine.service';
import { UpdateMachineDialogComponent } from '../update-machine-dialog/update-machine-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.css']
})


export class MachineListComponent implements OnInit {
  machines: Machine[] = [];
  dialogRef!: MatDialogRef<UpdateMachineDialogComponent>; // Utilisez "!" pour indiquer que dialogRef sera initialisé avant utilisation

  constructor(private machineService: MachineService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadMachines();
  }

  loadMachines(): void {
    this.machineService.getMachines().subscribe(machines => {
      this.machines = machines;
    });
  }

  

  deleteMachine(id: number): void {
    this.machineService.deleteMachine(id).subscribe(() => {
      this.machines = this.machines.filter(machine => machine.id !== id);
    });
  }
  

  openUpdateDialog(machine: Machine): void {
    this.dialogRef = this.dialog.open(UpdateMachineDialogComponent, {
      width: '400px',
      data: { machine ,
        updatedMachine: { ...machine } }
          });

    

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.machineService.updateMachine(machine.id, result.updatedMachine).subscribe(() => {
          // Mettez à jour la liste des machines après la mise à jour
          this.loadMachines();
        });
      }
    });
  }


  addRandomMachine(): void {
    this.machineService.addRandomMachine().subscribe(() => {
      // Aucune manipulation nécessaire ici, la machine est générée côté serveur
      // Vous pouvez choisir d'actualiser la liste des machines si nécessaire
      this.loadMachines();
    });
}}
