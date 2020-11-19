import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'', redirectTo: 'books', pathMatch: 'full'},
  {path:'books', component: ListComponent},
  {path:'books/create', component: CreateComponent},
  {path:'books/update/:id', component: UpdateComponent},
  {path:'books/details/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }