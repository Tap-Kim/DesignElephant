import React from 'react'

type TypeProps = {
    handleBasicPopup: (e:React.MouseEvent<HTMLButtonElement>) => void
}
function HomePresenter({handleBasicPopup}:TypeProps) {
    return (
        <div>
            <button type="button" className="btn btn-danger" onClick={handleBasicPopup}>테이블 생성</button>
        </div>
    )
}

export default React.memo(HomePresenter)
