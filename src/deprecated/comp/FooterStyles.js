import styled from 'styled-components';

export const Box = styled.div`
padding: 20px 80px;
background: black;

margin-top: 5%;
border-top: 4px solid #D8FF97 !important;
height: 100%;
font-family: 'proxima-nova', sans-serif;

@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 100%;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin-left: 60px;
align-self: center;
`;

export const Row = styled.div`
display: grid;

grid-gap: 20px;

`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 12px;
text-decoration: none;

&:hover {
	color: #D8FF97;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 18x;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;
