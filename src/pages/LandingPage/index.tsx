import { Box, Flex, Heading, Image, keyframes, Text } from '@chakra-ui/react';

import { DivImgs } from '../../components/DivImgs';
import Retangulo from '../../assets/retangulos.svg';
import { Header } from '../../components/Header';
import { DivInfo } from '../../components/DivInfo';
import { AboutMe } from '../../components/AboutMe';

const animationRetangules = keyframes`
  0% { transform: scale(1.2) ;  opacity:0.4}
  25% { transform: scale(1) ;  opacity:0.7 }
  50% { transform: scale(0.9) ;  opacity:0.5}
  75% { transform: scale(1) ; opacity:0.7}
  100% { transform: scale(1.2) ;  opacity:0.4}
`;

const animation = `${animationRetangules} 30s linear infinite`;

// eslint-disable-next-line arrow-body-style
export const LandingPage = () => {
  return (
    <>
      <Header />
      <Flex
        w='100%'
        h='100vh'
        display='flex'
        flexDirection={['column', 'column', 'row', 'row']}
        position='relative'
        overflow='hidden'
        // padding={['15px']}
      >
        <Image
          animation={animation}
          maxW='none'
          src={Retangulo}
          position='absolute'
          opacity='.9'
          zIndex='3'
          right='10%'
          top='-50px'
          objectFit='cover'
        />
        <DivInfo />
        <DivImgs />
      </Flex>
      <AboutMe />
    </>
  );
};
