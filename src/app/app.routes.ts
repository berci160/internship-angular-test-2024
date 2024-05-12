import { Routes } from '@angular/router';
import { SandboxComponent } from './Pages/sandbox/sandbox.component';

export const routes: Routes = [
  {path:'', redirectTo:'sandbox', pathMatch:'full'},
  {path: 'sandbox' , component:SandboxComponent }
];
