import React from 'react'
import MarqueeComponent from '../components/MarqueeComponent'
import Animation from '../components/Animation'
import Anim from '../components/Anim'
export default function Home() {
  return (
    <div>
      <MarqueeComponent/>
      <div className="flex justify-between items-center">
        <div className="flex-1">
        <Animation />
        </div>
        <Anim/>
      </div>
    </div>

  );
}
