import styled from 'styled-components';
import React from 'react';

// Outer button component
export const ActionButton = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
  font-size: inherit;
  font-family: inherit;
  text-decoration: none;
  vertical-align: middle;
  padding: 0;
  width: 12rem;
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);

  &:hover {
    .circle {
      width: 100%;
      box-shadow: 0 0 10px 2px white;
    }

    .button-text {
      transform: translate(-1.7rem, 0);
      color: #fff;
    }

    .icon.arrow {
      transform: translate(8.7rem, 0);
    }
  }

  &:active {
    .circle {
      transform: scale(0.9);
      box-shadow: 0 0 5px 0.5px white;
      transition: all 0.3s;
    }

    .icon.arrow {
      transform: translate(9.5rem, 0);
      transition: all 0.3s;
    }

    .button-text {
      /* color: rgba(255, 255, 255, 0.459); */
      color: #fff;
    }
  }
`;

// Circle element inside the button
export const Circle = styled.span`
  box-shadow: 0 0 5px 1px white;
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: #f77f00;
  border-radius: 1.625rem;
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
`;

// Icon element inside the circle
export const Icon = styled.span`
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  margin: auto;
  background: none;

  &.arrow::before {
    content: '';
    position: absolute;
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
    transform: rotate(45deg);
  }
`;

// Text inside the button
export const ButtonText = styled.span`
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.75rem;
  margin-left: 1.85rem;
  /* color: rgba(255, 255, 255, 0.493); */
  color: #fff;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`;

const StyledActionButton = ({ text = '' }) => (
  <ActionButton className="learn-more">
    <Circle className="circle">
      <Icon className="icon arrow" />
    </Circle>
    <ButtonText className="button-text">{text}</ButtonText>
  </ActionButton>
);

export default StyledActionButton;
