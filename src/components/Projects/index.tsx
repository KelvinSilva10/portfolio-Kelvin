import { Flex, Heading, UnorderedList } from '@chakra-ui/react';
import { projects } from '../../databases/projects';
import { CardProject } from './CardProject/CardProject';

export const Projects = () => {
  // eslint-disable-next-line global-require
  const Slide = require('react-reveal/Slide');
  return (
    <Flex
      flexDirection='column'
      w='100%'
      justifyContent='center'
      mt={['80px']}
      align='center'
      gap='30px'
      id='projects'
    >
      <Heading>Projetos</Heading>
      <Slide left>
        <UnorderedList
          margin={0}
          padding={['30px']}
          w={['100vw', '100vw', '100vw', '100%']}
          display='flex'
          justifyContent={[
            'flex-start',
            'flex-start',
            'flex-start',
            'space-between',
          ]}
          gap={30}
          flexWrap={['nowrap', 'nowrap', 'nowrap', 'wrap']}
          overflowY={['scroll', 'scroll', 'scroll', 'hidden']}
        >
          {projects.map((project) => (
            <CardProject key={project.name} {...project} />
          ))}
        </UnorderedList>
      </Slide>
    </Flex>
  );
};
