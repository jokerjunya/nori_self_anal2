import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import MBTIQuestion from '../components/MBTIQuestion';
import BigFiveQuestion from '../components/BigFiveQuestion';
import ResultDisplay from '../components/ResultDisplay';
import { mbtiQuestions, bigFiveQuestions } from '../components/data';
import { 
  calculateResult, 
  saveResultToLocalStorage, 
  getResultFromLocalStorage,
  clearStoredResult 
} from '../components/utils';
import { TestResult } from '../components/types';

const Home: React.FC = () => {
  // 質問の種類と進行状態
  enum TestPhase {
    MBTI,
    BigFive,
    Result
  }
  
  const [phase, setPhase] = useState<TestPhase>(TestPhase.MBTI);
  const [questionIndex, setQuestionIndex] = useState(0);
  
  // 回答の保存用
  const [mbtiAnswers, setMbtiAnswers] = useState<Record<string, number>>({});
  const [bigFiveAnswers, setBigFiveAnswers] = useState<Record<string, boolean>>({});
  
  // 診断結果
  const [result, setResult] = useState<TestResult | null>(null);
  
  // クライアントサイドのみでのレンダリングを保証
  const [isClient, setIsClient] = useState(false);
  
  // 初期ロード時に保存された結果があるか確認
  useEffect(() => {
    setIsClient(true);
    const storedResult = getResultFromLocalStorage();
    if (storedResult) {
      setResult(storedResult);
      setPhase(TestPhase.Result);
    }
  }, []);
  
  // MBTI質問への回答処理
  const handleMbtiAnswer = (score: number) => {
    const currentQuestion = mbtiQuestions[questionIndex];
    const dimension = currentQuestion.dimension;
    
    // 回答を記録
    setMbtiAnswers(prev => ({
      ...prev,
      [dimension]: (prev[dimension] || 0) + score
    }));
    
    // 次の質問へ
    if (questionIndex < mbtiQuestions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      // MBTI質問が終了したら、Big Five質問へ
      setPhase(TestPhase.BigFive);
      setQuestionIndex(0);
    }
  };
  
  // Big Five質問への回答処理
  const handleBigFiveAnswer = (answer: boolean) => {
    const currentQuestion = bigFiveQuestions[questionIndex];
    const key = `${currentQuestion.factor}-${questionIndex}`;
    
    // 回答を記録
    setBigFiveAnswers(prev => ({
      ...prev,
      [key]: answer
    }));
    
    // 次の質問へ
    if (questionIndex < bigFiveQuestions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      // すべての質問が終了したら結果を計算
      const testResult = calculateResult(mbtiAnswers, bigFiveAnswers);
      setResult(testResult);
      saveResultToLocalStorage(testResult);
      setPhase(TestPhase.Result);
    }
  };
  
  // テストをリセットして再開する
  const handleReset = () => {
    setMbtiAnswers({});
    setBigFiveAnswers({});
    setQuestionIndex(0);
    setPhase(TestPhase.MBTI);
    clearStoredResult();
    setResult(null);
  };
  
  // 現在の質問タイプに応じたコンポーネントを表示
  const renderCurrentQuestion = () => {
    if (!isClient) {
      return <div className="container">Loading...</div>;
    }
    
    if (phase === TestPhase.MBTI) {
      const currentQuestion = mbtiQuestions[questionIndex];
      const currentAnswer = mbtiAnswers[currentQuestion.dimension] || null;
      
      return (
        <div className="container">
          <h1>MBTI性格診断 ({questionIndex + 1}/{mbtiQuestions.length})</h1>
          <div className="card">
            <MBTIQuestion 
              question={currentQuestion} 
              currentAnswer={currentAnswer}
              onAnswerSelect={handleMbtiAnswer} 
            />
          </div>
        </div>
      );
    } else if (phase === TestPhase.BigFive) {
      const currentQuestion = bigFiveQuestions[questionIndex];
      const key = `${currentQuestion.factor}-${questionIndex}`;
      const currentAnswer = bigFiveAnswers[key] !== undefined
        ? bigFiveAnswers[key]
        : null;
      
      return (
        <div className="container">
          <h1>Big Five診断 ({questionIndex + 1}/{bigFiveQuestions.length})</h1>
          <div className="card">
            <BigFiveQuestion 
              question={currentQuestion} 
              currentAnswer={currentAnswer}
              onAnswerSelect={handleBigFiveAnswer} 
            />
          </div>
        </div>
      );
    } else {
      return result && <ResultDisplay result={result} onReset={handleReset} />;
    }
  };
  
  return (
    <div>
      <Head>
        <title>自己分析アプリ - MBTI & Big Five診断</title>
        <meta name="description" content="あなたの性格タイプとBig Five特性を診断し、向いている職種を提案します。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        {renderCurrentQuestion()}
      </main>
    </div>
  );
};

export default Home; 