import React from 'react'
import { TopScreen } from '../components/TopScreen'
import { RecentWorks } from '../components/RecentWorks';
import { WorkTypes } from '../components/WorkTypes';
import { BottomScreen } from '../components/BottomScreen';

export const HomePage = () => {
    const ref = React.createRef();
    const handleClick = () => {
        ref.current.scrollIntoView({block: "start", behavior: "smooth"});
    }

    return(
        <>
            <TopScreen click={handleClick} />
            <RecentWorks ref={ref} />
            <WorkTypes />
            <BottomScreen />
        </>
    )
}