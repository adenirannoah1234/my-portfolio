import React from 'react';
import { Box, Heading, SimpleGrid, Text, VStack, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3, FaBootstrap } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiChakraui,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiAxios,
} from 'react-icons/si';

const MotionBox = motion(Box);

const Skill = ({ name, icon, description }) => {
  return (
    <MotionBox
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      p={4}
      borderWidth={1}
      borderRadius="md"
      boxShadow="md"
    >
      <VStack spacing={2} align="center">
        <Icon as={icon} w={10} h={10} color="blue.500" />
        <Heading size="md">{name}</Heading>
        <Text textAlign="center">{description}</Text>
      </VStack>
    </MotionBox>
  );
};

const SkillsSection = () => {
  const skills = [
    {
      name: 'React',
      icon: FaReact,
      description:
        'Building interactive user interfaces with reusable components',
    },
    {
      name: 'JavaScript',
      icon: FaJs,
      description: 'Creating dynamic and responsive web applications',
    },
    {
      name: 'HTML5',
      icon: FaHtml5,
      description: 'Structuring content for modern web experiences',
    },
    {
      name: 'CSS3',
      icon: FaCss3,
      description: 'Styling and layout for visually appealing designs',
    },
    {
      name: 'Next.js',
      icon: SiNextdotjs,
      description:
        'Server-side rendering and static site generation for React apps',
    },
    {
      name: 'Bootstrap',
      icon: FaBootstrap,
      description: 'Responsive, mobile-first front-end framework',
    },
    {
      name: 'Chakra UI',
      icon: SiChakraui,
      description: 'Accessible and customizable component library for React',
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
      description:
        'Static typing for enhanced code quality and maintainability',
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      description: 'Utility-first CSS framework for rapid UI development',
    },
    {
      name: 'Redux Toolkit',
      icon: SiRedux,
      description: 'State management for predictable application behavior',
    },
    {
      name: 'RTK Query',
      icon: SiRedux,
      description: 'Data fetching and caching tool for Redux applications',
    },
    {
      name: 'React Query',
      icon: SiReactquery,
      description: 'Powerful data synchronization for React applications',
    },
    {
      name: 'Axios',
      icon: SiAxios,
      description: 'Promise-based HTTP client for browser and Node.js',
    },
  ];

  return (
    <Box py={10}>
      <Heading as="h2" size="xl" textAlign="center" mb={8}>
        My Skills
      </Heading>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={8}>
        {skills.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SkillsSection;
