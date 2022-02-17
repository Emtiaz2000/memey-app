import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <h1>Home</h1>
    <Link to='/connect-wallet'> go connect wallet page</Link><br/>
    <Link to='/generate-meme'>Go to meme generator</Link>
    </>
  )
}
