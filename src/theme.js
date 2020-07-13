import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#f4d192',
            main: '#c0a064',
            dark: '#8e7238'
        },
        secondary: {
            light: '#9a9896',
            main: '#6c6a68',
            dark: '#413f3e'
        },
        textPrimary: {
            light: '#555250',
            main: '#2c2a28',
            dark: '#000000'
        },
        textSecondary: {
            light: '#9a9896',
            main: '#6c6a68',
            dark: '#413f3e'
        }
    }
})