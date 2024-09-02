import { Routes } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";
import { HomeComponent } from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {BlogsComponent} from "./pages/blogs/blogs.component";
import {EventsComponent} from "./pages/events/events.component";
import {CoursesComponent} from "./pages/courses/courses.component";
import {LoginComponent} from "./pages/login/login.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent, },
      { path: 'about', component: AboutComponent, },
      { path: 'contact', component: ContactComponent, },
      { path: 'blogs', component: BlogsComponent, },
      { path: 'events', component: EventsComponent, },
      { path: 'courses', component: CoursesComponent, },
      { path: 'login', component: LoginComponent, },
    ]
  },
];
