import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import { tools } from './tools'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [toolshub, setTools] = useState([])

  const fetchTools = useCallback( async () => {
    setLoading(true)
    try {
      // const { tools } = tools
      if (tools) {
      const newtool = tools.filter((item) => {
        return item.name.toLowerCase().startsWith(searchTerm)
      })
        // const newtool = await tools.map((item) => {
        //   item.name.toLowerCase().startsWith(searchTerm)
        // const { name, id, username, email } = item  
        //   return {
        //     name: name,
        //     id: id,
        //     username: username,
        //     email: email,
        //   }
        // })
        setTools(newtool)
      } else {
        setTools([])
      }

      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[searchTerm])
  useEffect(() => {
    fetchTools()
  }, [searchTerm,fetchTools])
  return (
    <AppContext.Provider
      value={{ loading, toolshub, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
