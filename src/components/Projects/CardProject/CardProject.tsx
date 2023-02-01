/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable arrow-body-style */
import {
  Box,
  Button,
  Card,
  Heading,
  Image,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
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
      minW={['300px', '400px']}
      maxW='400px'
      boxShadow='0px 0px 20px #0DBDE3'
      p='20px 20px 70px 20px'
      display='flex'
      _hover={{ transform: ' scale(1.05)', transition: 'ease 0.5s' }}
    >
      <Image
        src={require(`../../../assets/projects/${image}`)}
        alt={name}
        h={['150px', '150px', '200px', '200px']}
      />
      <Heading as='h3' color='white' fontSize='18px' mt='20px'>
        {name}
      </Heading>
      <Box
        display='flex'
        flexDirection='column'
        h='auto'
        justifyContent='space-between'
      >
        <Text
          color='white'
          fontSize={['smaller', 'sm', 'md', 'md']}
          paddingBottom='20px'
          textAlign='justify'
          minH={['180px', '180px', '200px']}
          mt='20px'
        >
          {description}
        </Text>
        <Button
          bgColor='#0DBDE3'
          color='white'
          _hover={{ bg: '#098ba8' }}
          padding={['10px 30px', '20px 40px', '20px 40px', '20px 40px']}
          onClick={onOpen}
          position='absolute'
          bottom={['20px']}
          left={['50%']}
          transform={['translateX(-50%)']}
          margin='0 auto'
        >
          Ver detalhes
        </Button>
      </Box>

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
    </Card>
  );
};
