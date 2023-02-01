/* eslint-disable global-require */
import { Box, Flex, Heading, Image, keyframes, Text } from '@chakra-ui/react';
import Retangulo from '../../assets/retangulos.svg';

const animationRetangules = keyframes`
  0% { transform: scale(1.2) ;  opacity:0.4}
  25% { transform: scale(1) ;  opacity:0.7 }
  50% { transform: scale(0.9) ;  opacity:0.5}
  75% { transform: scale(1) ; opacity:0.7}
  100% { transform: scale(1.2) ;  opacity:0.4}
`;

const animation = `${animationRetangules} 30s linear infinite`;

export const AboutMe = () => {
  const Slide = require('react-reveal/Slide');

  return (
    <Flex h='100vh' position='relative' overflow='hidden' id='about'>
      <Flex
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        fontSize='lg'
        maxW='500px'
        margin='0 auto'
      >
        <Image
          animation={animation}
          maxW='none'
          src={Retangulo}
          position='absolute'
          opacity='.9'
          zIndex='3'
          right='-300px'
          top='29px'
          objectFit='cover'
        />
        <Box
          gap='20px'
          position='relative'
          zIndex='50'
          padding={['30px', '30px', '0']}
          mt={['10px', '10px', '0', '0']}
        >
          <Slide left>
            <Heading>Sobre mim</Heading>
            <Text
              mt='20px'
              color='gray.300'
              textAlign='justify'
              fontSize={['sm', 'md', 'lg']}
            >
              Com 29 anos, iniciei um desafio em um mundo totalmente novo: o da
              Tecnologia. Os 7 anos de experiência na Engenharia Civil,
              adquirindo grande conhecimento em diversos setores, não me
              impediram de iniciar essa nova jornada. Ao entrar nesse mundo,
              através do curso de desenvolvedor web Full Stack na Kenzie Academy
              Brasil, vi um potencial enorme de crescimento pessoal e
              profissional, pois estudar a tecnologia, a sua complexidade e os
              seus desafios diários, faz-me querer vencê-los todos os dias e
              buscar ainda mais conhecimento com outras tecnologias.
            </Text>
          </Slide>
        </Box>
      </Flex>
    </Flex>
  );
};
