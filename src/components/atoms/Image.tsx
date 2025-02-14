import styled from "@emotion/styled";

interface ImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

const StyledImage = styled.img<{ width: number; height: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  object-fit: cover;
  border-radius: 4px;
`;

const Image = ({ src, alt = "", width = 100, height = 100 }: ImageProps) => {
  return <StyledImage src={src} alt={alt} width={width} height={height} />;
};

export default Image;
