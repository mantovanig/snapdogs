import styled from 'styled-components/native';

export const HomeView = styled.View`
    flex: 1;
    background: #FFF;
`;

export const HomeViewLoader = styled.View`
  background: #FFF;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ImageView = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const MainImage = styled.Image`
  flex: 1;
  resize-mode: contain;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const BlurredImage = styled.Image`
  flex: 1;
  resize-mode: cover;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
