import { useEffect, useReducer, useState } from 'react'
import countReducer from '../../utils/reducer'

const pinkRGB = `rgb(236, 72, 153)`
const initialCount =  0

export default function Counter() {
  const [currentColor, setCurrentColor] = useState(pinkRGB)
  const [count, dispatch] = useReducer(countReducer, initialCount)

  useEffect(() => {
    if (count === 0) {
      setCurrentColor(pinkRGB)
    }

    if (count > 0) {
      setCurrentColor(`rgb(52, 211, 153)`)
    }

    if (count < 0) {
      setCurrentColor(`rgb(239, 68, 68)`)
    }
  }, [count])

  const increment = () => {
    dispatch({
      type: 'increment',
      count
    });
  }

  const decrement = () => {
    dispatch({
      type: 'decrement',
      count
    });
  }

  const reset = () => {
    dispatch({
      type: 'reset',
      count
    });
  }

  return (
    <main className="bg-black bg-opacity-90 min-h-screen flex flex-col items-center justify-center text-4xl text-pink-500">
      <h1 className="mb-5" style={{ color: currentColor }}>
        {count}
      </h1>
      <div className="flex w-1/2 justify-around">
        <button
          className="text-green-400 border-2 border-green-400 p-3"
          type="button"
          onClick={increment}
          aria-label="increment"
        >
          Increment
        </button>
        <button
          className="text-red-500 border-2 border-red-500 p-2"
          type="button"
          onClick={decrement}
          aria-label="decrement"
        >
          Decrement
        </button>
        <button
          className="text-pink-500 border-2 border-pink-500 p-2"
          type="button"
          aria-label="reset"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </main>
  )
}
