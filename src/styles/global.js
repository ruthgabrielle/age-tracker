import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
    --background: #EEF5DB;
    --red: #E52E4D;
    --green: #59B45D;
    --blue: #A5F8D3;
    --purple: #802392;

    --text-body: #35281D;
    --text-title: #37000A;

    --shape: #FFFFFF
}

body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

// font-size 16px

html {
    @media (max-width: 1080px){
        font-size: 93.75%;
    }

    @media (max-width: 720){
        font-size: 87.5%;
    }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

button {
    cursor: pointer;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

`