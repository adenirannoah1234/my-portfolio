import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const FloatingShape = ({ size, top, left, delay, display }) => (
  <MotionBox
    position="absolute"
    width={`${size}px`}
    height={`${size}px`}
    borderRadius="full"
    bg="blue.500"
    top={top}
    left={left}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.7, 0.3, 0.7],
      scale: [1, 1.2, 1],
      y: [0, -20, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay: delay,
    }}
    display={display}
  />
);

const Hero = () => {
  const headingSize = useBreakpointValue({ base: '2xl', md: '3xl', lg: '4xl' });
  const textSize = useBreakpointValue({ base: 'md', md: 'lg', lg: 'xl' });
  const shapeDisplay = useBreakpointValue({ base: 'block', md: 'block' });

  return (
    <Box
      height={{ base: 'calc(100vh - 64px)', md: '100vh' }}
      position="relative"
      overflow="hidden"
    >
      {/* Floating shapes background */}
      <FloatingShape
        size={30}
        top="20%"
        left="10%"
        delay={0}
        display={shapeDisplay}
      />
      <FloatingShape
        size={50}
        top="60%"
        left="5%"
        delay={1}
        display={shapeDisplay}
      />
      <FloatingShape
        size={40}
        top="80%"
        left="80%"
        delay={2}
        display={shapeDisplay}
      />
      <FloatingShape
        size={60}
        top="10%"
        left="70%"
        delay={3}
        display={shapeDisplay}
      />
      <FloatingShape
        size={35}
        top="40%"
        left="90%"
        delay={4}
        display={shapeDisplay}
      />

      {/* Hero content */}
      <VStack
        height="100%"
        justifyContent="center"
        spacing={{ base: 4, md: 6, lg: 8 }}
        textAlign="center"
        zIndex={1}
        position="relative"
        px={{ base: 4, md: 8 }}
      >
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading
            as="h2"
            size={headingSize}
            mb={{ base: 2, md: 4 }}
            lineHeight="1.2"
          >
            Welcome to My Portfolio
          </Heading>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Text
            fontSize={textSize}
            maxWidth={{ base: '100%', md: '80%', lg: '60%' }}
            mx="auto"
          >
            I'm a developer passionate about creating amazing web experiences
          </Text>
        </MotionBox>
      </VStack>
    </Box>
  );
};

export default Hero;
