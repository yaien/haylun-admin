import { useState } from "react"

export const useForm = (preloaded = {}) => {
  const [data, setData] = useState(preloaded)

  const input = (name, type = String) => e => setData({ ...data, [name]: type(e.target.value) })

  const value = name => data[name] || ""

  const wrapSubmit = handler => e => {
    e.preventDefault()
    if (handler) {
      handler(data)
    }
  }

  return { input, value, data, wrapSubmit }
}

export default useForm
