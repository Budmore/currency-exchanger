export enum Direction {
    Out = 'Out',
    In = 'In',
}
export type DirectionType = keyof typeof Direction;

export function reverseDirection(direction?: DirectionType) {
    switch (direction) {
        case Direction.Out:
            return Direction.In;

        case Direction.In:
        default:
            return Direction.Out;
    }
}

export const willExceedBalance = ({
    direction,
    value,
    balance,
}: {
    direction: DirectionType;
    value: number;
    balance: number;
}) => direction === Direction.Out && balance - value < 0;
