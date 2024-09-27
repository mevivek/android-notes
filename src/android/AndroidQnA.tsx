import QnA from '../components/qna/QnA';
import styles from './AndroidQnA.module.css'
import { androidQuestions } from '../assets/data/questions';

export default function AndroidQnA() {

    return (
        <div className={styles.parent}>
            {androidQuestions.map((qna, index) => (
                <div>
                    <QnA key={index} question={qna.q} answer={qna.a} explanation={qna.e} />
                    <div className={styles.spacer} />
                </div>
            ))}
        </div>
    );
}