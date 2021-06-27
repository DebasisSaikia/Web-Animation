import styled from 'styled-components';

export const Container = styled.div`
color: var(--light);
background: var(--lgGray);
border-radius: 4px;
padding: 5px;
text-align: center;

h3{
    margin: 10px 0 0 0;
}
p{
    margin: 5px 0;
}
`

export const CastImage = styled.img`
display: block;
width: 100%;
height: 200px;
object-fit: cover;
border-radius: 4px;
`