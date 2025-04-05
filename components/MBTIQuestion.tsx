import React from 'react';
import { MBTIQuestion as MBTIQuestionType } from './types';

interface MBTIQuestionProps {
  question: MBTIQuestionType;
  currentAnswer: number | null;
  onAnswerSelect: (score: number) => void;
}

const MBTIQuestion: React.FC<MBTIQuestionProps> = ({
  question,
  currentAnswer,
  onAnswerSelect
}) => {
  return (
    <div className="question-container">
      <h3>{question.text}</h3>
      <div className="options">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={`option ${currentAnswer === option.score ? 'selected' : ''}`}
            onClick={() => onAnswerSelect(option.score)}
          >
            {option.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MBTIQuestion; 