import { useState } from 'react'
import LessonList from './LessonsList'
import onClickHandler from './helpers/onClickHandler'
import CircularProgress from '@mui/material/CircularProgress'

export default function MainPage() {
  const [lessonsData, setLessonsData] = useState([])
  const [urlWord, setUrlWord] = useState('')
  const [notFindNotification, setNotFindNotification] = useState('')
  const [loading, setLoading] = useState(false)

  function onChangeHandler(e) {
    setUrlWord(e.target.value)
  }

  return (
    <>
      <div className="input-button-group">
        <input
          onChange={onChangeHandler}
          type="text"
          placeholder="Find the lesson..."
        />
        <button
          onClick={(e) =>
            onClickHandler(
              e,
              urlWord,
              setLessonsData,
              setNotFindNotification,
              setLoading
            )
          }
        >
          Find lesson
        </button>
      </div>
      {loading ? <CircularProgress color="inherit" /> : ''}
      <div>
        {lessonsData.length > 0 ? (
          <LessonList lessonsData={lessonsData} />
        ) : (
          <div>{notFindNotification}</div>
        )}
      </div>
    </>
  )
}
