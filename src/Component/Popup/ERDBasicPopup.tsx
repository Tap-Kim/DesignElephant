import React, { useState } from 'react'
import { Modal, Button, Dropdown, DropdownButton, Form } from 'react-bootstrap'
import produce from 'immer'

import { DB_TYPE_LIST, RELATION_TYPE_LIST } from '@/Enums/enums'
import { BasicInfo } from '@/model/common.interface'

function ERDBasicPopup(props: any) {
    const [basicInfo, setBasicInfo] = useState<BasicInfo>({})
    const { isERDBasicPopup, setIsRDBasicPopup } = props
    
    let { dbType = DB_TYPE_LIST[0], erdName = "", erdSize1 = null, erdSize2 = null, relationLineNotionType = RELATION_TYPE_LIST[0], dbName = "", tableColor = ""} = basicInfo

    const handleSetBasicInfo = (type: string, value: string | number) => {
        console.log(type, value)
        setBasicInfo(produce(basicInfo, (draft: any) => { draft[type] = value }))
    }

    return (
        <Modal
            show={isERDBasicPopup}
            onHide={setIsRDBasicPopup}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>ERD 기본 설정</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* top Layout */}
                <div>
                    <strong>ERD 기본 정보를 설정하세요</strong>
                    <div>
                        <div style={box}>
                            <span style={{width: '140px'}}>데이터베이스 타입</span>
                            <DropdownButton id="dropdown-item-button" variant="secondary" size="sm" title={dbType}>
                                {DB_TYPE_LIST.map((d: string) => <Dropdown.Item key={d} eventKey={d} onClick={() => handleSetBasicInfo("dbType", d)}>{d}</Dropdown.Item>)}
                            </DropdownButton>
                        </div>
                        <div style={box}>
                            <span style={{width: '210px'}}>ERD 이름</span>
                            <Form.Control
                                type="text"
                                name="erdName"
                                size="sm"
                                value={erdName}
                                onChange={e => handleSetBasicInfo("erdName", e.target.value)}
                            />
                        </div>
                        <div style={box}>
                            <span style={{width: '100%'}}>ERD 크기</span>
                            <Form.Control
                                type="text"
                                name="erdSize1"
                                size="sm"
                                value={Number(erdSize1)}
                                onChange={e => handleSetBasicInfo("erdSize1", e.target.value)}
                            />
                            X
                            <Form.Control
                                type="text"
                                name="erdSize2"
                                size="sm"
                                value={Number(erdSize2)}
                                onChange={e => handleSetBasicInfo("erdSize2", e.target.value)}
                            />
                        </div>
                        <div style={box}>
                            <span style={{width: '210px'}}>관계선 표기법</span>
                            <DropdownButton id="dropdown-item-button" variant="secondary" size="sm" title={relationLineNotionType}>
                                {RELATION_TYPE_LIST.map((d: any) => <Dropdown.Item key={d.txt} eventKey={d.txt} onClick={() => handleSetBasicInfo("relationLineNotionType", d.txt)}>{d.txt}</Dropdown.Item>)}
                            </DropdownButton>
                        </div>
                    </div>
                </div>
                {/* bottom layout */}
                <div>

                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={setIsRDBasicPopup}>Close</Button>
                <Button variant="primary" onClick={setIsRDBasicPopup}>Ok</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ERDBasicPopup

const box = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '5px',
    width: '100%'
}

const boxTxt = {
    width:'200px'
}