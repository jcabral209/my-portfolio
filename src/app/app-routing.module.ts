import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { ResumeComponent } from './views/resume/resume.component';
import { HomeComponent } from './views/home/home.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';


const routes: Routes = [

  { path: 'aboutPage', component: AboutComponent },
  { path: 'portfolioPage', component: PortfolioComponent },
  { path: 'contactPage', component: ContactComponent },
  { path: 'resumePage', component: ResumeComponent },
  { path: 'homePage', component: HomeComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
