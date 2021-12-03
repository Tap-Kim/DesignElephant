import ERDBasicPopup from '@/Component/Popup/ERDBasicPopup'
import React, { useState } from 'react'
import HomePresenter from './HomePresenter'

function HomeContainer() {
    const [isERDBasicPopup, setIsRDBasicPopup] = useState(false);

    const propsData = {
        isERDBasicPopup, setIsRDBasicPopup
    }
    return <>
        <HomePresenter {...propsData}/>

        {/* 팝업 영역 */}
        {isERDBasicPopup && <ERDBasicPopup {...propsData}/>}
    </>
}

export default HomeContainer
