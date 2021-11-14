import { ChangeEvent, FC } from 'react';
import styled, { css } from 'styled-components';

interface InputValueProps {
    value?: number;
    direction: 'In' | 'Out';
    onChange: (value: number) => void;
}

export const InputValue: FC<InputValueProps> = ({
    value,
    direction,
    onChange,
}) => {
    const prefix = !!value && (direction === 'In' ? '+' : '-');
    const changeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
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

const fontStyles = css`
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    text-align: right;
`;

const Value = styled.div`
    ${fontStyles}
`;

const InputHidden = styled.input`
    ${fontStyles}
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }
`;
