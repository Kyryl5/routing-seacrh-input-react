import { Paper } from '@mui/material'
import { useParams } from 'react-router-dom'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { useEffect, useState } from 'react'
import { getLessonData } from './helpers/getLessonData'
import CircularProgress from '@mui/material/CircularProgress'

export default function Lesson() {
  let { lessonName } = useParams()
  let [lesson, setLesson] = useState([])

  useEffect(() => {
    getLessonData(setLesson, lessonName)
  }, [])

  let item = lesson[0] || {}
  return lesson.length > 0 ? (
    <Paper sx={{ p: 3, mt: 4 }} style={{ backgroundColor: 'lightgrey' }}>
      <h2>
        {item?.type} {item?.name} "{item?.title}"
      </h2>
      {item?.keyPoints && (
        <ul className="keypoints">
          <h4>Lesson Topics</h4>
          {item?.keyPoints?.map((keypoint, i) => (
            <li key={i}>
              <p>{keypoint}</p>
            </li>
          ))}
        </ul>
      )}
      {item?.prerequisite && (
        <ul>
          <h4>Prepare for lesson</h4>
          {item?.prerequisite?.map((prerequisite, i) => (
            <li key={i}>
              <p>{prerequisite}</p>
            </li>
          ))}
        </ul>
      )}
      {item?.links && (
        <ul>
          <h4>Links</h4>
          {item?.links?.map((link, i) => (
            <li key={i}>
              <a href={link[1]}>{link[0]}</a>
            </li>
          ))}
        </ul>
      )}
      {item?.hometask && (
        <ul>
          <h4>Hometask</h4>
          {item?.hometask?.map((hometask, i) => (
            <li key={i}>
              <p>{hometask}</p>
            </li>
          ))}
        </ul>
      )}
      {item?.youtube && (
        <ul>
          <h4>Lesson video</h4>
          <a target="_blank" href={item.youtube}>
            <YouTubeIcon fontSize="large" color="error" />
          </a>
        </ul>
      )}
    </Paper>
  ) : (
    <CircularProgress color="inherit" />
  )
}
