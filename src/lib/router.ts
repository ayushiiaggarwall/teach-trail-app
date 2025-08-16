import { useNavigate, useSearchParams } from 'react-router-dom'

// Replace Next.js useRouter with React Router useNavigate
export const useRouter = () => {
  const navigate = useNavigate()
  return {
    push: (path: string) => navigate(path),
    replace: (path: string) => navigate(path, { replace: true }),
    back: () => navigate(-1),
    forward: () => navigate(1),
    refresh: () => window.location.reload(),
  }
}

// Export useSearchParams for components that need it
export { useSearchParams }

// Mock redirect function for components that use it
export const redirect = (path: string) => {
  window.location.href = path
}
