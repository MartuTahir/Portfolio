import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  selectedCategory: string = 'all';

  categories = [
    { id: 'all', name: 'Todos', icon: '🌟' },
    { id: 'web', name: 'Web Apps', icon: '🌐' },
    { id: 'fullstack', name: 'Full Stack', icon: '⚡' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' }
  ];

  projects: Project[] = [
    {
      id: 1,
      title: 'Cine Dashboard',
      description: 'Panel de administración para cine con gestión de productos, entradas y estadísticas en tiempo real. Backend con C# y SQL Server.',
      image: '🎬',
      tags: ['C#', '.NET', 'SQL Server', 'Chart.js', 'JWT'],
      category: 'fullstack',
      github: 'https://github.com/MartuTahir/PIPORAMA_FRONTEND',
      featured: true
    },
    {
      id: 2,
      title: 'Chat Bot AI',
      description: 'Chat bot inteligente para charlar y hacer preguntas, con integración de IA para respuestas automáticas y aprendizaje continuo.',
      image: '🤖',
      tags: ['React', 'JavaScript', 'CSS', 'Node.js'],
      category: 'fullstack',
      github: 'https://github.com/MartuTahir/Chat-Bot-IA',
      demo: 'https://chatbotconia.netlify.app/',
      featured: true
    },
    {
      id: 3,
      title: 'E-commerce Hamburguesería',
      description: 'Tienda online para hamburguesería con catálogo de productos, carrito de compras y proceso de orden simulada. Integración de Firebase para autenticación y base de datos.',
      image: '🛒',
      tags: ['React', 'API REST', 'CSS', 'Firebase'],
      category: 'frontend',
      github: 'https://github.com/MartuTahir/e-commerce-hamburgueseria',
      demo: 'https://hamburgueseria-44244.firebaseapp.com/',
      featured: false
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'Dashboard del clima con pronóstico extendido de la ubicación que selecciones.',
      image: '🌤️',
      tags: ['JavaScript', 'OpenWeather API', 'CSS3', 'React'],
      category: 'web',
      github: 'https://github.com/MartuTahir/Weather-App',
      demo: 'https://clima-app-m.netlify.app/',
      featured: false
    },
    {
      id: 5,
      title: 'Mundo de Cachorros',
      description: 'Plataforma informativa sobre perros con datos de razas y cuidados.',
      image: '📝',
      tags: ['JavaScript', 'Bootstrap', 'CSS'],
      category: 'frontend',
      github: 'https://github.com/MartuTahir/DESAFIO',
      demo: 'https://mundodecachorros.netlify.app/#inicio',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Interactivo',
      description: 'Portfolio personal con diseño glassmorphism, animaciones GSAP y partículas flotantes. Totalmente responsive.',
      image: '💼',
      tags: ['Angular', 'GSAP', 'SCSS', 'Animations'],
      category: 'frontend',
      github: 'https://github.com/MartuTahir/Portfolio',
      demo: 'https://portfoliotahirm.netlify.app/',
      featured: false
    },
    {
      id: 7,
      title: 'Gif App',
      description: 'Aplicación para buscar gifs animados, con integración de API.',
      image: '🎞️',
      tags: ['React', 'API Rest', 'CSS'],
      category: 'frontend',
      github: 'https://github.com/MartuTahir/Gif-App',
      demo: 'https://gif-search-app-mt.netlify.app/',
      featured: false
    },
    {
      id: 8,
      title: 'Sistema de gestión de pedidos',
      description: 'Aplicación para restaurante que permite gestionar productos, pedidos, carritos de compra y una cola de pedidos en tiempo real para la pantalla de cocina. Implementa persistencia dual (MongoDB + Redis) para garantizar velocidad y confiabilidad.',
      image: '🍔',
      tags: ['JavaScript', 'Tailwind', '.NET', 'MongoDB', 'Redis'],
      category: 'web',
      github: 'https://github.com/421483JMT/CrustaceoCascarudo_Back',
      featured: true
    }
  ];

  get filteredProjects() {
    if (this.selectedCategory === 'all') {
      // Excluir proyectos destacados cuando está en 'all' porque se muestran arriba
      return this.projects.filter(p => !p.featured);
    }
    return this.projects.filter(p => p.category === this.selectedCategory);
  }

  get featuredProjects() {
    return this.projects.filter(p => p.featured);
  }

  selectCategory(categoryId: string) {
    this.selectedCategory = categoryId;
  }
}

