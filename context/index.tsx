import React from 'react'
import { Context } from "@apollo/client";
import { useState } from "react";
import { createContext } from "react";
import { useReducer } from 'react';

const reducer = (state: any, actions: any) => {
  switch (actions.type) {
    case 'FALSE':
      return {
        ...state,
        value: false
      }
    case 'TRUE':
      return {
        ...state,
        value: true
      }
    case 'USER_DATA':
      return {
        ...state,
        userData: actions.payload
      }

    default:
      return { ...state }
      break;
  }
}


export const UserModal = createContext<any>(false)

export const UserModalContext = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    value: false,
    userData: null,
  });

  const openModal = () => {
    console.log('called')
    dispatch({
      type: 'TRUE'
    });
  }
  const closeModal = () => dispatch({
    type: 'FALSE',
  });

  const setUserData = (args: any) => {

    console.log('user data ---->>>>>>>> ', args)

    return dispatch({
      type: 'USER_DATA',
      payload: args
    })
  }

  return (
    <UserModal.Provider value={{ openModal, closeModal, setUserData, state }}>
      {children}
    </UserModal.Provider>
  )
}