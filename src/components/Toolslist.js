import React from 'react'
import Tool from './tool'
import Loading from './Loading'
import logo from '../logo.svg'
import { useGlobalContext } from '../context'

export default function ToolsList() {
  const { toolshub, loading } = useGlobalContext()
  if (loading) {
    return <Loading/>
  }
  if (toolshub.length < 1) {
    return (
      <p className='section-title'>
        Search Toolhub to match your search criteria
      </p>
    )
  }
  return (
    <section className='section'>
        <img src={logo} alt='cocktail db logo' className='logo' />
      <h2 className='section-title'>Wikimedia Toolshub</h2>
      <div className='tools-center'>
        {toolshub.map((item) => {
          return <Tool key={item.name} {...item} />
        })}
      </div>
    </section>
  )
}
