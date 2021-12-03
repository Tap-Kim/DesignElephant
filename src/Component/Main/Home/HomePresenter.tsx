import React from 'react'

function HomePresenter(props: any) {
    const {setIsRDBasicPopup} = props
    return (
        <div>
            <button type="button" className="btn btn-danger" onClick={setIsRDBasicPopup}>테이블 생성</button>
        </div>
    )
}

export default HomePresenter
