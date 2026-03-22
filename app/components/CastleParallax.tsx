"use client"

import { useEffect } from "react"
import gsap from "gsap"

export default function CastleParallax(){

  useEffect(()=>{

    gsap.to(".castle-bg",{
      y:-200,
      scrollTrigger:{
        trigger:".castle-container",
        scrub:true
      }
    })

  },[])

  return(
    <div className="castle-container h-screen relative overflow-hidden">

      <img
        src="/mountains.png"
        className="absolute w-full castle-bg opacity-40"
      />

      <img
        src="/castle.png"
        className="absolute bottom-0 w-full"
      />

    </div>
  )
}