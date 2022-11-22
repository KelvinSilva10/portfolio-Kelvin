import { Box, Flex, ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';

// eslint-disable-next-line arrow-body-style
export const Header = () => {
  return (
    <Flex
      as='header'
      h='106px'
      w='100%'
      bg='linear-gradient(180deg, #1A2246 0%, rgba(27, 34, 64, 0.53) 100%)'
      position='fixed'
      align='center'
      justifyContent='center'
      zIndex='100'
    >
      <Box as='nav'>
        <UnorderedList
          listStyleType='none'
          display='flex'
          gap='40px'
          fontSize='lg'
        >
          <ListItem
            cursor='pointer'
            _hover={{
              color: '#0DBDE3',
            }}
          >
            HOME
          </ListItem>
          <ListItem
            cursor='pointer'
            _hover={{
              color: '#0DBDE3',
            }}
          >
            SOBRE
          </ListItem>
          <ListItem
            cursor='pointer'
            _hover={{
              color: '#0DBDE3',
            }}
          >
            HABILIDADES
          </ListItem>
          <ListItem
            cursor='pointer'
            _hover={{
              color: '#0DBDE3',
            }}
          >
            PROJETOS
          </ListItem>
        </UnorderedList>
      </Box>
    </Flex>
  );
};
