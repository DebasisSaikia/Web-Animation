import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
min-height: 100px;
background: var(--lgGray);
padding: 0 20px;
`;

export const Content = styled.div`
display: flex;
max-width: var(--maxWidth);
width: 100%;
margin: 0 auto;

.column{
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--mdGray);
    border-radius: 4px;
    margin: 0 20px;
    padding: 10px 0;
    flex: 1;
}
/* :first-child{
    margin-left: 0;
}
:last-child{
    margin-right: 0;
} */

@media(max-width:768px){
    display: block;
    .column{
        margin: 20px 0;
    }
}
`;
