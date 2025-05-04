import * as React from "react"

const MOBILE_BREAKPOINT = 768
const TABLET_BREAKPOINT = 1180

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

// New hook for device orientation type
export function useDeviceType() {
  const [deviceType, setDeviceType] = React.useState<'portrait' | 'landscape'>('landscape')
  
  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      // Simple orientation check
      if (width < height) {
        setDeviceType('portrait')
      } else {
        setDeviceType('landscape')
      }
    }
    
    window.addEventListener('resize', handleResize)
    handleResize() // Initial check
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return deviceType
}

// Keep the existing breakpoint function for backward compatibility
function useBreakpointImpl() {
  const [breakpoint, setBreakpoint] = React.useState<'mobile' | 'tablet' | 'desktop'>('desktop')
  
  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      
      if (width < MOBILE_BREAKPOINT) {
        setBreakpoint('mobile')
      } else if (width < TABLET_BREAKPOINT) {
        setBreakpoint('tablet')
      } else {
        setBreakpoint('desktop')
      }
    }
    
    window.addEventListener('resize', handleResize)
    handleResize() // Initial check
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return breakpoint
}

export const useBreakpoint = useBreakpointImpl

// Add Nest Hub detection
export function useIsNestHub() {
  const [isNestHub, setIsNestHub] = React.useState(false)
  
  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      // Check for Nest Hub dimensions (approximately)
      const isNestHubSize = (width >= 1020 && width <= 1030 && height >= 595 && height <= 605)
      setIsNestHub(isNestHubSize)
    }
    
    window.addEventListener('resize', handleResize)
    handleResize() // Initial check
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return isNestHub
}
