import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
    { path: 'users', component: LoginComponent },
    { path: 'quiz', component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
