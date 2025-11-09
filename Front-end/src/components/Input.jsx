import React from 'react'

export default function Input({placeholder,value,fun}) {
    return (
        <div>
            <input
                className="form-control"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => { fun(e.target.value) }}
            />
        </div>
    )
}
