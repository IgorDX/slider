import React from 'react'
import api from './api'
import refreshToken from './api'

export const Axios = () => {
  return (
    <>
        <button onClick={refreshToken}>Refresh token</button>
    </>
  )
}
