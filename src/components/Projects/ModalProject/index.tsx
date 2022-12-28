/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable arrow-body-style */
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  useDisclosure,
  Image,
  Text,
  Link,
} from '@chakra-ui/react';
import React from 'react';

interface iModalViewProject {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  image: string;
  url: string;
  description: string;
  techs: string;
  gitHub: string;
}

export const ModalProject = ({
  isOpen,
  onClose,
  description,
  image,
  name,
  url,
  techs,
  gitHub,
}: iModalViewProject) => {
  return (
    <Modal closeOnOverlayClick isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg='none' backdropFilter='auto' backdropBlur='2px' />
      <ModalContent
        w={['90%']}
        bg='linear-gradient(129.72deg, #26418A 0%, #161C38 98.26%)'
      >
        <Image
          src={require(`../../../assets/projects/${image}`)}
          h={['150px', '150px', 'auto']}
        />
        <ModalHeader>{name}</ModalHeader>

        <ModalBody
          pb={6}
          textAlign='justify'
          fontSize={['smaller', 'sm', 'md']}
        >
          {description}
          <Text
            color='gray.500'
            textAlign='center'
            fontSize={['smaller', 'sm', 'md']}
          >
            {techs}
          </Text>
          <Link
            color='white'
            mr={3}
            href={url}
            isExternal
            fontSize='sm'
            fontWeight='normal'
          >
            Ver Página
          </Link>
        </ModalBody>

        <ModalFooter>
          <Link
            color='white'
            bgColor='#0DBDE3'
            mr={3}
            href={gitHub}
            isExternal
            _hover={{ bg: '#098ba8' }}
            padding={['10px 20px']}
            fontSize='md'
            fontWeight='normal'
          >
            GitHub
          </Link>
          <Button
            color='white'
            bgColor='#0b6fcc'
            onClick={onClose}
            borderRadius='0'
            padding={['10px 20px']}
            fontSize='md'
            _hover={{ bg: '#0a61b3' }}
            minH='46px'
            fontWeight='normal'
          >
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
