import React, { useReducer, createContext, useContext } from "react"
import userReducer from "../reducers/userReducer"
import {
  SET_USER,
  CLEAR_USER,
  SET_PAGE,
  CLEAR_TEMP_USER,
  SET_TEMP_USER,
} from "../constants/context"

var storage = (function() {
  var uid = new Date()
  var storage
  var result
  try {
    ;(storage = window.localStorage).setItem(uid, uid)
    result = storage.getItem(uid) == uid
    storage.removeItem(uid)
    return result && storage
  } catch (exception) {}
})()

let initialState = {
  user: {
    username: "",
    email: "",
    password: "",
    loggedIn: false,
  },
  tempUser: {},
  page: "home",
  clearUser: () => {},
  clearTempUser: () => {},
  setUser: () => {},
  setTempUser: () => {},
  setPage: () => {},
}

if (storage) {
  initialState = {
    user: {
      username: localStorage.getItem("username") || "",
      email: localStorage.getItem("email") || "",
      password: localStorage.getItem("password") || "",
      loggedIn: localStorage.getItem("loggedIn") || false,
    },
    tempUser: {},
    page: "home",
    clearUser: () => {},
    clearTempUser: () => {},
    setUser: () => {},
    setTempUser: () => {},
    setPage: () => {},
  }
}

const UserContext = createContext(initialState)
export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState)

  const clearUser = () =>
    dispatch({
      type: CLEAR_USER,
      payload: {},
    })
  const clearTempUser = () =>
    dispatch({
      type: CLEAR_TEMP_USER,
      payload: {},
    })
  const setUser = user =>
    dispatch({
      type: SET_USER,
      payload: user,
    })
  const setTempUser = (fieldName, fieldValue) =>
    dispatch({
      type: SET_TEMP_USER,
      payload: { fieldName, fieldValue },
    })

  const setPage = page =>
    dispatch({
      type: SET_PAGE,
      payload: page,
    })

  return (
    <UserContext.Provider
      value={{
        ...state,
        setUser,
        setTempUser,
        clearUser,
        clearTempUser,
        setPage,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
