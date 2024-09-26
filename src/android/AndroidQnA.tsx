import { useEffect, useState } from 'react';
import QnA from '../components/qna/QnA';
import qnaData from '../assets/data/android-question-answers.json';
import styles from './AndroidQnA.module.css'

interface QnAJson {
    q: string;
    a: string;
    e: string;
}

export default function AndroidQnA() {
    const [qnaList, setQnaList] = useState<QnAJson[]>([]);

    useEffect(() => {
        setQnaList(qnaData)
    }, []);

    return (
        <div className={styles.parent}>
            {qnaList.map((qna, index) => (
                <div>
                    <QnA key={index} question={qna.q} answer={qna.a} explanation={qna.e} />
                    <div className={styles.spacer}/>
                </div>
            ))}
        </div>
    );
}