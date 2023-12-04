import styled from "styled-components";

export interface ButtonProps {
  width?: string;
}
export const Button = styled.button<ButtonProps>`
  background-image: linear-gradient(to right, #f9c06a, #f9c06a);
  font-weight: bold;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 50px;
  outline: none;
  width: ${(props) => (props ? props.width : "100%")};
  transition: 0.3s;
  &:hover {
    border: 1px solid #f9c06a;
    background-image: linear-gradient(to right, white, white);
  }
  &:disabled {
    border: none;
    background-image: linear-gradient(to right, #dbdbdb, #dbdbdb);
  }
`;
