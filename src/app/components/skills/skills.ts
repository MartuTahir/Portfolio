import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills: Skill[] = [
    { name: 'React', icon: '⚛️', color: '#61dafb' },
    { name: 'JavaScript', icon: '🟨', color: '#f7df1e' },
    { name: 'HTML/CSS', icon: '🎨', color: '#e34c26' },
    { name: 'Tailwind', icon: '💨', color: '#06B6D4' },
    { name: 'TypeScript', icon: '📘', color: '#3178c6' },
    { name: 'Angular', icon: '🅰️', color: '#dd0031' },
    { name: 'C#', icon: '💎', color: '#9b4993' },
    { name: 'Java', icon: '☕', color: '#007396' },
    { name: '.NET Framework', icon: '🔷', color: '#512BD4' },
    { name: '.NET Core', icon: '🟣', color: '#512BD4' },
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'SQL Server', icon: '🗄️', color: '#CC2927' },
    { name: 'MongoDB', icon: '🍃', color: '#47A248' },
    { name: 'Redis', icon: '🔴', color: '#DC382D' },
    { name: 'REST API', icon: '🔌', color: '#009688' },
    { name: 'Git', icon: '📦', color: '#f05032' },
    { name: 'GitHub', icon: '🐙', color: '#181717' },
    { name: 'Postman', icon: '📮', color: '#ff6c37' }
  ];
}
