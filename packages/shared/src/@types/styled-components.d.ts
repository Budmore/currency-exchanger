import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
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
        bgColorDark?: string;
        bgColorDarker?: string;
        accent?: string;
        accentHover?: string;
    }

    interface Status {
        critical: string;
        success: string;
        warning: string;
    }
}
