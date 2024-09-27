import React from 'react';
import styles from './QnA.module.css';
import { FaPlay } from 'react-icons/fa6';
import QuestionAndAnswer from '../../models/QuestionAndAnswer';
import MyMarkdown from '../MyMarkdown';

export default function QnA({ question, answer, explanation }: QuestionAndAnswer) {

  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className={styles.parent}>
      <div className={styles.question}>{question}</div>
      <div className={styles["answer-container"]}>
        <div className={styles.arrow} onClick={toggleExpand}>
          <div className={`${styles["arrow-icon"]} ${isExpanded && styles["arrow-icon-expanded"]}`}>
            <FaPlay size={12} color='#909090' />
          </div>
        </div>
        <div style={{ marginLeft: '8px' }}>
          <div className={styles.answer}>{answer}</div>
          {explanation && isExpanded && <div className={styles.explanation}>
            <MyMarkdown>{explanation}</MyMarkdown>
          </div>}
        </div>
      </div>
    </div>
  );
};
