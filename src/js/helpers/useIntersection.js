import { useState, useEffect } from "react"
import { setSectionInView } from "../actions/navActions"
import { useDispatch } from "react-redux"

export default function useOnScreen(ref, section) {
  const dispatch = useDispatch()

  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), {
      threshold: 0.55,
    })

    observer.observe(ref.current)

    return () => {
      // Remove the observer as soon as the component is unmounted
      observer.disconnect()
    }
  }, [ref])

  useEffect(() => {
    if (isIntersecting) {
      dispatch(setSectionInView(section))
    }
  }, [isIntersecting, dispatch, section])
}
