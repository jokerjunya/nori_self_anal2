import React from 'react';
import { BigFiveQuestion as BigFiveQuestionType } from './types';

interface BigFiveQuestionProps {
  question: BigFiveQuestionType;
  currentAnswer: boolean | null;
  onAnswerSelect: (answer: boolean) => void;
}

const BigFiveQuestion: React.FC<BigFiveQuestionProps> = ({
  question,
  currentAnswer,
  onAnswerSelect
}) => {
  return (
    <div className="question-container">
      <h3>{question.text}</h3>
      <div className="options">
        <div
          className={`option ${currentAnswer === true ? 'selected' : ''}`}
          onClick={() => onAnswerSelect(true)}
        >
          はい
        </div>
        <div
          className={`option ${currentAnswer === false ? 'selected' : ''}`}
          onClick={() => onAnswerSelect(false)}
        >
          いいえ
        </div>
      </div>
    </div>
  );
};

export default BigFiveQuestion; 