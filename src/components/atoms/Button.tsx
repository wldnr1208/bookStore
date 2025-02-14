import styled from "@emotion/styled";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const Button = ({ children, onClick, variant = "primary" }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ variant: "primary" | "secondary" }>`
  padding: 10px 16px;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;
  background-color: ${({ variant }) =>
    variant === "primary" ? "#0070f3" : "#eaeaea"};
  color: ${({ variant }) => (variant === "primary" ? "white" : "black")};

  &:hover {
    background-color: ${({ variant }) =>
      variant === "primary" ? "#005bb5" : "#d0d0d0"};
  }
`;

export default Button;
