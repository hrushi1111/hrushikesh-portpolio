
import type { Project, Skill, Certificate, EducationItem } from './types';
import { AwsIcon, JenkinsIcon, DockerIcon, KubernetesIcon, GitIcon, PythonIcon, HtmlIcon, CssIcon, CiCdIcon, AiIcon, MySqlIcon, PrometheusIcon, GrafanaIcon, LinuxIcon, EcsIcon, CloudFrontIcon, Route53Icon } from './components/icons/TechIcons';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export const EDUCATION: EducationItem[] = [
    {
        degree: 'Bachelor of Technology (CSE)',
        institution: 'Mallareddy University, Hyderabad',
        period: '2020 – 2024',
        details: 'CGPA: 7.59',
    },
    {
        degree: 'Intermediate',
        institution: 'Narayana Junior College, Hyderabad',
        period: '2018 – 2020',
        details: 'Percentage: 87%',
    },
    {
        degree: 'Schooling, CBSE',
        institution: 'Kendriya Vidyalaya A.F.S Begumpet, Hyderabad',
        period: '2017 – 2018',
        details: 'Percentage: 61%',
    },
];

export const PROJECTS: Project[] = [
  {
    title: 'AI-Powered Cancer Classification',
    description: 'Developed a deep learning system to classify 8 types of cancer from CT/MRI images using CNN models like MobileNet & VGGNet with transfer learning.',
    tech: ['Python', 'Deep Learning', 'CNN', 'AI/ML'],
    techIcons: [PythonIcon, AiIcon],
  },
  {
    title: 'Automated CI/CD Pipeline with Jenkins & ECS',
    description: 'Built a full CI/CD pipeline using Jenkins to automate testing, building, and containerizing applications with Docker for deployment on AWS ECS.',
    tech: ['Jenkins', 'Docker', 'AWS ECS', 'CloudWatch', 'Git'],
    techIcons: [JenkinsIcon, DockerIcon, EcsIcon, AwsIcon, GitIcon],
  },
  {
    title: 'Static Website Hosting using AWS S3 Bucket',
    description: 'Hosted a static website on S3, managing bucket policies for security, and integrating Route 53 for custom domain mapping.',
    tech: ['AWS S3', 'Route 53', 'IAM', 'HTML', 'CSS'],
    techIcons: [AwsIcon, Route53Icon, HtmlIcon, CssIcon],
  },
];

export const SKILLS: Skill[] = [
  { name: 'Python', icon: PythonIcon, description: 'Scripting for automation and AI/ML projects' },
  { name: 'MySQL', icon: MySqlIcon, description: 'Relational database management' },
  { name: 'AWS', icon: AwsIcon, description: 'Proficient with EC2, S3, IAM, VPC, Lambda, ASG, ECS, and CloudWatch' },
  { name: 'Jenkins', icon: JenkinsIcon, description: 'CI/CD pipeline automation and management' },
  { name: 'Docker', icon: DockerIcon, description: 'Containerization of applications for deployment' },
  { name: 'Kubernetes', icon: KubernetesIcon, description: 'Container orchestration and management' },
  { name: 'Prometheus', icon: PrometheusIcon, description: 'Monitoring and alerting toolkit' },
  { name: 'Grafana', icon: GrafanaIcon, description: 'Visualization and analytics for monitoring' },
  { name: 'Git', icon: GitIcon, description: 'Version control with Git & GitHub' },
  { name: 'Linux', icon: LinuxIcon, description: 'OS administration and shell scripting' },
  { name: 'CI/CD', icon: CiCdIcon, description: 'Continuous Integration & Delivery principles' },
];

export const CERTIFICATES: Certificate[] = [
    { name: 'AWS DevOps Course' },
    { name: 'AWS re/Start Graduate' },
    { name: 'AWS Cloud Practitioner' },
];

export const LANGUAGES: string[] = ['Telugu', 'English', 'Hindi'];