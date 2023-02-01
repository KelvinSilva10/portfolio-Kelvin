import { Box, Flex, ListItem, UnorderedList } from '@chakra-ui/react';
import { Link as LinkScroller } from 'react-scroll';
import { useState } from 'react';
import './nav.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <Flex
      as='header'
      h={['70px', '70px', '100px', '100px']}
      w='100%'
      bg='linear-gradient(180deg, #1A2246 0%, rgba(27, 34, 64, 0.53) 100%)'
      position='fixed'
      align='center'
      justifyContent='flex-end'
      zIndex='100'
      display='flex'
      padding='20px'
    >
      <Box as='nav' display='flex'>
        <Box
          position='relative'
          zIndex='100'
          transition='5s ease-in'
          display={['contents', 'contents', 'none', 'none']}
        >
          {click ? (
            <FaTimes
              size={30}
              style={{ color: '#ffffff' }}
              onClick={handleClick}
            />
          ) : (
            <FaBars
              size={30}
              style={{ color: '#ffffff' }}
              onClick={handleClick}
            />
          )}
        </Box>
        <UnorderedList
          listStyleType='none'
          paddingTop={['50px', '30px', '0', '0']}
          paddingLeft={['30px']}
          display={['flex']}
          justifyContent={['flex-start', 'flex-start', 'center', 'center']}
          w='100vw'
          h={
            click
              ? ['100vh', '100vh', '50px', '50px']
              : ['100vh', '100vh', '50px', '50px']
          }
          bgColor='rgba(27, 34, 64, 0.9)'
          flexDirection={['column', 'column', 'row', 'row']}
          position={['absolute', 'absolute', 'static', 'static']}
          backdropBlur='3px'
          top={
            click ? ['70px', '70px', '0', '0'] : ['-1000px', '-800px', '0', '0']
          }
          left='0'
          gap={['80px', '80px', '40px', '40px']}
          fontSize={['md', 'md', 'lg', 'lg']}
          transition='0.8s ease-in'
          margin='0'
          zIndex='50'
        >
          <ListItem
            cursor='pointer'
            _hover={{
              color: '#0DBDE3',
            }}
          >
            <LinkScroller
              to='home'
              spy
              smooth
              hashSpy
              offset={0}
              duration={500}
              isDynamic
              ignoreCancelEvents={false}
              onClick={closeMenu}
            >
              HOME
            </LinkScroller>
          </ListItem>
          <ListItem
            cursor='pointer'
            _hover={{
              color: '#0DBDE3',
            }}
          >
            <LinkScroller
              to='about'
              spy
              smooth
              hashSpy
              offset={0}
              duration={500}
              isDynamic
              ignoreCancelEvents={false}
              onClick={closeMenu}
            >
              SOBRE
            </LinkScroller>
          </ListItem>
          <ListItem
            cursor='pointer'
            _hover={{
              color: '#0DBDE3',
            }}
          >
            <LinkScroller
              to='skills'
              spy
              smooth
              hashSpy
              offset={0}
              duration={500}
              isDynamic
              onClick={closeMenu}
            >
              HABILIDADES
            </LinkScroller>
          </ListItem>
          <ListItem
            cursor='pointer'
            _hover={{
              color: '#0DBDE3',
            }}
          >
            <LinkScroller
              to='projects'
              spy
              smooth
              hashSpy
              offset={0}
              duration={500}
              isDynamic
              onClick={closeMenu}
            >
              PROJETOS
            </LinkScroller>
          </ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
};
