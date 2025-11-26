import React from 'react'

export default function Greet({name,increase}) {
  return (
    <div>
        <p onClick={increase}>{name}</p>
    </div>
  )
}
