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
    <BrowserRouter basename="/CMS">
      <Routes>
        <Route path="/:tabId" element={<Tabs tabs={sortedTabs} />} />
        <Route
          path="/"
          element={<Navigate to={`/${sortedTabs[0].id}`} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
