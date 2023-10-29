import React, { lazy } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Tab } from "../types";

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTab = tabs.find((tab: Tab) => tab.id === tabId) || tabs[0];

  const Component = lazy(() => import(`./tabs/${selectedTab.path}`));

  return (
    <div>
      <nav className="tabs">
        {tabs.map((tab: Tab) => (
          <NavLink
            key={tab.id}
            to={`/${tab.id}`}
            className={
              selectedTab.id === tab.id
                ? "tab-link tab-link.active"
                : "tab-link"
            }
          >
            {tab.title}
          </NavLink>
        ))}
      </nav>

      <React.Suspense fallback={<div>Loading...</div>}>
        <Component tab={selectedTab}></Component>
      </React.Suspense>
    </div>
  );
};

export default Tabs;
