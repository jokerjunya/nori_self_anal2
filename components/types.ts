export type MBTIType = 'ISTJ' | 'ISFJ' | 'INFJ' | 'INTJ' | 'ISTP' | 'ISFP' | 'INFP' | 'INTP' | 'ESTP' | 'ESFP' | 'ENFP' | 'ENTP' | 'ESTJ' | 'ESFJ' | 'ENFJ' | 'ENTJ';

export type MBTIDescription = {
  label: string;
  strength: string;
};

export type BigFiveFactors = {
  openness: number;
  conscientiousness: number;
  extraversion: number;
  agreeableness: number;
  neuroticism: number;
};

export type BigFiveComment = {
  high: string;
  low: string;
};

export type BigFiveComments = {
  openness: BigFiveComment;
  conscientiousness: BigFiveComment;
  extraversion: BigFiveComment;
  agreeableness: BigFiveComment;
  neuroticism: BigFiveComment;
};

export type JobSuggestion = {
  condition: (mbti: MBTIType, bigFive: BigFiveFactors) => boolean;
  jobs: string[];
};

export type TestResult = {
  mbtiType: MBTIType;
  mbtiDescription: MBTIDescription;
  bigFiveFactors: BigFiveFactors;
  jobSuggestions: string[];
};

export type MBTIQuestionOption = {
  text: string;
  score: number;
};

export type MBTIQuestion = {
  text: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  options: MBTIQuestionOption[];
};

export type BigFiveQuestion = {
  text: string;
  factor: keyof BigFiveFactors;
  isReversed: boolean;
}; 