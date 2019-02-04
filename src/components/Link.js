import React, { useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import shortid from 'shortid'

const colors = [
  // 'rgb(78, 78, 78)',
  'rgb(239, 83, 80)',
  // 'rgb(171, 71, 188)',
  'rgb(41, 182, 246)',
  // 'rgb(156, 204, 101)',
  'rgb(255, 238, 88)'
  // 'rgb(255, 167, 38)'
]

const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
}

const Link = ({ children, href, getRef, index }) => {
  const [hovered, setHovered] = useState(false)
  const [seed, setSeed] = useState(Math.random())
  const timer = useRef(null)
  const id = useRef(shortid.generate())

  useEffect(() => {
    getRef(unHover)
  })

  useEffect(
    () => {
      if (hovered) {
        timer.current = setInterval(() => {
          setSeed(Math.random())
        }, 150)
      } else {
        clearInterval(timer.current)
      }
      return () => {
        clearInterval(timer.current)
      }
    },
    [hovered]
  )

  const unHover = () => {
    if(hovered){
      setHovered(false)
    }
  }

  const getBolded = () => {
    const arr = children.split('').map((c, i) => {
      const rand = Math.random()
      const color = colors[getRandomInt(0, colors.length)]
      if (rand < 0.33) {
        return (
          <strong style={{ color }} key={i}>
            {c}
          </strong>
        )
      }
      if (rand < 0.66) {
        return (
          <i style={{ color }} key={i}>
            {c}
          </i>
        )
      }
      return (
        <span style={{ color }} key={i}>
          {c}
        </span>
      )
    })

    return arr
  }

  return (
    <Wrapper
      onMouseEnter={unHover}
      className='fadeUp'
      style={{animationDelay: `${(index * 100) + 1000}ms`}}
    >
      <A
        id={index}
        key={id.current}
        onMouseEnter={e => {
          e.stopPropagation()
          setHovered(true)
        }}
        onMouseLeave={e => {
          e.stopPropagation()
          setHovered(false)
        }}
        href={href}
        target="_blank"
        rel="noopener"
      >
        {hovered ? getBolded() : children}
      </A>
    </Wrapper>
  )
}
export default Link

const Wrapper = styled('div')({
  padding: 25,
  paddingLeft: 0,
  animation: 'fadeUp 500ms',
  opacity: 0,
  animationFillMode: 'forwards'
})

const A = styled('a')({
  fontSize: '10vh',
  textDecoration: 'none',
  color: 'currentColor',
  lineHeight: .8
})
