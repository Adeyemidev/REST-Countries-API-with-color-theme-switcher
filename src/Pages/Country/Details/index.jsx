import React from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {

    const param = useParams()
    const {id} = param
    console.log(id);
  return (
    <div>
        item{id}
    </div>
  )
}
