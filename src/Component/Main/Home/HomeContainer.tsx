import ERDBasicPopup from '@/Component/Popup/ERDBasicPopup'
import React, { useCallback, useState } from 'react'
import HomePresenter from './HomePresenter'

function HomeContainer() {
    const [isERDBasicPopup, setIsRDBasicPopup] = useState(false);

    const handleBasicPopup = useCallback(e => {
        e.preventDefault();
        setIsRDBasicPopup(prev => !prev)
    }, [])

    const propsData = {
        isERDBasicPopup, handleBasicPopup
    }
    return <>
        <HomePresenter {...propsData}/>

        {/* 팝업 영역 */}
        {isERDBasicPopup && <ERDBasicPopup {...propsData}/>}
    </>
}

export default HomeContainer
