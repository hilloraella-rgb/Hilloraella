import { useEffect } from 'react'

export default function Toast({ toast, onDone }) {
  useEffect(() => {
    if (!toast) return undefined
    const t = setTimeout(onDone, 4200)
    return () => clearTimeout(t)
  }, [toast, onDone])

  if (!toast) return null
  return (
    <div className={`toast ${toast.tone === 'error' ? 'toast--error' : ''}`} role="status" aria-live="polite">
      {toast.msg}
    </div>
  )
}
