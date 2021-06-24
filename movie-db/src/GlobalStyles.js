import {createGlobalStyle} from 'styled-components'

export const GlobalStyles=createGlobalStyle`
:root{
    --maxWidth:1280px;
    --light:#fff;
    --smGray:#eee;
    --mdGray:#353535;
    --lgGray:#1c1c1c;
    --fontXl:2.5rem;
    --fontLg:1.5rem;
    --fontMd:1.2rem;
    --fontSm:1rem;
}

*{
    box-sizing: border-box !important ;
    margin: 0;
    padding: 0;
}
body{
    margin: 0;
    padding: 0;
    
    h1{
        font-size: 2rem;
        font-weight: 600;
        color: var(--light);
    }
    h3{
        font-size: 1.1rem;
        font-weight: 600;
    }
    p{
        font-size: 1rem;
        color: var(--light);
    }
}
`

