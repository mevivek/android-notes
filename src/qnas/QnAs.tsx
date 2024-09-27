import Spacer from '../components/Spacer';
import QnA from '../components/qna/QnA';
import QuestionAndAnswer from '../models/QuestionAndAnswer';
import { questions, tags } from '../utility/data-store';
import styles from './qnas.module.css'

export default function QnAa() {

    return (
        <div className={styles.parent}>
            <div className={styles.tags}>
                {tags.map((tag: string, index: number) => (
                    <div key={index} className={styles.tag}>
                        {tag.toUpperCase()}
                    </div>
                ))}
            </div>
            <Spacer height={20} />
            {questions.map((qna: QuestionAndAnswer, index: number) => (
                <div>
                    <QnA key={index} qna={qna} />
                    <div className={styles.spacer} />
                </div>
            ))}
        </div>
    );
}