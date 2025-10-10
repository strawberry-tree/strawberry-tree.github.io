'use client'

import TypingEffect from './TypingEffect'
import { useState } from 'react'

export default function MainTitle() {
  const [showSecondLine, setShowSecondLine] = useState(false)
  const [showThirdPart, setShowThirdPart] = useState(false)
  return (
    <div className="space-y-4">
      <h1 className="min-h-[6rem] text-4xl leading-tight font-bold tracking-tight text-gray-900 sm:min-h-[8rem] sm:text-5xl md:min-h-[10rem] md:text-6xl dark:text-gray-100">
        <TypingEffect
          text="뭔가 만드는 걸 좋아하는"
          delay={80}
          onComplete={() => setShowSecondLine(true)}
        />
        <br />
        {showSecondLine && (
          <>
            <TypingEffect
              text="송상록"
              delay={80}
              className="text-primary-500"
              startDelay={200}
              onComplete={() => setShowThirdPart(true)}
            />
            {showThirdPart && <TypingEffect text="입니다" delay={80} startDelay={100} />}
          </>
        )}
      </h1>
    </div>
  )
}
