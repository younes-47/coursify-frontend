import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: sticky;
  z-index: 100;
  top: 0;
  width: 100%;
  display: flex;
  padding: 1em 3em;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.55);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  @media (max-width: 600px) {
    padding: 1em 1em;
  }
`;
