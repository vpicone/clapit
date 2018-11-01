import styled from "styled-components";

export const Input = styled.input`
  background: var(--field);
  color: var(--text);
  max-width: 1000px;
  width: 90%;
  line-height: 1.15;
  font-size: 2.5rem;
  border-radius: 6px;
  text-align: center;
  padding: 0.5rem 0.25rem;
  border: none;
  margin: 1.5rem 0;
  line-height: 1.75;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--background);
`;

export const Button = styled.button`
  width: 30%;
  color: var(--text);
  max-width: 250px;
  background: ${props => (props.copied ? "var(--info)" : "var(--field)")};
  color: ${props => (props.copied ? "white" : "var(--text)")};
  border: none;
  font-variant-caps: all-small-caps;
  border-radius: 6px;
  font-size: 2rem;
  padding: 0.5rem 2rem;
  transition: all 0.2s ease;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
  }
  &:active {
    transform: translateY(2px);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
  }
`;

export const Title = styled.h1`
  font-size: 6rem;
  color: white;
  text-align: center;
  margin: 0;
  line-height: 1;
  font-family: "IBM Plex Sans Condensed", sans-serif;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  @media (max-width: 600px) {
    font-size: 4rem;
  }
`;
