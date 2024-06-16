import React from 'react'
import { useRouteError } from 'react-router-dom'

const NotFound = () => {

    const error = useRouteError

  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <p>{error.status || error.message}</p>
    </div>
  )
}

export default NotFound
