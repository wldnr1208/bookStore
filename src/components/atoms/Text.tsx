import styled from "@emotion/styled";

interface TextProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  bold?: boolean;
}

const Text = styled.p<TextProps>`
  font-size: ${({ size }) =>
    size === "small" ? "14px" : size === "medium" ? "16px" : "20px"};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;

export default Text;
