import './App.css'
import QnAa from './qnas/QnAs'
import useParseTxtFile from './utility/data-store'

function App() {
  const { loading } = useParseTxtFile()
  return (
    <>
      {loading ? <div>Loading...</div> : <div style={{ alignContent: 'center', justifyContent: 'center', display: 'flex' }}>
        <QnAa />
      </div>}
    </>
  )
}

export default App
