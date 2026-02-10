import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
  icon: string;
}

interface Achievement {
  number: string;
  label: string;
  icon: string;
}

interface Interest {
  name: string;
  icon: string;
  color: string;
}

interface SoftSkill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  experiences: Experience[] = [
    {
      year: '2024 - Presente',
      title: 'Tecnicatura en Programación',
      company: 'UTN FRC',
      description: 'Formación universitaria en desarrollo de software, algoritmos, estructuras de datos y metodologías de programación.',
      icon: '🎓'
    },
    {
      year: '2023 - Presente',
      title: 'Desarrollo de Proyectos Personales',
      company: 'Aprendizaje Autodidacta',
      description: 'Creación de aplicaciones web con React, Angular y C#. Implementación de bases de datos y APIs REST para proyectos reales.',
      icon: '💻'
    },
    {
      year: '2025',
      title: 'Más allá del codigo: IA como herramienta estratégica para diseñadores de software',
      company: 'UTN FRC',
      description: 'Capacitación sobre el uso de inteligencia artificial para optimizar procesos de desarrollo, mejorar la calidad del código y acelerar la innovación en proyectos de software.',
      icon: '📚'
    },
    {
      year: '2024',
      title: 'Introducción a la IA y Prompt Engineering',
      company: 'EducaciónIT',
      description: 'Curso de fundamentos de inteligencia artificial, aprendizaje automático y técnicas de prompt engineering para mejorar la interacción con la IA.',
      icon: '📚'
    },
    {
      year: '2022 - 2023',
      title: 'Desarrollo Web Frontend React Flex',
      company: 'Coderhouse',
      description: 'Aprendizaje de fundamentos de programación, JavaScript, HTML/CSS y primeros pasos en frameworks modernos como React.',
      icon: '📚'
    }
  ];

  achievements: Achievement[] = [
    { number: '15+', label: 'Proyectos Personales', icon: '💻' },
    { number: '3+', label: 'Años Aprendiendo', icon: '📚' },
    { number: '10+', label: 'Tecnologías', icon: '🛠️' },
    { number: '100%', label: 'Motivación', icon: '🚀' }
  ];

  interests: Interest[] = [
    { name: 'Programación', icon: '💻', color: '#6366f1' },
    { name: 'Inteligencia Artificial', icon: '🤖', color: '#ec4899' },
    { name: 'Aprendizaje', icon: '📚', color: '#8b5cf6' },
    { name: 'Innovación', icon: '💡', color: '#f59e0b' }
  ];

  softSkills: SoftSkill[] = [
    { name: 'Trabajo en equipo', icon: '🤝' },
    { name: 'Resolución de problemas', icon: '🧩' },
    { name: 'Comunicación', icon: '💬' },
    { name: 'Adaptabilidad', icon: '🔄' },
    { name: 'Proactividad', icon: '🚀' }
  ];
}
