export async function getLessonData(setLesson, lessonName) {
  try {
    const response = await fetch(
      `https://react-course-api.azurewebsites.net/lesson/${lessonName}`
    )
    const data = await response.json()
    setLesson(data)
  } catch (error) {
    alert(
      'The server is not available. Please reload the page or try again later'
    )
  }
}
