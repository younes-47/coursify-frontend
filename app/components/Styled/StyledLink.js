import styled from 'styled-components';

export const StyledLink = styled.a`
  position: relative;
  font-weight: 500;
  text-decoration: none;
  font-size: large;
  color: ${props => props.theme.colors[props.color] || 'black'};
  cursor: pointer;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;

  &:focus:after,
  &:hover:after {
    width: 100%;
    left: 0%;
  }
  &:after {
    content: '';
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: ${props => props.theme.colors[props.color] || 'black'};
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }
`;
