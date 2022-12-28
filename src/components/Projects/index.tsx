/* eslint-disable global-require */
import {
  Card,
  Flex,
  Heading,
  Link,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';
import { projects } from '../../databases/projects';
import { CardProject } from './CardProject/CardProject';

export const Projects = () => {
  const Slide = require('react-reveal/Slide');

  return (
    <Flex
      flexDirection='column'
      h='100vh'
      w='100%'
      justifyContent='center'
      align='center'
      gap='30px'
      id='projects'
    >
      <Heading>Projetos</Heading>
      <Slide left>
        <UnorderedList
          margin='0'
          padding='20px'
          w={['100vw', '100vw', '100%', '100%']}
          display='flex'
          justifyContent='flex-start'
          alignItems='center'
          gap='30px'
          flexWrap={['nowrap', 'nowrap', 'wrap']}
          overflowY={['scroll', 'scroll', 'hidden']}
        >
          {projects.map((project) => (
            <CardProject
              key={project.name}
              name={project.name}
              description={project.description}
              url={project.url}
              image={project.image}
              techs={project.techs}
              gitHub={project.gitHub}
            />
          ))}
        </UnorderedList>
      </Slide>
    </Flex>
  );
};
