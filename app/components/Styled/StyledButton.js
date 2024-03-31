import styled from 'styled-components';

export const StyledButton = styled.button`
  font-weight: 500;
  font-size: large;
  color: white;
  background-color: ${(props) => props.theme.palette[props.color]};
  transition: 200ms;
  border: none;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  cursor: pointer;
  &:not(:disabled):hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  }
  &:not(:disabled):active {
    transform: translateY(2px);
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3);
  }
  &:disabled {
    background-color: grey;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
