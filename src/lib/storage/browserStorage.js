"use client"

export function storeData(key, value) {
    try {
      return localStorage.setItem(key, value)
    } catch(e) {
      console.error("Storage Error")
      return null
    }
  }
  
  export function getData(key) {
    return localStorage.getItem(key)
  }
  
  export function clearStorage() {
    localStorage.clear()
  }