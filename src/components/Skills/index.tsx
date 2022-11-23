import {
  Box,
  Card,
  CardBody,
  Flex,
  Grid,
  Heading,
  Image,
  keyframes,
  List,
  Stack,
  Text,
  transition,
  UnorderedList,
} from '@chakra-ui/react';
import { AiOutlineHtml5 } from 'react-icons/ai';
import Retangulo from '../../assets/retangulos.svg';

const skillsBase = [
  {
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    name: 'HTML5',
  },
  {
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    name: 'JavaScript',
  },
  {
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    name: 'React Js',
  },
  {
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    name: 'CSS3',
  },
  {
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    name: 'TypeScript',
  },
  {
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    name: 'Git',
  },
  {
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    name: 'GitHub',
  },
  {
    image: 'https://avatars.githubusercontent.com/u/54212428?s=200&v=4',
    name: 'Chakra UI',
  },
  {
    image: 'https://styled-components.com/logo.png',
    name: 'Styled Components',
  },
];

const animationRetangules = keyframes`
  0% { transform: scale(1.2) ;  opacity:0.4}
  25% { transform: scale(1) ;  opacity:0.7 }
  50% { transform: scale(0.9) ;  opacity:0.5}
  75% { transform: scale(1) ; opacity:0.7}
  100% { transform: scale(1.2) ;  opacity:0.4}
`;

const animation = `${animationRetangules} 30s linear infinite`;

// eslint-disable-next-line arrow-body-style
export const Skills = () => {
  return (
    <Flex h='100vh' position='relative' overflow='hidden'>
      <Flex
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        fontSize='lg'
        margin='0 auto'
        w='100%'
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
          gap='25px'
          position='relative'
          zIndex='50'
          padding={['15px', '15px', '0']}
          mt={['10px', '10px', '0', '0']}
          w='100%'
          alignItems='center'
          // border='1px solid'
          // padding='50px'
          // boxShadow='-15px -11px 105px 57px rgba(0,218,222,0.4)'
        >
          <Heading>Habilidades</Heading>

          <Grid
            as='ul'
            display='grid'
            w='100%'
            templateColumns={[
              'repeat(auto-fill, minmax(50px, 1fr))',
              'repeat(auto-fill, minmax(100px, 1fr))',
              'repeat(auto-fill, minmax(200px, 1fr))',
            ]}
            gap={10}
            // mt='8'
            // padding='6'
          >
            {skillsBase.map((skill) => (
              <List
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
          </Grid>
        </Box>
      </Flex>
    </Flex>
  );
};
