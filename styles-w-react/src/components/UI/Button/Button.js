import styled from "styled-components";

// styled.button`` is a tagged template literal
// button is amethod on this styled Component
// this is a default js, not react or styled-component
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

// [this will return a button with the styles defined in between the back ticks]
const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

export default Button;
