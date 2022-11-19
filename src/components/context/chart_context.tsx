import { SelectChangeEvent } from '@mui/material/Select'
import { createContext, useEffect, useState } from 'react'
import { chartContexts, initialValue, Register } from '../types/context'
import moment from 'moment'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

//No contexto sempre criar valores iniciais e declarações de tipo

export const ChartsContext = createContext<chartContexts>(initialValue)
export function ChartProvider(props: any) {
  const [localUser, setLocalUser] = useState(initialValue.localUser)
  const [user, setUser] = useState(initialValue.user)
  const [password, setPassword] = useState(initialValue.password)
  const [password_repeat, setPasswordRepeat] = useState(
    initialValue.password_repeat
  )
  const [typeCall, setTypeCall] = useState(initialValue.typeCall)
  const [typeCanceled, setTypeCanceled] = useState(initialValue.typeCanceled)
  const [calls, setCalls] = useState<Register[]>(initialValue.calls)
  const [info, setInfo] = useState(initialValue.info)
  const [canceladoCOMODATO, setCMD] = useState(initialValue.canceladoCOMODATO)
  const [canceladoBRI, setBRI] = useState(initialValue.canceladoBRI)
  const [badCall, setBadCall] = useState(initialValue.badCall)
  const [retidos, setRetidos] = useState(initialValue.retidos)
  const [PrePago, setPrePago] = useState(initialValue.PrePago)
  const [date, setDate] = useState(initialValue.date)
  const [taxa, setTaxa] = useState(initialValue.taxa)
  const [totalCanceled, setTotalCanceled] = useState(initialValue.totalCanceled)
  const [token, setToken] = useState(initialValue.token)
  const [isAuthenticated, setIsAuthenticated] = useState(
    initialValue.isAuthenticated
  )
  const [transferred, setTransferred] = useState(initialValue.transferred)
  const [loading, setLoading] = useState(initialValue.loading)
  const [dataRegister, setDataRegister] = useState(initialValue.dataRegister)
  const navigate = useNavigate()

  const register: Register = {
    registered_at: moment().format(),
    is_canceled:
      typeCall === 'CANCELADO_COMODATO'
        ? 1
        : typeCall === 'CANCELADO_BRI'
        ? 1
        : 0,
    user_registered: Number(localUser.id),
    typeCall: typeCall,
    typeCanceled: typeCanceled,
    info: info,
    transferred: transferred
  }
  useEffect(() => {
    const loggedIn = localStorage.getItem('localUser')
    // const savedCalls = localStorage.getItem('callsSaved')
    if (loggedIn) {
      const foundUser = JSON.parse(loggedIn)
      // const foundCalls = JSON.parse(savedCalls)
      setToken(foundUser.token)
      setLocalUser(foundUser)
      // getData()
      // foundCalls == null ? setCalls([]) : setCalls(foundCalls)
    }
    // Auxilio para hook assincrono
    setLoading(false)
  }, [token, isAuthenticated])

  useEffect(() => {
    calculateCalls(register.typeCall)
    setTypeCall('')
    setTypeCanceled('')
    setInfo('')
    setTransferred(0)
    console.log(dataRegister)
  }, [calls])

  function handleChangeUser(e: { target: { value: string } }) {
    setUser(e.target.value)
  }
  function handleChangePassword(e: { target: { value: string } }) {
    setPassword(e.target.value)
  }
  function handleChangePasswordRepeat(e: { target: { value: string } }) {
    setPasswordRepeat(e.target.value)
  }
  const handleSubmitRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    await Axios.post('https://apicallcounter.herokuapp.com/user/register', {
      username: user,
      password: password,
      password_repeat: password_repeat
    }).then(response => {
      console.log(response)
    })
  }
  const handleSubmitLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    await Axios.post('https://apicallcounter.herokuapp.com/user/login', {
      username: user,
      password: password
    }).then(res => {
      const loggedUser = {
        id: res.data.user.user_id,
        username: res.data.user.username,
        token: res.data.token
      }
      setToken(loggedUser.token)
      localStorage.setItem('localUser', JSON.stringify(loggedUser))
      if (token) {
        setIsAuthenticated(true)
        navigate('/login')
      } else {
        setLocalUser(loggedUser)
        navigate('/')
      }
    })
    // localUser ? console.log(localUser) : console.log(token)
  }
  const logout = () => {
    setLocalUser({ id: '', username: '', token: '' })
    setIsAuthenticated(false)
    localStorage.removeItem('localUser')
    setToken('')
    navigate('/login')
  }
  function checkTransferred(e: any) {
    e.preventDefault()
    transferred == 0 ? setTransferred(1) : setTransferred(0)
  }
  function handleChange(
    _event: React.MouseEvent<HTMLElement>,
    canceledValue: string
  ) {
    setTypeCall(canceledValue)
  }
  function handleChangeCanceled(event: SelectChangeEvent) {
    setTypeCanceled(event.target.value)
  }
  function handleChangeInfo(event: { target: { value: string } }) {
    setInfo(event.target.value)
  }

  function calcularTaxa(totalCanceled: number) {
    const cancelados = totalCanceled * 100
    const dividendo = calls.length
    const filteredDividendo = calls.filter(call => call.transferred !== 1)

    return setTaxa(cancelados / filteredDividendo.length)
  }

  function calculateCalls(type: string) {
    switch (type) {
      case 'RETIDO':
        const retidoQuantity = calls.filter(calls => {
          return calls.typeCall === 'RETIDO'
        })
        return setRetidos(retidoQuantity.length)
      case 'CANCELADO_BRI':
        const canceledQuantity = calls.filter(calls => {
          return calls.typeCall === 'CANCELADO_BRI'
        })
        setTotalCanceled(prevCanceled => prevCanceled + 1)
        return setBRI(canceledQuantity.length)
      case 'CANCELADO_COMODATO':
        const canceledCMDQuantity = calls.filter(calls => {
          return calls.typeCall === 'CANCELADO_COMODATO'
        })
        setTotalCanceled(prevCanceled => prevCanceled + 1)
        return setCMD(canceledCMDQuantity.length)

      case 'BADCALL':
        const badCallQuantity = calls.filter(calls => {
          return calls.typeCall === 'BADCALL'
        })

        return setBadCall(badCallQuantity.length)

      case 'PRE_PAGO':
        const prePagoQuantity = calls.filter(calls => {
          return calls.typeCall === 'PRE_PAGO'
        })
        return setPrePago(prePagoQuantity.length)
      default:
        break
    }
  }

  async function registerCall(typeCall: string, typeCanceled: string) {
    if (typeCall) {
      setCalls(prevCall => [...prevCall, register])
      setDate(moment().format())
      await Axios.post('https://apicallcounter.herokuapp.com/user/markup', {
        is_canceled:
          typeCall === 'CANCELADO_COMODATO'
            ? 1
            : typeCall === 'CANCELADO_BRI'
            ? 1
            : 0,
        registered_at: date,
        user_registered: localUser.id,
        type_call: typeCall,
        info: info,
        type_canceled: typeCanceled,
        transferred: transferred
      }).then(response => {
        console.log(response.data)
      })
    } else {
      alert('Preencha o tipo da chamada')
    }
    localStorage.setItem('callsSaved', JSON.stringify(calls))
  }

  async function getData(date: string) {
    await Axios.post('https://apicallcounter.herokuapp.com/user/loadregister', {
      user_registered: localUser.id
    })
      .then(function setData(response) {
        const data = response.data
        const dataRegisterCall: Register[] = data.map((calls: any) => {
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

        setDataRegister(filteredCalls)
        setCalls(filteredCalls)
      })
      .finally(() => {
        setLoading(true)
      })
  }
  return (
    <ChartsContext.Provider
      value={{
        isAuthenticated,
        token,
        dataRegister,
        handleChangePasswordRepeat,
        password_repeat,
        handleChangeUser,
        handleChangePassword,
        handleSubmitRegister,
        handleSubmitLogin,
        password,
        user,
        checkTransferred,
        typeCall,
        date,
        calculateCalls,
        calcularTaxa,
        totalCanceled,
        typeCanceled,
        info,
        getData,
        handleChangeCanceled,
        handleChange,
        handleChangeInfo,
        registerCall,
        taxa,
        logout,
        loading,
        calls,
        canceladoCOMODATO,
        canceladoBRI,
        badCall,
        retidos,
        PrePago,
        transferred,
        localUser
      }}
    >
      {props.children}
    </ChartsContext.Provider>
  )
}
