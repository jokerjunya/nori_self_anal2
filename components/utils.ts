import { MBTIType, BigFiveFactors, TestResult } from './types';
import { mbtiDescriptions, jobSuggestions } from './data';

export const calculateMBTIType = (scores: Record<string, number>): MBTIType => {
  const type = [
    scores.EI >= 3 ? 'E' : 'I',
    scores.SN >= 3 ? 'N' : 'S',
    scores.TF >= 3 ? 'F' : 'T',
    scores.JP >= 3 ? 'P' : 'J'
  ].join('') as MBTIType;

  return type;
};

export const getJobSuggestions = (mbtiType: MBTIType, bigFiveFactors: BigFiveFactors): string[] => {
  const matchingJobs: string[] = [];
  
  for (const suggestion of jobSuggestions) {
    if (suggestion.condition(mbtiType, bigFiveFactors)) {
      matchingJobs.push(...suggestion.jobs);
      if (matchingJobs.length >= 3) break;
    }
  }
  
  // 最大3つまで返す
  return Array.from(new Set(matchingJobs)).slice(0, 3);
};

export const calculateResult = (
  mbtiScores: Record<string, number>,
  bigFiveAnswers: Record<string, boolean>
): TestResult => {
  // MBTIの計算
  const mbtiType = calculateMBTIType(mbtiScores);
  const mbtiDescription = mbtiDescriptions[mbtiType];
  
  // Big Fiveの計算
  const bigFiveFactors: BigFiveFactors = {
    openness: 0,
    conscientiousness: 0,
    extraversion: 0,
    agreeableness: 0,
    neuroticism: 0
  };
  
  // Big Fiveのスコア計算 (各質問のYES=1, NO=0)
  Object.entries(bigFiveAnswers).forEach(([key, value]) => {
    const [factor, _] = key.split('-');
    if (value) {
      bigFiveFactors[factor as keyof BigFiveFactors] += 1;
    }
  });
  
  // 職業提案
  const jobSuggestionList = getJobSuggestions(mbtiType, bigFiveFactors);
  
  return {
    mbtiType,
    mbtiDescription,
    bigFiveFactors,
    jobSuggestions: jobSuggestionList
  };
};

// localStorageを使うときのブラウザチェックを強化
const isBrowser = (): boolean => {
  return typeof window !== 'undefined';
};

export const saveResultToLocalStorage = (result: TestResult): void => {
  if (isBrowser()) {
    try {
      localStorage.setItem('personalityTestResult', JSON.stringify(result));
    } catch (error) {
      console.error('localStorageへの保存に失敗しました:', error);
    }
  }
};

export const getResultFromLocalStorage = (): TestResult | null => {
  if (isBrowser()) {
    try {
      const savedResult = localStorage.getItem('personalityTestResult');
      if (savedResult) {
        return JSON.parse(savedResult);
      }
    } catch (error) {
      console.error('localStorageからの読み込みに失敗しました:', error);
    }
  }
  return null;
};

export const clearStoredResult = (): void => {
  if (isBrowser()) {
    try {
      localStorage.removeItem('personalityTestResult');
    } catch (error) {
      console.error('localStorageの削除に失敗しました:', error);
    }
  }
}; 