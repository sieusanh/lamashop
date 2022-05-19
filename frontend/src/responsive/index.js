import {css} from 'styled-components'

function mobile(props) {
    return css`
        @media only screen and (max-width: 380px) {
            // display: none;
            ${props}
        }
    `
}

function tablet(props) {
    return css`
        @media only screen and (max-width: 380px) {
            ${props}
        }
    `
}

function wideScreen(props) {
    return css`
        @media only screen and (min-width: 1490px) {
            ${props}
        }
    `
}

export { mobile, tablet, wideScreen}