/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable arrow-body-style */
import {
  Button,
  Card,
  Heading,
  Image,
  Link,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { ModalProject } from '../ModalProject';

interface ICardProps {
  name: string;
  description: string;
  url: string;
  image: string;
  techs: string;
  gitHub: string;
}

export const CardProject = ({
  name,
  description,
  url,
  image,
  techs,
  gitHub,
}: ICardProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Card
      bg='linear-gradient(129.72deg, #26418A 0%, #161C38 98.26%)'
      w={['100%', '100%']}
      minW='200px'
      maxW='400px'
      boxShadow='0px 0px 20px #0DBDE3'
      p='20px 20px'
      display='flex'
      gap='20px'
      _hover={{ transform: ' scale(1.05)', transition: 'ease 0.5s' }}
    >
      <Image src={require(`../../../assets/projects/${image}`)} alt={name} />
      <Heading as='h3' color='white' fontSize='18px'>
        {name}
      </Heading>
      <Text
        color='white'
        fontSize='16px'
        borderBottom='1px solid'
        paddingBottom='20px'
      >
        {description}
      </Text>
      <ModalProject
        isOpen={isOpen}
        onClose={onClose}
        name={name}
        description={description}
        url={url}
        image={image}
        techs={techs}
        gitHub={gitHub}
      />
      <Button
        bgColor='#0DBDE3'
        color='white'
        _hover={{ bg: '#098ba8' }}
        padding={['10px 30px', '20px 40px', '20px 40px', '20px 40px']}
        onClick={onOpen}
      >
        Ver detalhes
      </Button>
    </Card>
  );
};
