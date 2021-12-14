import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Modal, Button, Dropdown, DropdownButton, Form } from 'react-bootstrap'

type MyAlertProps = {
    text?: string,
    callBack?: any,
    options?: any,
    style?: any,
    cancle?: boolean
}

function MyAlert({ text, options, style }: MyAlertProps) {
    const [animation, setAnimation] = useState(false)
    const [cancel, setCancel] = useState(false)

    useEffect(() => {
        // if (options?.timeOut) {
        //     setTimeout(() => { setAnimation(true) }, options?.timeOut)
        //     setTimeout(() => { setCancel(true) }, options?.timeOut + 1000)
        // }

        if (options?.cancelable) {
            // setCancel(false)
            // setTimeout(() => { setCancel(true) }, 100)
            setCancel(true)
        }
    }, [options])

    const onClickMain = useCallback(() => {
        if (options?.cancelable) {
            
            setCancel(true)
            // setAnimation(true)
            // setTimeout(() => { setCancel(true) }, 1000)
            
        }
    }, [])

    // const themeMemo = useMemo(() => {
    //     return { options, timeOut: { animation, cancel } }
    // }, [options, cancel, animation])

    console.log(cancel)

    // if(cancel === true){
    //     return <></>
    // }

    const Child = (options: MyAlertProps) => (
        <div className="EPDialog" style={style} onClick={onClickMain}>
            <div>
                {options?.info?.success ? text + "⭕" :
                    options?.info?.warn ? text + "❌" :
                        text + "😀"}
            </div>
        </div>)

    const MemoChild = React.memo(Child)

    return (
        <Modal
            show={cancel}
            onHide={() => setCancel(false)}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                {/* <Modal.Title></Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
                <MemoChild options={options}/>
            </Modal.Body>
        </Modal>
    );
}

export default MyAlert;