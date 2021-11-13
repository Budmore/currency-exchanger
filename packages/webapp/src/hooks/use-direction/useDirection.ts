import { useState } from 'react';
import {
    Direction,
    DirectionType,
    reverseDirection,
} from '../../utils/direction/direction.util';

export function useDirection(initialDirection?: DirectionType) {
    const [direction, setDirection] = useState(
        initialDirection || Direction.Out
    );
    const directionReversed = reverseDirection(direction);
    const toggleDirection = () => {
        setDirection(directionReversed);
    };

    return {
        direction,
        isDirectionOut: direction === Direction.Out,
        directionReversed,
        toggleDirection,
    };
}
