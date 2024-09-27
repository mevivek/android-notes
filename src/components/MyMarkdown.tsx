import Markdown from 'react-markdown';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { lucario as style } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function MyMarkdown({ children }: { children: string }) {
  return <Markdown
    children={children}
    components={{
      code(props) {
        const { children, className, node, ...rest } = props
        const match = /language-(\w+)/.exec(className || '')
        return match ? (
          <SyntaxHighlighter
            PreTag="div"
            children={String(children).replace(/\n$/, '')}
            language={match[1]}
            wrapLines={true}
            wrapLongLines={true}
            style={style}
          />
        ) : (
          <code {...rest} className={className} style={{ textAlign: 'center', lineHeight: 1, backgroundColor: '#00000010', color: 'red', padding: '2px 4px', borderRadius: '4px' }}>
            {children}
          </code>
        )
      }
    }}
  />
}