## BASIC STRUCTURE
  useEffect
  (
    Argument #1: the action
    () => {},
    Argument #2: the dependencies - if left off, useEffect becomes an endless loop
    []
  )

## FOR CALLING AN API
  useEffect(() => {
    fetch('http://localhost:5085/api/Tasks/')
      .then(response => response.json())
      .then(data => setTasks(data))
  }, [])
