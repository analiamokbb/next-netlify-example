import React from 'react'
import axios from 'axios'

export const Test: React.FC<any> = () => {

  axios.get('/api/test')
    .then(({ data }) => {
      console.log(data)
    })
    .catch(err => {
      console.error(err)
    })

  return (
    <>
      Hello this is a test
    </>
  )
}
