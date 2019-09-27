import React, { useReducer, createContext, useContext } from "react"
import userReducer from "../reducers/userReducer"
import { SET_USER, CLEAR_USER, SET_PAGE } from "../constants/context"

const initialState = {
  user: {},
  page: "home",
  clearUser: () => {},
  setUser: () => {},
  setPage: () => {},
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
  const setUser = (fieldName, fieldValue) =>
    dispatch({
      type: SET_USER,
      payload: { fieldName, fieldValue },
    })

  const setPage = page =>
    dispatch({
      type: SET_PAGE,
      payload: page,
    })

  return (
    <UserContext.Provider value={{ ...state, setUser, clearUser, setPage }}>
      {children}
    </UserContext.Provider>
  )
}
