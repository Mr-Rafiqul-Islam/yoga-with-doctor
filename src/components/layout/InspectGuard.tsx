'use client'; 

import { useEffect } from 'react';

export default function InspectGuard() {
  useEffect(() => {
    // Shudhu production mode-e kaj korbe
    if (process.env.NODE_ENV === 'production') {
      
      // 1. Disable Right Click
      const handleContextMenu = (e: MouseEvent) => e.preventDefault();

      // 2. Disable Keyboard Shortcuts
      const handleKeyDown = (e: KeyboardEvent) => {
        if (
          e.key === 'F12' ||
          (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
          (e.ctrlKey && e.key === 'u')
        ) {
          e.preventDefault();
        }
      };

      // 3. Debugger Loop (Optional kintu powerful)
      const interval = setInterval(() => {
        const start = performance.now();
        debugger;
        if (performance.now() - start > 100) {
          console.clear();
        }
      }, 1000);

      window.addEventListener('contextmenu', handleContextMenu);
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('contextmenu', handleContextMenu);
        window.removeEventListener('keydown', handleKeyDown);
        clearInterval(interval);
      };
    }
  }, []);

  return null; 
}