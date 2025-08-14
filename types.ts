
import type React from 'react';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  techIcons: React.FC<{ className?: string }>[];
}

export interface Skill {
  name: string;
  icon: React.FC<{ className?: string }>;
  description: string;
}

export interface EducationItem {
    degree: string;
    institution: string;
    period: string;
    details: string;
}

export interface Certificate {
    name: string;
}
