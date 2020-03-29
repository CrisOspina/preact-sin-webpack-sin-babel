const { useState, useEffect } = window.preactHooks

export const useHttp = (url = '', initial = []) => {
  const [data, setData] = useState(initial)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(url)
    .then(res => res.json())
    .then(res => {
      setLoading(false)
      setData(res.results)
    })
    .catch(err => setError(err))
  }, [url])

 return { data, loading, error }
}