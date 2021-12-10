import React, { useState } from 'react';
type MyAlertProps = {
    text: string,
    options?: any,
    style?: any
}

function MyAlert({ text, options, style }: MyAlertProps) {
    const [cancel, setCancel] = useState(false)
    
    return (
        <div>

        </div>
    );
}

export default MyAlert;