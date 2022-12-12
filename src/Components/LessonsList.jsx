import { Paper } from '@mui/material'
import { Link } from 'react-router-dom'

export default function LessonList({ lessonsData }) {
  return lessonsData.map((item, index) => (
    <Paper
      sx={{ p: 3, mb: 2 }}
      style={{ backgroundColor: 'lightgrey' }}
      key={index}
    >
      <Link to={`lessons/${item.name}`}>
        {`Lesson Name: ${item.name}`}
        <br />
        {`Lesson Title: ${item.title}`}
      </Link>
    </Paper>
  ))
}
