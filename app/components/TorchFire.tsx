"use client"

import Particles from "react-tsparticles"

export default function TorchFire(){

  return(

    <Particles
      options={{
        particles:{
          number:{ value:40 },
          color:{ value:"#ff6a00" },
          size:{ value:3 },
          move:{ speed:2 },
          opacity:{ value:0.8 }
        },
        background:{
          color:"transparent"
        }
      }}
    />

  )
}