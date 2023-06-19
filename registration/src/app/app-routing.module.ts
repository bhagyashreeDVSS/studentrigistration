import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentComponent } from 'src/student/student.component';
import { DataComponent } from './data/data.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent
  },
  {
    path: 'login',
    component: StudentComponent
  },
  {

    path: 'data',
    component: DataComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
