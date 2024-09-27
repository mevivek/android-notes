import QnA from '../components/qna/QnA';
import QuestionAndAnswer from '../models/QuestionAndAnswer';
import useParseTxtFile from '../utility/data-store';
import styles from './AndroidQnA.module.css'

export default function AndroidQnA() {

    const { data } = useParseTxtFile("/data/questions.txt")

    return (
        <div className={styles.parent}>
            {data && data.map((qna: QuestionAndAnswer, index: number) => (
                <div>
                    <QnA key={index} question={qna.question} answer={qna.answer} explanation={qna.explanation} />
                    <div className={styles.spacer} />
                </div>
            ))}
        </div>
    );
}