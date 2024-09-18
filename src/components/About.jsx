import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Circle,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const MotionBox = motion(Box);

const TimelineItem = ({ year, title, description, isLast }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <HStack align="flex-start" spacing={4}>
      <VStack spacing={0} align="center">
        <Circle
          size={isMobile ? '32px' : '40px'}
          bg="blue.500"
          color="white"
          fontWeight="bold"
        >
          {year}
        </Circle>
        {!isLast && <Box w="2px" h="100%" bg="blue.500" />}
      </VStack>
      <VStack align="start" spacing={2} pb={isLast ? 0 : 8}>
        <Heading size={isMobile ? 'sm' : 'md'}>{title}</Heading>
        <Text fontSize={isMobile ? 'sm' : 'md'}>{description}</Text>
      </VStack>
    </HStack>
  );
};

const AboutMe = () => {
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const experiences = [
    {
      year: 2018,
      title: 'Started Programming',
      description: 'Began my journey in web development',
    },
    {
      year: 2019,
      title: 'First Internship',
      description: 'Worked as a junior developer at Tech Co.',
    },
    {
      year: 2020,
      title: 'Freelance Work',
      description: 'Started taking on freelance projects',
    },
    {
      year: 2021,
      title: 'Full-time Developer',
      description: 'Joined a startup as a full-stack developer',
    },
  ];

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box as="section" py={10} px={4} overflow="hidden">
      <MotionBox
        style={{ y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Heading
          as="h2"
          size={isMobile ? 'lg' : 'xl'}
          mb={6}
          textAlign="center"
        >
          About Me
        </Heading>
        <Text fontSize={isMobile ? 'lg' : 'xl'} textAlign="center" mb={10}>
          I'm a passionate web developer with a keen eye for design and a love
          for creating seamless user experiences.
        </Text>
      </MotionBox>

      <VStack
        spacing={4}
        align="stretch"
        px={isMobile ? 2 : 10}
        mt={isMobile ? 40 : 0}
      >
        {experiences.map((exp, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <TimelineItem {...exp} isLast={index === experiences.length - 1} />
          </MotionBox>
        ))}
      </VStack>
    </Box>
  );
};

export default AboutMe;
