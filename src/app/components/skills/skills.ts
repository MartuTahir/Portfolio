import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular', level: 50, icon: '🅰️', color: '#dd0031' },
        { name: 'React', level: 90, icon: '⚛️', color: '#61dafb' },
        { name: 'TypeScript', level: 80, icon: '📘', color: '#3178c6' },
        { name: 'JavaScript', level: 90, icon: '🟨', color: '#f7df1e' },
        { name: 'HTML/CSS', level: 95, icon: '🎨', color: '#e34c26' },
       /*  { name: 'Tailwind CSS', level: 30, icon: '💨', color: '#06b6d4' } */
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'C#', level: 80, icon: '💎', color: '#9b4993' },
        { name: 'Node.js', level: 50, icon: '🟢', color: '#339933' },
/*         { name: 'Python', level: 78, icon: '🐍', color: '#3776ab' },
        { name: 'Express', level: 80, icon: '⚡', color: '#000000' }, */
/*         { name: 'MongoDB', level: 50, icon: '🍃', color: '#47a248' }, */
/*         { name: 'PostgreSQL', level: 72, icon: '🐘', color: '#336791' }, */
        { name: 'SQL Server', level: 85, icon: '🗄️', color: '#CC2927' },
        { name: 'REST API', level: 85, icon: '🔌', color: '#009688' }
      ]
    },
    {
      title: 'Herramientas',
      skills: [
        { name: 'Git', level: 90, icon: '📦', color: '#f05032' },
        { name: 'Docker', level: 50, icon: '🐳', color: '#2496ed' },
        { name: 'VS Code', level: 90, icon: '💻', color: '#007acc' },
        { name: 'Postman', level: 85, icon: '📮', color: '#ff6c37' },
        { name: 'GitHub', level: 90, icon: '🐙', color: '#181717' }
      ]
    }
  ];
}
