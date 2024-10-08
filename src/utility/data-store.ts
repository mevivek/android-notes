import { useEffect, useState } from 'react';
import QuestionAndAnswer from '../models/QuestionAndAnswer';

const filePath = "data/questions.txt"

export var tags: string[] = []

export var questions: QuestionAndAnswer[] = []

export const tagColors = {
  "android": "#3DDC84",   // Android green
  "jetpack": "#4285F4",    // Jetpack blue (Google-like color)
  "kotlin": "#7F52FF",     // Kotlin purple
  "hilt": "#00574B",       // Hilt green (similar to dependency injection frameworks)
  "DI": "#FF6F00"          // Dependency Injection orange
}

const useParseTxtFile = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the txt file from the public folder
    const fetchData = async () => {
      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error(`Error fetching the file: ${response.statusText}`);
        }
        const text = await response.text();
        questions = parseData(text);
        tags = [...new Set(questions.flatMap(question => question.tags || []))];
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [filePath]);

  // Function to parse the text file data
  const parseData = (text: string) => {
    // Split the content into an array of individual question blocks
    const blocks = text.split(/#Q/).filter(Boolean); // Remove empty entries if any

    return blocks.map(block => {
      const obj = {} as QuestionAndAnswer;

      // Extract question
      const questionMatch = block.match(/([\s\S]*?)#A/);
      if (questionMatch) obj.question = questionMatch[1].trim();

      // Extract answer
      const answerMatch = block.match(/#A([\s\S]*?)(#E|#T|$)/);
      if (answerMatch) obj.answer = answerMatch[1].trim();

      // Extract optional explanation
      const explanationMatch = block.match(/#E([\s\S]*?)(#T|$)/);
      if (explanationMatch) obj.explanation = explanationMatch[1]?.trim();

      // Extract optional tags
      const tagsMatch = block.match(/#T([\s\S]*)/);
      if (tagsMatch) obj.tags = tagsMatch[1]?.trim().split(/, /)
        ;

      console.log(obj);

      return obj;
    });
  };

  return { loading, error };
};

export default useParseTxtFile;
