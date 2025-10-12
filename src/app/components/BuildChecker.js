'use client';
import { useEffect } from 'react';

/**
 * Client-side component to check for new builds
 * Wrapped in its own client component to keep layout.js as server component
 */
export default function BuildChecker() {
  useEffect(() => {
    let currentBuildId = null;
    
    // Get initial build ID
    const getInitialBuildId = async () => {
      try {
        const response = await fetch('/build-info.json', {
          cache: 'no-cache',
        });
        if (response.ok) {
          const buildInfo = await response.json();
          currentBuildId = buildInfo.buildId;
          console.log('🔧 Current build:', currentBuildId);
        }
      } catch (error) {
        console.debug('Could not fetch initial build info');
      }
    };

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
          if (currentBuildId && buildInfo.buildId && buildInfo.buildId !== currentBuildId) {
            console.log('🔄 New build detected!');
            console.log('   Current:', currentBuildId);
            console.log('   New:', buildInfo.buildId);
            
            // Create notification element
            const notification = document.createElement('div');
            notification.innerHTML = `
              <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                color: white;
                padding: 16px 24px;
                border-radius: 12px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.3);
                z-index: 99999;
                font-family: system-ui, -apple-system, sans-serif;
                max-width: 350px;
                animation: slideIn 0.3s ease-out;
              ">
                <div style="display: flex; align-items: center; gap: 12px;">
                  <div style="font-size: 24px;">🚀</div>
                  <div>
                    <div style="font-weight: 600; margin-bottom: 4px;">New Version Available!</div>
                    <div style="font-size: 14px; opacity: 0.9;">Refresh to get the latest updates</div>
                  </div>
                </div>
                <button onclick="window.location.reload()" style="
                  margin-top: 12px;
                  width: 100%;
                  padding: 8px;
                  background: rgba(255,255,255,0.2);
                  border: 1px solid rgba(255,255,255,0.3);
                  border-radius: 6px;
                  color: white;
                  font-weight: 600;
                  cursor: pointer;
                  transition: all 0.2s;
                " onmouseover="this.style.background='rgba(255,255,255,0.3)'" onmouseout="this.style.background='rgba(255,255,255,0.2)'">
                  Refresh Now
                </button>
              </div>
              <style>
                @keyframes slideIn {
                  from {
                    transform: translateX(400px);
                    opacity: 0;
                  }
                  to {
                    transform: translateX(0);
                    opacity: 1;
                  }
                }
              </style>
            `;
            
            document.body.appendChild(notification);
            
            // Update current build ID
            currentBuildId = buildInfo.buildId;
          }
        }
      } catch (error) {
        console.debug('Build check failed:', error.message);
      }
    };

    // Get initial build ID
    getInitialBuildId();
    
    // Check for new builds every 3 minutes
    const intervalId = setInterval(checkForNewBuild, 3 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  // Show build ID in development
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed bottom-4 left-4 bg-gray-900/90 text-white px-3 py-2 rounded-lg text-xs z-50 backdrop-blur-sm">
        🔧 Dev Mode
      </div>
    );
  }

  return null;
}
