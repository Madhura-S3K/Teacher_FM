import turtleAvatar from '../assets/avatars/teacher.png';
import studentAvatar from '../assets/avatars/student.png';
import parentAvatar from '../assets/avatars/parent.png';
import adminAvatar from '../assets/avatars/admin.png';

export interface RecentModule {
  id: string;
  title: string;
  score: string;
  date: string;
  status: 'Completed' | 'In Progress' | 'Needs Review';
}

export interface ProgressDataPoint {
  period: string;
  value: number;
  isDrop?: boolean;
}

export interface StudentDetail {
  id: string;
  name: string;
  initials: string;
  initialsBg: string;
  initialsText: string;
  avatarUrl: string;
  grade: string;
  overallProgress: number;
  progressColor: string;
  modules: string;
  avgQuiz: string;
  quizColor?: string;
  lastActive: string;
  status: 'Excellent' | 'On Track' | 'Needs Support' | 'Needs Attention';
  streak: string;
  nameColor?: string;
  strengths: string;
  areasToImprove: string;
  recentModules: RecentModule[];
  progressHistory: ProgressDataPoint[];
}

export const studentsData: StudentDetail[] = [
  {
    id: '1',
    name: 'Alex Chen',
    initials: 'AC',
    initialsBg: 'bg-emerald-100 dark:bg-emerald-950/60',
    initialsText: 'text-emerald-700 dark:text-emerald-300',
    avatarUrl: studentAvatar,
    grade: 'Grade 6 – Section A',
    overallProgress: 92,
    progressColor: 'bg-[#15ab5d]',
    modules: '18/20',
    avgQuiz: '94%',
    quizColor: 'text-[#15ab5d] font-bold',
    lastActive: 'Today',
    status: 'Excellent',
    streak: '12 Days',
    strengths: 'Pattern Recognition, Advanced Logic, Rapid problem solving and algorithm optimization.',
    areasToImprove: 'Code documentation and peer code reviews.',
    recentModules: [
      { id: 'm17', title: 'Recursion & Binary Trees', score: '96%', date: 'Yesterday', status: 'Completed' },
      { id: 'm18', title: 'Data Structures II', score: '92%', date: '3 days ago', status: 'Completed' },
    ],
    progressHistory: [
      { period: 'W1', value: 75 },
      { period: 'W2', value: 80 },
      { period: 'W3', value: 85 },
      { period: 'W4', value: 88 },
      { period: 'W5', value: 90 },
      { period: 'W6', value: 92 },
    ],
  },
  {
    id: '2',
    name: 'Sam Rivera',
    initials: 'SR',
    initialsBg: 'bg-blue-100 dark:bg-blue-950/60',
    initialsText: 'text-blue-700 dark:text-blue-300',
    avatarUrl: parentAvatar,
    grade: 'Grade 6 – Section A',
    overallProgress: 86,
    progressColor: 'bg-[#15ab5d]',
    modules: '17/20',
    avgQuiz: '89%',
    quizColor: 'text-[#15ab5d] font-bold',
    lastActive: 'Today',
    status: 'On Track',
    streak: '8 Days',
    strengths: 'Consistent daily practice, solid understanding of Variables, Arrays & Functions.',
    areasToImprove: 'Pacing under time constraints in weekly quiz assessments.',
    recentModules: [
      { id: 'm15', title: 'Array Manipulations', score: '88%', date: 'Today', status: 'Completed' },
      { id: 'm16', title: 'Function Parameters', score: '90%', date: '2 days ago', status: 'Completed' },
    ],
    progressHistory: [
      { period: 'W1', value: 68 },
      { period: 'W2', value: 72 },
      { period: 'W3', value: 78 },
      { period: 'W4', value: 82 },
      { period: 'W5', value: 84 },
      { period: 'W6', value: 86 },
    ],
  },
  {
    id: '3',
    name: 'Jordan Lee',
    initials: 'JL',
    initialsBg: 'bg-pink-100 dark:bg-pink-950/60',
    initialsText: 'text-pink-700 dark:text-pink-300',
    avatarUrl: adminAvatar,
    grade: 'Grade 6 – Section A',
    overallProgress: 71,
    progressColor: 'bg-pink-500',
    modules: '14/20',
    avgQuiz: '76%',
    lastActive: '2 days ago',
    status: 'Needs Support',
    streak: '3 Days',
    strengths: 'HTML/CSS Layouts, UI Design logic, enthusiasm for interactive projects.',
    areasToImprove: 'JavaScript event listeners, asynchronous execution flow.',
    recentModules: [
      { id: 'm13', title: 'DOM Manipulations', score: '74%', date: '3 days ago', status: 'In Progress' },
      { id: 'm14', title: 'Event Handlers', score: '78%', date: '4 days ago', status: 'Completed' },
    ],
    progressHistory: [
      { period: 'W1', value: 60 },
      { period: 'W2', value: 65 },
      { period: 'W3', value: 70 },
      { period: 'W4', value: 68, isDrop: true },
      { period: 'W5', value: 70 },
      { period: 'W6', value: 71 },
    ],
  },
  {
    id: '4',
    name: 'Madhura Patil',
    initials: 'MP',
    initialsBg: 'bg-red-100 dark:bg-red-950/60',
    initialsText: 'text-red-700 dark:text-red-300',
    avatarUrl: turtleAvatar,
    grade: 'Grade 6 – Section A',
    overallProgress: 68,
    progressColor: 'bg-red-500',
    modules: '13/20',
    avgQuiz: '72%',
    quizColor: 'text-red-600 dark:text-red-400 font-bold',
    lastActive: '3 days ago',
    status: 'Needs Attention',
    streak: '4 Days',
    nameColor: 'text-red-700 dark:text-red-400 font-bold',
    strengths: 'Pattern Recognition, Basic Logic, Quick completion of early modules.',
    areasToImprove: 'Nested loops, complex conditionals. Spending too long on quiz sections without finishing.',
    recentModules: [
      { id: 'm12', title: 'Loops & Iteration', score: '65%', date: '3 days ago', status: 'Needs Review' },
      { id: 'm13', title: 'Conditionals II', score: '70%', date: '5 days ago', status: 'Completed' },
      { id: 'm14', title: 'Nested Statements', score: '58%', date: '1 week ago', status: 'In Progress' },
    ],
    progressHistory: [
      { period: 'W1', value: 72 },
      { period: 'W2', value: 76 },
      { period: 'W3', value: 80 },
      { period: 'W4', value: 65, isDrop: true },
      { period: 'W5', value: 66, isDrop: true },
      { period: 'W6', value: 68, isDrop: true },
    ],
  },
  {
    id: '5',
    name: 'David K.',
    initials: 'DK',
    initialsBg: 'bg-red-100 dark:bg-red-950/60',
    initialsText: 'text-red-700 dark:text-red-300',
    avatarUrl: studentAvatar,
    grade: 'Grade 6 – Section A',
    overallProgress: 54,
    progressColor: 'bg-red-600',
    modules: '10/20',
    avgQuiz: '61%',
    quizColor: 'text-red-600 dark:text-red-400 font-bold',
    lastActive: '5 days ago',
    status: 'Needs Attention',
    streak: '1 Day',
    strengths: 'Visual block coding concepts and sequence assembly.',
    areasToImprove: 'Regular attendance, syntax error identification, complex logic flow.',
    recentModules: [
      { id: 'm09', title: 'Variable Declaration', score: '60%', date: '5 days ago', status: 'Needs Review' },
      { id: 'm10', title: 'Syntax Fundamentals', score: '62%', date: '1 week ago', status: 'In Progress' },
    ],
    progressHistory: [
      { period: 'W1', value: 65 },
      { period: 'W2', value: 62, isDrop: true },
      { period: 'W3', value: 58, isDrop: true },
      { period: 'W4', value: 55, isDrop: true },
      { period: 'W5', value: 53, isDrop: true },
      { period: 'W6', value: 54 },
    ],
  },
];
