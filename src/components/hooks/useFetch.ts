import { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

export function useFetch (url: string){
  const [data, setData] = useState()
  
  useEffect(() => {
 await Axios.post('https://apicallcounter.herokuapp.com/user/loadregister', {
      user_registered: localUser.id
    }).then(response => {
      // localStorage.setItem('callsSaved', JSON.stringify(calls))
      const data = response.data
      const dataRegisterCall: Register[] = data?.map((calls: any) => {
        const getDataCalls = {
          registered_at: calls.registered_at.substr(0, 10),
          is_canceled: calls.is_canceled,
          user_registered: calls.user_registered,
          typeCall: calls.type_call,
          typeCanceled: calls.type_canceled,
          info: calls.info,
          transferred: calls.transferred
        }
        return getDataCalls
      })
      const filteredCalls = dataRegisterCall.filter(
        (dataRegisterCall: Register) => dataRegisterCall.registered_at == date
      )
      // setTotalCanceled(filteredCanceled.length)
      setDataRegister(filteredCalls)
      setCalls(filteredCalls)
    })
  })
}

