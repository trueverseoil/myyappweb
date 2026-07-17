import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

export const VisitorCounter: React.FC<{ 
  className?: string;
  showIcon?: boolean;
  prefix?: string;
  suffix?: string;
  minimal?: boolean;
}> = ({ 
  className = "", 
  showIcon = true,
  prefix = "Trusted by",
  suffix = "Visitors Across India 🇮🇳",
  minimal = false
}) => {
  const [count, setCount] = useState<number>(12458);

  useEffect(() => {
    // ------------------------------------------------------------------
    // FIREBASE IMPLEMENTATION GUIDE
    // ------------------------------------------------------------------
    // 1. Initialize Firebase in a separate utility file.
    // 2. Use the following logic to increment and fetch:
    /*
      const visitorRef = doc(db, "analytics", "visitors");
      // Increment securely on server
      await updateDoc(visitorRef, { count: increment(1) });
      // Fetch new count
      const snap = await getDoc(visitorRef);
      setCount(snap.data().count);
    */
    // ------------------------------------------------------------------

    // SIMULATION FOR DEMO:
    const storedCount = localStorage.getItem('myyapp_visitor_count');
    let currentCount = storedCount ? parseInt(storedCount) : 12458;
    
    // Simulate "live" increment only once per session
    if (!sessionStorage.getItem('session_visited')) {
      currentCount += Math.floor(Math.random() * 3) + 1;
      localStorage.setItem('myyapp_visitor_count', currentCount.toString());
      sessionStorage.setItem('session_visited', 'true');
    }

    setCount(currentCount);
  }, []);

  if (minimal) {
    return (
      <span className={`font-bold tabular-nums ${className}`}>
        {count.toLocaleString('en-IN')}
      </span>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm transition-all hover:scale-105 ${className}`}>
      {showIcon && <Eye className="h-4 w-4 animate-pulse" />}
      <span className="text-sm font-medium">
        {prefix} <span className="font-bold tabular-nums">{count.toLocaleString('en-IN')}+</span> {suffix}
      </span>
    </div>
  );
};