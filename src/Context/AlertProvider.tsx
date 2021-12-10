import MyAlert, {optionsProps} from "./component/MyAlert"
import React, { createContext, useState } from 'react';

export const AlertState = createContext<any | undefined>(undefined)
type Props = { children: React.ReactNode }
type Children = {
    message? : string,
    options?: optionsProps; 
    render? : boolean
}[]
function AlertProvider({ children }: Props) {
    const [message, setMessage] = useState<Children>([])
    return (
        <div>

        </div>
    );
}

export default AlertProvider;