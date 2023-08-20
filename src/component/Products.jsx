import React from 'react'
import { Fade } from "../../node_modules/react-awesome-reveal";

export default function Products({header, subtitle}) {
  return (
    <div>
        <Fade>
        <h1 className='text-center text-5xl mt-10' >{header}</h1>
        </Fade>

    </div>
  )
}
