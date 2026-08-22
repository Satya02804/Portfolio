import { Injectable, signal } from '@angular/core';

export interface Project {
  title: string;
  type: string;
  techStack: string[];
  points: string[];
  link: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  points: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  location: string;
}

@Injectable({
  providedIn: 'root',
})
export class Portfolio {
  // Personal Info
  name = signal('Satya Patel');
  role = signal('Full-Stack Web Developer');
  email = signal('patelsatya2804@gmail.com');
  phone = signal('+91 7863078420');
  linkedin = signal('www.linkedin.com/in/satya--patel');
  github = signal('github.com/Satya02804');
  
  summary = signal('Results-driven Full-Stack Web Developer with 8+ months of hands-on industry experience building scalable ERP systems and e-commerce applications. Proficient in PHP/Laravel, React.js, Node.js, Express.js, and MySQL. Pursuing MCA to deepen expertise in system design.');

  // Skills
  skills = signal([
    { category: 'Languages', items: ['PHP', 'JavaScript', 'Python', 'HTML5', 'CSS3', 'SQL'] },
    { category: 'Frameworks', items: ['Laravel', 'React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'AJAX'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'REST API', 'MySQL'] }
  ]);

  // Experience
  experience = signal<Experience[]>([
    {
      role: 'Software Development Intern',
      company: 'Shree Mahakali Software Pvt. Ltd.',
      duration: 'Last 8 Months – Present',
      location: 'Ahmedabad, India',
      points: [
        'Developed and maintained business modules, forms, and data-driven workflows in a live ERP system.',
        'Implemented UI improvements and new feature enhancements based on project requirements.',
        'Debugged and resolved issues across ERP screens and processes.',
        'Contributed to structured codebase maintenance, improving code readability and scalability.'
      ]
    }
  ]);

  // Projects
  projects = signal<Project[]>([
    {
      title: 'T-Shirt Store',
      type: 'Laravel E-Commerce Web Application',
      techStack: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'AJAX', 'Tailwind CSS'],
      points: [
        'Built a full-featured e-commerce web app with product browsing, cart management, and admin operations.',
        'Implemented dynamic product loading via AJAX, reducing page reload time.',
        'Secured the platform using Laravel\'s built-in authentication system.'
      ],
      link: 'https://github.com/Satya02804/tshirt_store'
    },
    {
      title: 'T-Shirt Store',
      type: 'Full-Stack E-Commerce Web Application',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Tailwind CSS'],
      points: [
        'Developed a full-stack e-commerce app with separate React frontend and Node/Express backend.',
        'Designed and implemented structured MySQL database schemas for products, users, and orders.',
        'Created responsive, interactive UI components in React.js with Tailwind CSS.'
      ],
      link: 'https://github.com/Satya02804/tshirt_mern'
    },
    {
      title: 'Rock Paper Scissors',
      type: 'Interactive Web and CLI Game',
      techStack: ['Python', 'HTML5', 'JavaScript', 'Tailwind CSS'],
      points: [
        'Built dual-mode game (browser + Python CLI) demonstrating cross-platform development skills.',
        'Designed a dark-themed responsive UI with smooth animations and real-time score tracking.'
      ],
      link: 'https://github.com/Satya02804/Rock_Paper_Scissor'
    }
  ]);

  // Education
  education = signal<Education[]>([
    {
      institution: 'Dr. Babasaheb Ambedkar Open University',
      degree: 'Master of Computer Application (Pursuing)',
      duration: '2025 - Present',
      location: 'Ahmedabad, Gujarat'
    },
    {
      institution: 'Kadi Sarva Vishwavidyalaya',
      degree: 'Bachelor of Computer Application, CGPA: 8.30/10',
      duration: '2022 - 2025',
      location: 'Gandhinagar, Gujarat'
    }
  ]);
}
