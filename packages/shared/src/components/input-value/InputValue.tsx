import React from 'react';
import styled from 'styled-components';

interface InputValueProps {
    value?: number;
    direction: 'In' | 'Out';
    onChange: (value: number) => void;
}

// @TODO
// - Emulate caret position
// - Add unit tests

export const InputValue: React.FunctionComponent<InputValueProps> = ({
    value = 0,
    direction,
    onChange,
}) => {
    const prefix = !!value && (direction === 'In' ? '+' : '-');

    const changeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const value = +target.value;
        const nextValue = +value.toFixed(2);
        onChange(nextValue);
    };

    return (
        <InputValueRoot>
            <Value>
                {prefix}
                {value}
            </Value>
            <InputHidden
                type="number"
                value={value}
                onChange={changeHandler}
                min={0}
                step={0.01}
            />
        </InputValueRoot>
    );
};

const InputValueRoot = styled.div`
    position: relative;
`;

const Value = styled.div`
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
`;

const InputHidden = styled.input`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    opacity: 0;
`;
