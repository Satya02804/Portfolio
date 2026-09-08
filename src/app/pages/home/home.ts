import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { About } from '../../components/about/about';
import { Projects } from '../../components/projects/projects';
import { Contact } from '../../components/contact/contact';
import { Resume } from '../../components/resume/resume';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Projects, Resume, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}

