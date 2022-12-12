export default function onClickHandler(
  e,
  urlWord,
  setLessonsData,
  setNotFindNotification,
  setLoading
) {
  e.preventDefault()
  const getData = async () => {
    try {
      const response = await fetch(
        `https://react-course-api.azurewebsites.net/lesson/${urlWord}`
      )
      const data = await response.json()
      setLoading(false)
      if (data.length < 1) {
        setNotFindNotification('No lessons by this keyword...')
      }
      setLessonsData(data)
    } catch (error) {
      alert(
        'The server is not available. Please reload the page or try again later'
      )
    }
  }
  if (urlWord) {
    setLoading(true)
    getData(urlWord)
  } else {
    setNotFindNotification('To find the lesson please write something...')
  }
}
