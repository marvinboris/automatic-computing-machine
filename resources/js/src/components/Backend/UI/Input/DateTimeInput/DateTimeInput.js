import React, { useState } from 'react';
import { DatetimeInput } from 'react-datetime-inputs';
import moment from 'moment';

const parse = item => item.format('YYYY-MM-DD HH:mm:ss');

export default (props) => {
    const [value, setValue] = useState(moment(props.value));
    const [parsedValue, setParsedValue] = useState(parse(moment()))

    const onChange = value => {
        setValue(value);
        setParsedValue(parse(value));
    };

    return <>
        <div className="h-100 position-relative" style={{ minHeight: 57 }}>
            <DatetimeInput datetime={value} onChange={onChange} className="h-100" />
        </div>

        <input type="hidden" name={props.name} value={parsedValue} />
    </>;
} 