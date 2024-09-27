import { useEffect, useState } from 'react';
import Spacer from '../components/Spacer';
import QnA from '../components/qna/QnA';
import QuestionAndAnswer from '../models/QuestionAndAnswer';
import { questions, tags } from '../utility/data-store';
import styles from './qnas.module.css';
import tagStyles from './tag.module.css';

export default function QnAa() {

    const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set(tags))
    const [filteredQuestions, setFilteredQuestions] = useState<QuestionAndAnswer[]>(questions);

    useEffect(() => {
        if (selectedTags.size === 0) {
            setFilteredQuestions(questions.filter(qna => qna.tags?.length === 0));
        } else {
            setFilteredQuestions(questions.filter(qna => qna.tags?.some(tag => selectedTags.has(tag))));
        }
    }, [selectedTags]);

    return (
        <div className={styles.parent}>
            <div className={styles.tags}>
                {tags.map((tag: string, index: number) => (
                    <div key={index}
                        className={`${styles.tag} ${tagStyles[tag.toLowerCase()]} ${selectedTags.has(tag) ? tagStyles.selected : ''}`}
                        onClick={() => {
                            if (selectedTags.has(tag)) {
                                const newSet = new Set(selectedTags);
                                newSet.delete(tag);
                                setSelectedTags(newSet)
                            } else {
                                setSelectedTags(new Set(selectedTags).add(tag))
                            }
                        }}>
                        {`${tag.charAt(0).toUpperCase()}${tag.slice(1)}`}
                    </div>
                ))}
            </div>
            <Spacer height={20} />
            {filteredQuestions.map((qna: QuestionAndAnswer, index: number) => (
                <div>
                    <QnA key={index} qna={qna} />
                    <div className={styles.spacer} />
                </div>
            ))}
        </div>
    );
}