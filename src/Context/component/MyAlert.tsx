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
        const close = (e:any) => {
          if(e.keyCode === 27){
            onClickMain()
          }
        }
        window.addEventListener('keydown', close)
      return () => window.removeEventListener('keydown', close)
    },[])

    useEffect(() => {
        if (options?.cancelable) {
            setCancel(true)
        }
    }, [options])

    const onClickMain = useCallback(() => {
        setCancel(false)
    }, [])

    const Child = (options: MyAlertProps) => (
        <div className="EPDialog" style={style}>
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
            onHide={() => onClickMain()}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                {/* <Modal.Title></Modal.Title> */}
            </Modal.Header>
            <Modal.Body>
                <MemoChild options={options} />
            </Modal.Body>
        </Modal>
    );
}

export default MyAlert;