import { useEffect, useState } from 'react';
import QuestionAndAnswer from '../models/QuestionAndAnswer';

const useParseTxtFile = (filePath: string) => {
  const [data, setData] = useState<QuestionAndAnswer[]>([]);
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
        const parsedData = parseData(text);
        setData(parsedData);
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
      if (tagsMatch) obj.tags = tagsMatch[1]?.trim().split(/\s+/);

      return obj;
    });
  };

  return { data, loading, error };
};

export default useParseTxtFile;
