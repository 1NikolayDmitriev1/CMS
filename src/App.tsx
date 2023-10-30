import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Tabs from "./components/Tabs";
import tabData from "./tabs.json";
import "./App.css";

const App: React.FC = () => {
  
  const sortedTabs = tabData.sort(
    (a: { order: number }, b: { order: number }) => a.order - b.order
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/CMS/:tabId" element={<Tabs tabs={sortedTabs} />} />
        <Route
          path="/"
          element={<Navigate to={`/CMS/${sortedTabs[0].id}`} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
