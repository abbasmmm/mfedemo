import React, { useEffect, useRef, useState } from 'react';
import { mount } from 'mfe1/Mfe1App'

export default function () {
    const ref = useRef()
    useEffect(() => {
        //window.mfe1Mount(ref.current)
        mount(ref.current);
    }, [])

    return <div>
        <div>Hello from Container</div>
        <div ref={ref}></div>
    </div>
}