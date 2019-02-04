import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'

const Header = () => {
  const [mouse, setMouse] = useState({ x: 400, y: 400 })
  const [screen] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  useEffect(() => {
    document.addEventListener('mousemove', setParalax)
  }, [])

  const setParalax = e => {
    setMouse({ x: e.clientX, y: e.clientY })
  }

  return (
    <Wrapper>
      <TextWrapper
        style={{
          transform: `translate(${(((mouse.x - screen.width / 4) /
            screen.width) *
            100) /
            20}%,${((mouse.y / screen.height) * 100) / 17}vh)`
        }}
      >
        <Subtitle>
          <span style={{ color: 'rgb(239, 83, 80)' }}>Web</span>{' '}
          <span style={{ color: 'rgb(41, 182, 246)' }}>designs</span>{' '}
          <span style={{ color: 'rgb(255, 238, 88)' }}>by</span>
        </Subtitle>
      </TextWrapper>
      <TextWrapper
        style={{
          transform: `translate(${(((mouse.x - screen.width / 4) /
            screen.width) *
            100) /
            17}%,${((mouse.y / screen.height) * 100) / 14}vh)`
        }}
      >
        <Title>Christopher Patty</Title>
      </TextWrapper>
    </Wrapper>
  )
}
export default Header

const Wrapper = styled('header')({
  height: '70vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '@media(max-width: 600px)': {
    height: '40vh'
  }
})

const Title = styled('h1')({
  fontSize: '13vh',
  margin: 0,
  paddingLeft: 10,
  fontWeight: 800,
  lineHeight: 0.8,
  animation: 'fadeUp 800ms',
  animationDelay: '400ms',
  opacity: 0,
  animationFillMode: 'forwards',
  '@media(max-width: 600px)': {
    fontSize: '8vh'
    // paddingLeft: 0
  }
})

const Subtitle = styled('span')({
  fontSize: '7vh',
  color: 'rgb(177, 177, 177)',
  // fontStyle: 'italic',
  fontWeight: 600,
  paddingLeft: 10,
  animation: 'fadeDown 800ms',
  opacity: 0,
  animationFillMode: 'forwards',
  '@media(max-width: 600px)': {
    fontSize: '5vh'
    // paddingLeft: 0
  }
})

const TextWrapper = styled('div')({
  '@media(max-width: 600px)': {
    transform: 'none !important'
  }
})
