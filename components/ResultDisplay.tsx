import React from 'react';
import { TestResult } from './types';
import { bigFiveComments } from './data';

interface ResultDisplayProps {
  result: TestResult;
  onReset: () => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, onReset }) => {
  const { mbtiType, mbtiDescription, bigFiveFactors, jobSuggestions } = result;
  
  const getBigFiveComment = (factor: keyof typeof bigFiveFactors, score: number) => {
    const threshold = 1; // 0-2のスコアで1以上をhighとする
    return score > threshold ? bigFiveComments[factor].high : bigFiveComments[factor].low;
  };
  
  return (
    <div className="container">
      <h1>あなたの診断結果</h1>
      
      <div className="result-card">
        <h2>MBTIタイプ: {mbtiType}</h2>
        <h3>{mbtiDescription.label}</h3>
        <p>あなたの強み: {mbtiDescription.strength}</p>
      </div>
      
      <div className="result-card">
        <h2>Big Five 5因子性格分析</h2>
        <div className="bar-graph">
          {Object.entries(bigFiveFactors).map(([factor, score]) => (
            <div key={factor} className="bar-container">
              <div className="bar-label">
                {factor === 'openness' && '開放性'}
                {factor === 'conscientiousness' && '誠実性'}
                {factor === 'extraversion' && '外向性'}
                {factor === 'agreeableness' && '協調性'}
                {factor === 'neuroticism' && '神経症的傾向'}
              </div>
              <div className="bar-outer">
                <div 
                  className="bar-inner" 
                  style={{ width: `${(score / 2) * 100}%` }}
                />
              </div>
              <div className="bar-value">{score}/2</div>
            </div>
          ))}
        </div>
        
        <div>
          <h3>あなたの特徴:</h3>
          <ul>
            {Object.entries(bigFiveFactors).map(([factor, score]) => (
              <li key={factor}>
                {getBigFiveComment(factor as keyof typeof bigFiveFactors, score)}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="result-card">
        <h2>あなたに向いている職種</h2>
        <div className="job-list">
          {jobSuggestions.map((job, index) => (
            <div key={index} className="job-item">
              {job}
            </div>
          ))}
        </div>
      </div>
      
      <button className="button" onClick={onReset}>
        もう一度診断する
      </button>
    </div>
  );
};

export default ResultDisplay; 