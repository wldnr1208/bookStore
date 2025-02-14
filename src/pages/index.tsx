import Link from "next/link";
import styled from "@emotion/styled";

const HomePage = () => {
  return (
    <Container>
      <Content>
        <MainTitle>온라인 서점에 오신 것을 환영합니다</MainTitle>
        <Subtitle>새로운 이야기를 발견하세요</Subtitle>

        <ButtonsContainer>
          <StyledLink href="/books">책 목록 보기</StyledLink>
        </ButtonsContainer>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f6f8ff 0%, #f1f1ff 100%);
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
  text-align: center;
`;

const MainTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonsContainer = styled.div`
  margin-bottom: 60px;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 16px 32px;
  background-color: #4a5af7;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background-color: #3644d0;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(74, 90, 247, 0.3);
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 10px;
`;

const FeatureText = styled.p`
  font-size: 1rem;
  color: #666;
`;

export default HomePage;
