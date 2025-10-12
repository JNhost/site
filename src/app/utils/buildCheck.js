import { useEffect } from 'react';

/**
 * Custom hook to check for new builds and prompt user to refresh
 * Compares current build ID with server build ID
 */
export function useBuildCheck(checkInterval = 5 * 60 * 1000) { // Check every 5 minutes
  useEffect(() => {
    let currentBuildId = process.env.NEXT_PUBLIC_BUILD_ID;
    
    const checkForNewBuild = async () => {
      try {
        const response = await fetch('/build-info.json', {
          cache: 'no-cache',
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
          },
        });
        
        if (response.ok) {
          const buildInfo = await response.json();
          
          // If build ID changed, notify user
          if (buildInfo.buildId && currentBuildId && buildInfo.buildId !== currentBuildId) {
            console.log('🔄 New build detected! Current:', currentBuildId, 'New:', buildInfo.buildId);
            
            // Show notification or prompt
            if (window.confirm('A new version is available! Refresh to get the latest updates?')) {
              window.location.reload();
            }
          }
        }
      } catch (error) {
        // Silently fail - don't disrupt user experience
        console.debug('Build check failed:', error.message);
      }
    };

    // Check immediately on mount
    checkForNewBuild();
    
    // Set up interval check
    const intervalId = setInterval(checkForNewBuild, checkInterval);
    
    return () => clearInterval(intervalId);
  }, [checkInterval]);
}

/**
 * Component to display build info in development
 */
export function BuildInfo() {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 bg-gray-900/90 text-white px-3 py-2 rounded-lg text-xs z-50">
      Build: {process.env.NEXT_PUBLIC_BUILD_ID?.slice(-8)}
    </div>
  );
}
