import { createTheme } from '@mui/material/styles';

// Define colours to be used throughout the app
export const COLORS = {
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    RED: '#FF0000'
};

// Define font styles to be used throughout the app
export const FONT = {
    // Define available font-families to be used throughout the app
    FAMILY: {
        OPEN_SANS: ['sans-serif'].join(',')
    },
    WEIGHT: {},
    // Define font sizes that would be used throughout the app in rem
    // the numbers on the left indicates the px equivalent of the rem values
    SIZES: {}
};

/**
 * Base theme allows us to make use of options that are provided by default MUI
 * and custom spacing declaration
 */
export const theme = createTheme();
