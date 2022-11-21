import {
  Box,
  Flex,
  Heading,
  keyframes,
  Link,
  LinkBox,
  Text,
} from '@chakra-ui/react';
import { FaTwitter, FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import React from 'react';

const typing = keyframes`
    0% {
        width:0
    }   
    50%{
        width:0%
    }
    100%{
        width:100%;
        border-right-color: transparent ;
    }
`;
const typing2 = keyframes`
    0% {
        width:0;
        border-right-color: transparent ;
    }   
    50%{
        width:0;
        border-right-color: white ;
    }
    100%{
        width:100%;
        border-right-color: transparent ;
    }
`;

const blinkCursor = keyframes`
    from {
border-right-color: white ;
}
    to{
    border-right-color: transparent ;
}
`;

const animation = `${blinkCursor} 600ms infinite normal, ${typing} 1s steps(30) 2s normal both`;
const animation2 = `${blinkCursor} 600ms infinite normal, ${typing2} 2s steps(30) 2700ms normal both`;
const animation3 = `${blinkCursor} 600ms infinite normal, ${typing2} 3s steps(30) 3700ms normal both`;

// eslint-disable-next-line arrow-body-style
export const DivInfo = () => {
  return (
    <Flex
      paddingY={['110px', '110px', '110px', '110px']}
      paddingX={['15px', '15px', '50px', '50px']}
      w={['100%', '100%', '50%', '50%']}
      h='100%'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='space-around'
      zIndex='51'
    >
      <Box>
        <Heading
          display='inline-block'
          fontSize={['lg', 'lg', '2xl', '4xl']}
          fontWeight='normal'
          borderRight='2px solid white'
          animation={animation}
          whiteSpace='nowrap'
          overflow='hidden'
        >
          Olá, eu sou o
        </Heading>
        <Heading
          display='block'
          fontSize={['3xl', '4xl', '4xl', '6xl']}
          fontWeight='bold'
          color='#0DBDE3'
          animation={animation2}
          whiteSpace='nowrap'
          overflow='hidden'
          borderRight='2px solid white'
        >
          Kelvin Silva
        </Heading>
        <Text
          fontSize={['lg', 'lg', '2xl', '2xl']}
          mt='20px'
          fontWeight='normal'
          color='gray.400'
          animation={animation3}
          whiteSpace='nowrap'
          overflow='hidden'
          borderRight='2px solid white'
        >
          Desenvolvedor Web Front-End
        </Text>
      </Box>

      <Link
        bgColor='#0DBDE3'
        padding={['10px 30px', '20px 40px', '20px 40px', '20px 40px']}
        href='https://github.com/KelvinSilva10'
        isExternal
        _hover={{ bg: '#098ba8' }}
      >
        Acessar Github
      </Link>
      <LinkBox display='flex' gap='50px'>
        <Link
          href='https://twitter.com/KelvinS61040484'
          _hover={{ color: '#098ba8', transform: ' scale(1.4)' }}
          isExternal
        >
          <FaTwitter size='35' />
        </Link>
        <Link
          href='https://www.instagram.com/kelvinsilva10/'
          _hover={{ color: '#098ba8', transform: ' scale(1.4)' }}
          isExternal
        >
          <FaInstagram size='35' />
        </Link>
        <Link
          href='https://www.facebook.com/kelvin.silva.313'
          _hover={{ color: '#098ba8', transform: ' scale(1.4)' }}
          isExternal
        >
          <FaFacebookSquare size='35' />
        </Link>
      </LinkBox>
    </Flex>
  );
};
