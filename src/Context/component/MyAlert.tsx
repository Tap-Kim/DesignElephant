import React, { useCallback, useEffect, useMemo, useState } from 'react';
type MyAlertProps = {
    text?: string,
    options?: any,
    style?: any
}

function MyAlert({ text, options, style }: MyAlertProps) {
    const [animation, setAnimation] = useState(false)
    const [cancel, setCancel] = useState(false)

    useEffect(() => {
        if (options?.timeOut) {
            setTimeout(() => { setAnimation(true) }, options?.timeOut)
            setTimeout(() => { setCancel(true) }, options?.timeOut + 1000)
        }
    }, [options])

    const onClickMain = useCallback(() => {
        if (options?.cancelable) {
            setAnimation(true)
            setTimeout(() => { setCancel(true) }, 1000)
        }
    }, [])

    const themeMemo = useMemo(() => {
        return { options, timeOut: { animation, cancel } }
    }, [options, cancel, animation])

    if(cancel === true){
        return <></>
    }

    return (
        <div style={style} onClick={onClickMain} theme={themeMemo}>
            <div>
                {options?.info?.success ? text + "⭕" :
                 options?.info?.warn ? text + "❌" :
                 text + "😀"}
            </div>
        </div>
    );
}

export default MyAlert;