'use client';
import { useState } from 'react';
import { QuizQuestion } from '@/data/courses';

type Props = {
  quizzes: QuizQuestion[];
  lessonNumber: number;
  totalLessons: number;
  courseSlug: string;
  onPass: () => void;
  alreadyPassed: boolean;
};

export default function QuizSection({
  quizzes,
  lessonNumber,
  totalLessons,
  courseSlug,
  onPass,
  alreadyPassed,
}: Props) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [passed, setPassed] = useState(alreadyPassed);

  const allAnswered = quizzes.every((q) => answers[q.id] !== undefined);

  const handleSubmit = () => {
    setSubmitted(true);
    const allCorrect = quizzes.every((q) => answers[q.id] === q.correctIndex);
    if (allCorrect) {
      setPassed(true);
      onPass();
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const isLast = lessonNumber === totalLessons;
  const nextLesson = lessonNumber + 1;

  if (passed) {
    return (
      <div className="quiz-passed-banner">
        <span className="quiz-passed-icon">✓</span>
        <div>
          <p className="quiz-passed-title">理解度チェック完了</p>
          <p className="quiz-passed-sub">このレッスンはクリア済みです</p>
        </div>
        <div className="quiz-passed-nav">
          {isLast ? (
            <a href={`/courses/${courseSlug}/complete`} className="btn-primary">
              コース完了画面へ →
            </a>
          ) : (
            <a
              href={`/courses/${courseSlug}/${nextLesson}`}
              className="btn-primary"
            >
              次のレッスンへ →
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-section">
      <div className="quiz-header">
        <span className="quiz-label">理解度チェック</span>
        <p className="quiz-desc">
          3問全問正解でレッスン完了。わからなければ本文を読み直してから挑戦してください。
        </p>
      </div>

      <div className="quiz-questions">
        {quizzes.map((q, qi) => {
          const chosen = answers[q.id];
          const isCorrect = submitted && chosen === q.correctIndex;
          const isWrong = submitted && chosen !== undefined && chosen !== q.correctIndex;

          return (
            <div key={q.id} className={`quiz-question ${submitted ? (isCorrect ? 'quiz-question--correct' : 'quiz-question--wrong') : ''}`}>
              <p className="quiz-q-text">
                <span className="quiz-q-num">Q{qi + 1}</span>
                {q.question}
              </p>
              <ul className="quiz-options">
                {q.options.map((opt, oi) => {
                  const isChosen = chosen === oi;
                  const isCorrectOpt = submitted && oi === q.correctIndex;
                  const isWrongChosen = submitted && isChosen && oi !== q.correctIndex;
                  return (
                    <li key={oi}>
                      <label
                        className={`quiz-option-label ${isChosen ? 'quiz-option-label--chosen' : ''} ${isCorrectOpt ? 'quiz-option-label--correct' : ''} ${isWrongChosen ? 'quiz-option-label--wrong' : ''}`}
                      >
                        <input
                          type="radio"
                          name={`quiz-${q.id}`}
                          value={oi}
                          disabled={submitted}
                          checked={isChosen}
                          onChange={() =>
                            setAnswers((prev) => ({ ...prev, [q.id]: oi }))
                          }
                          className="quiz-radio"
                        />
                        <span className="quiz-option-marker">
                          {submitted && isCorrectOpt ? '○' : submitted && isWrongChosen ? '✕' : String.fromCharCode(65 + oi)}
                        </span>
                        <span>{opt}</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
              {submitted && (
                <div className={`quiz-explanation ${isCorrect ? 'quiz-explanation--correct' : 'quiz-explanation--wrong'}`}>
                  <span className="quiz-explanation-icon">{isCorrect ? '💡' : '📖'}</span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!submitted ? (
        <button
          className="quiz-submit-btn"
          onClick={handleSubmit}
          disabled={!allAnswered}
        >
          答え合わせする
        </button>
      ) : (
        (() => {
          const allCorrect = quizzes.every((q) => answers[q.id] === q.correctIndex);
          return allCorrect ? (
            <div className="quiz-result quiz-result--pass">
              <p className="quiz-result-title">✓ 全問正解！</p>
              <p className="quiz-result-sub">次のレッスンに進みましょう。</p>
              {isLast ? (
                <a href={`/courses/${courseSlug}/complete`} className="btn-primary">
                  コース完了画面へ →
                </a>
              ) : (
                <a href={`/courses/${courseSlug}/${nextLesson}`} className="btn-primary">
                  次のレッスンへ →
                </a>
              )}
            </div>
          ) : (
            <div className="quiz-result quiz-result--fail">
              <p className="quiz-result-title">もう少し！</p>
              <p className="quiz-result-sub">解説を読んで、もう一度挑戦してください。</p>
              <button className="quiz-retry-btn" onClick={handleRetry}>
                もう一度挑戦する
              </button>
            </div>
          );
        })()
      )}
    </div>
  );
}
