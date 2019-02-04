import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import Link from './Link'

const Links = () => {
  const links = useRef([])
  useEffect(() => {
    document.addEventListener('mousemove', checkForMouseOut)
  }, [])

  const checkForMouseOut = e => {
    const hovered = [].slice.call(document.querySelectorAll(':hover'))
    const isOut = hovered.find(t => t.tagName === 'A')
    if (!isOut) {
      links.current.forEach(l => l())
    }else{
      const index = isOut.id
      links.current.forEach((unhover, i) => {
        if(index != i){
          unhover()
        }
      })
    }
  }

  return (
    <Wrapper>
      <Link
        index={0}
        getRef={r => (links.current[0] = r)}
        href="https://bitcards.fun"
      >
        Bitcards
      </Link>
      <Link
        index={1}
        getRef={r => (links.current[1] = r)}
        href="https://pattymoods.netlify.com/"
      >
        Many Moods
      </Link>
      <Link
        index={2}
        getRef={r => (links.current[2] = r)}
        href="https://fairdice.netlify.com/"
      >
        Fair Dice
      </Link>
      <Link
        index={3}
        getRef={r => (links.current[3] = r)}
        href="https://dodge.netlify.com/"
      >
        Dodge
      </Link>
      <Link
        index={4}
        getRef={r => (links.current[4] = r)}
        href="https://favoritequotes.netlify.com/"
      >
        Favorite Quotes
      </Link>
      <Link
        index={5}
        getRef={r => (links.current[5] = r)}
        href="https://react-dragtastic.netlify.com/"
      >
        React Dragtastic
      </Link>
      <Link
        index={6}
        getRef={r => (links.current[6] = r)}
        href="https://firststop.sos.nd.gov/"
      >
        ND FirstStop
      </Link>
    </Wrapper>
  )
}
export default Links

const Wrapper = styled('main')({
  padding: 10,
  display: 'flex',
  flexDirection: 'column'
})
