import MyAlert, { optionsProps } from "./component/MyAlert"
import React, { createContext, useCallback, useMemo, useState } from 'react';

export const MessageState = createContext<any | undefined>(undefined)
type Props = { children: React.ReactNode }
type Children = {
    message?: string,
    callBack?: any,
    options?: optionsProps,
    render?: boolean
}
function MessageContextProvider({ children }: Props) {
    const [messages, setMessages] = useState<Children>()
    const initalOptions = useMemo(() => ({
        position: { bottomRight: true, bottomLeft: false },
        info: { success: false, warn: false, normal: true },
        timeOut: 3500,
        cancelable: true
    }), [])

    const messaging = useCallback((text: string, callBack?: any, option?: optionsProps) => {
        const newOption = {
            cancelable: option?.cancelable || initalOptions?.cancelable,
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
        setMessages({...messages, message: text, callBack, options: newOption })
    }, [initalOptions])

    return (
        <MessageState.Provider value={messaging}>
            {children}
            <MyAlert text={messages?.message} options={messages?.options} />
        </MessageState.Provider>
    );
}

export default MessageContextProvider;