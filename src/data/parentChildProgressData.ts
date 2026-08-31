export interface SubjectProgress {
  name: string;
  progress: number;
}

export interface NeedsAttentionItem {
  id: string;
  title: string;
  subtitle: string;
  score: number;
}

export interface ActivityItem {
  id: string;
  title: string;
  details: string;
  time: string;
  type: 'quiz' | 'essay' | 'video';
}

export interface TopPerformer {
  rank: number;
  badge: string;
  name: string;
  score: number;
}

export interface ChildProgressData {
  childName: string;
  gradeSection: string;
  school: string;
  status: string;
  lastActive: string;

  overallProgress: number;
  overallChange: number;

  modulesCompleted: number;
  totalModules: number;

  avgQuizScore: number;
  quizScoreChange: number;

  learningStreak: number;

  subjects: SubjectProgress[];
  needsAttention: NeedsAttentionItem[];
  
  childRank: number;
  classAverage: number;
  rankAboveAvgPercent: number;
  topPerformers: TopPerformer[];

  recentActivities: ActivityItem[];

  aiInsight: string;
}

export const childProgressData: ChildProgressData = {
  childName: 'Aanya Sharma',
  gradeSection: 'Grade 8 – Section A',
  school: 'Delhi Public School',
  status: 'On Track',
  lastActive: 'Today, 10:30 AM',

  overallProgress: 78,
  overallChange: 6,

  modulesCompleted: 13,
  totalModules: 20,

  avgQuizScore: 84,
  quizScoreChange: 5,

  learningStreak: 12,

  subjects: [
    { name: 'English Literature', progress: 91 },
    { name: 'Computer Science', progress: 88 },
    { name: 'Mathematics', progress: 86 },
    { name: 'Science', progress: 82 },
    { name: 'AI Basics', progress: 78 },
  ],

  needsAttention: [
    {
      id: '1',
      title: 'Fractions & Algebra',
      subtitle: 'Mathematics module • Below class average (72%)',
      score: 64,
    },
    {
      id: '2',
      title: 'Python Basics',
      subtitle: 'Computer Science quiz • Missed 3 key concepts',
      score: 71,
    },
  ],

  childRank: 8,
  classAverage: 74,
  rankAboveAvgPercent: 4,
  topPerformers: [
    { rank: 1, badge: '🥇', name: 'Alex Chen', score: 92 },
    { rank: 2, badge: '🥈', name: 'Sam Rivera', score: 86 },
    { rank: 3, badge: '🥉', name: 'Jordan Lee', score: 83 },
  ],

  recentActivities: [
    {
      id: 'a1',
      title: 'Completed Quiz: Linear Equations',
      details: 'Mathematics • Scored 90%',
      time: 'Today, 2:15 PM',
      type: 'quiz',
    },
    {
      id: 'a2',
      title: 'Submitted Essay: Macbeth',
      details: 'English Literature • Pending Grade',
      time: 'Yesterday, 4:30 PM',
      type: 'essay',
    },
    {
      id: 'a3',
      title: 'Watched Module: Intro to Python',
      details: 'Computer Science • 100% completed',
      time: 'Oct 24, 11:00 AM',
      type: 'video',
    },
  ],

  aiInsight:
    'Aanya is progressing well overall! Her dedication to English and Computer Science is excellent. To boost her confidence in Mathematics, I recommend setting aside 15 minutes a day for the "Fractions Review" mini-games available in her dashboard.',
};
