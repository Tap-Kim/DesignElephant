import MyAlert, { optionsProps } from "./component/MyAlert"
import React, { createContext, useCallback, useMemo, useState } from 'react';

export const MessageState = createContext<any | undefined>(undefined)
type Props = { children: React.ReactNode }
type Children = {
    message?: string,
    options?: optionsProps,
    render?: boolean
}[]
function MessageContextProvider({ children }: Props) {
    const [messages, setMessages] = useState<Children>([])
    const initalOptions = useMemo(() => ({
        position: { bottomRight: true, bottomLeft: false },
        info: { success: false, warn: false, normal: true },
        timeOut: 3500,
        cancelable: true
    }), [])

    const messaging = useCallback((text: string, option?: optionsProps) => {
        const newOption = {
            cnacelable: option?.cancelable || initalOptions?.cancelable,
            info: {
                normal: option?.info?.normal || initalOptions?.info?.normal,
                success: option?.info?.success || initalOptions?.info.success,
                warn: option?.info?.warn || initalOptions?.info.warn
            },
            position: {
                bottomRight: option?.position?.bottomRight || initalOptions?.position?.bottomRight,
                bottomLeft: option?.position?.bottomLeft || initalOptions?.position?.bottomLeft
            },
            timeOut: option?.timeOut || initalOptions?.timeOut
        }
        setMessages(prev => [...prev, { message: text, options: newOption }])
    }, [initalOptions])
    return (
        <MessageState.Provider value={messaging}>
            {children}
            {messages.map((v:any) => (<MyAlert key={v} text={v?.message} options={v?.options} />))}
        </MessageState.Provider>
    );
}

export default MessageContextProvider;