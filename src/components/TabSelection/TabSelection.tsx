import { useState } from 'react'
import './TabSelection.scss'
import {type TabSelectionProps, type ActiveTab } from './TabSelection.types'
import Bookmarking from '../TabContents/Bookmarking';
import { Searching } from '../TabContents/Searching';
import Sharing from '../TabContents/Sharing';

// Content for each Tab
const TABS: ActiveTab[] =["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];


// Content for each tab
const TAB_CONTENT ={
    "Simple Bookmarking": (
        <div>
            <Bookmarking/>
        </div>
    ),
    "Speedy Searching": (
        <div>
            <Searching/>
        </div>
    ),
    "Easy Sharing": (
        <div>
            <Sharing/>
        </div>
    )
}
const TabSelection = ({active = "Simple Bookmarking"}: TabSelectionProps) => {
    const [activeTab, setActiveTab] = useState<ActiveTab>(active);
  return (
    <div className='tabs'>
        <div className="tabs__selection">
            {TABS.map((tab)=> (
                <div 
                    key={tab}
                    className={`tabs__tab ${activeTab === tab ? "tabs__tab--active": "" }`}
                    onClick={()=> setActiveTab(tab)}
                >
                    {tab}
                </div>
            ))}
        </div>
        {/* Tab content */}
        <div className='tab-content'>
            {TAB_CONTENT[activeTab]}
        </div>
    </div>
  )
}

export default TabSelection