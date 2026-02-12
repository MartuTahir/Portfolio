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
    { name: 'TypeScript', icon: '📘', color: '#3178c6' },
    { name: 'Angular', icon: '🅰️', color: '#dd0031' },
    { name: 'C#', icon: '💎', color: '#9b4993' },
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'SQL Server', icon: '🗄️', color: '#CC2927' },
    { name: 'REST API', icon: '🔌', color: '#009688' },
    { name: 'Git', icon: '📦', color: '#f05032' },
    { name: 'GitHub', icon: '🐙', color: '#181717' },
    { name: 'VS Code', icon: '💻', color: '#007acc' },
    { name: 'Postman', icon: '📮', color: '#ff6c37' },
    { name: 'Docker', icon: '🐳', color: '#2496ed' }
  ];
}
