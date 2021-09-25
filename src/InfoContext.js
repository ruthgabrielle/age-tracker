import { createContext } from "react";
import { useCallback, useEffect, useState} from "react";
import { api } from "./services/api";


export const InfoContext = createContext([]);

export function InfoProvider (props) {
  const [infos, setInfos] = useState([])

  const fetchInfos = useCallback(() => {
    api.get('/infos')
    .then((response) => {
    setInfos(response.data.infos)})
  }, [])

  useEffect(() =>{
    fetchInfos()
  }, [fetchInfos])

  async function createInfo(firstName, age){
    
    const data = {firstName, age}

      const response = await api.post('/infos', data)
      const { info } = response.data

      setInfos([
          ...infos, 
          info
      ])
  }
  return (
      <InfoContext.Provider value={{infos, createInfo}}>
          {props.children}
      </InfoContext.Provider>
  )
}
