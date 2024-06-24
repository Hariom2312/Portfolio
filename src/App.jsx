import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import { InfinitySpin } from "react-loader-spinner";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center">
          <InfinitySpin color="#f6c400" height={4} />
        </div>
      }
    >
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center">
          <InfinitySpin color="black" height={4} />
        </div>
      ) : (
        <Home/>
      )}
    </Suspense>
    
  );
};

export default App;
