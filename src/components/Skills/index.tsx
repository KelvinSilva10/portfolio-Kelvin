/* eslint-disable global-require */
import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  keyframes,
  List,
} from '@chakra-ui/react';

import Retangulo from '../../assets/retangulos.svg';
import { skillsBase } from '../../databases/skills';

const animationRetangules = keyframes`
  0% { transform: scale(1.2) ;  opacity:0.4}
  25% { transform: scale(1) ;  opacity:0.7 }
  50% { transform: scale(0.9) ;  opacity:0.5}
  75% { transform: scale(1) ; opacity:0.7}
  100% { transform: scale(1.2) ;  opacity:0.4}
`;

const animation = `${animationRetangules} 30s linear infinite`;

export const Skills = () => {
  const Slide = require('react-reveal/Slide');

  return (
    <Flex h={['100%']} position='relative' overflow='hidden'>
      <Flex
        flexDirection='column'
        // justifyContent='center'
        alignItems='center'
        fontSize='lg'
        margin='0 auto'
        w='100%'
        h={['100%']}
        id='skills'
      >
        <Image
          animation={animation}
          maxW='none'
          src={Retangulo}
          position='absolute'
          opacity='.9'
          zIndex='3'
          right='-100px'
          top='0px'
          objectFit='cover'
        />
        <Box
          display='flex'
          flexDirection='column'
          gap='60px'
          position='relative'
          zIndex='50'
          padding={['30px', '30px', '0']}
          mt={['10px', '10px', '0', '0']}
          w='100%'
          alignItems='center'
        >
          <Heading>Habilidades</Heading>

          <Grid
            as='ul'
            display='grid'
            w={['90%', '90%', '80%', '80%']}
            templateColumns={[
              'repeat(auto-fill, minmax(50px, 1fr))',
              'repeat(auto-fill, minmax(100px, 1fr))',
              'repeat(auto-fill, minmax(200px, 1fr))',
            ]}
            gap={10}
            // mt='8'
            // padding='6'
          >
            <Slide left>
              {skillsBase.map((skill) => (
                <List
                  key={skill.name}
                  display='flex'
                  flexDir='column'
                  alignItems='center'
                  _hover={{ transform: ' scale(1.1)', transition: '500ms' }}
                  gap='15px'
                  textAlign='center'
                >
                  <Image
                    src={skill.image}
                    w={['40px', '60px', '100px', '100px']}
                  />

                  <Heading color='white' fontSize={['md', 'lg', 'lg', '2xl']}>
                    {skill.name}
                  </Heading>
                </List>
              ))}
            </Slide>
          </Grid>
        </Box>
      </Flex>
    </Flex>
  );
};
