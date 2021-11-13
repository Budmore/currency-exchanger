import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        animation: ObjectType;
        colors: {
            brand: ColorSet;
            default: ColorSet;
        };
        status: Status;
        layout: ObjectType;
        zIndexes: ObjectType;
    }

    type ObjectType = Record<string, string | number>;

    interface ColorSet {
        primaryText?: string;
        secondaryText?: string;
        bgColor?: string;
        accent?: string;
    }

    interface Status {
        critical: string;
        success: string;
        warning: string;
    }
}
