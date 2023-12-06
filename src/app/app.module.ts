import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatatableComponent } from './datatable/datatable.component';
import { UploadComponent } from './upload/upload.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MachineListComponent } from './machine-list/machine-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateMachineDialogComponent } from './update-machine-dialog/update-machine-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Assurez-vous que cette ligne est présente



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    DashboardComponent,
    DatatableComponent,
    UploadComponent,
    SignupComponent,
    NavbarComponent,
    MachineListComponent,
    UpdateMachineDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,
      FormsModule ,
      MatDialogModule,
      BrowserAnimationsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
