import React from 'react';
import { Box, Flex, Text, Link, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const MotionFlex = motion(Flex);

const SocialIcon = ({ icon, href }) => (
  <Link href={href} isExternal>
    <Icon
      as={icon}
      boxSize={6}
      color="gray.500"
      transition="all 0.3s"
      _hover={{ color: 'blue.500', transform: 'scale(1.2)' }}
    />
  </Link>
);

const Footer = () => {
  return (
    <Box as="footer" py={10} bg="gray.100">
      <MotionFlex
        direction="column"
        align="center"
        maxW="container.lg"
        mx="auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Text mb={4}>
          &copy; {new Date().getFullYear()} Adeniran Noah. All rights reserved.
        </Text>
        <Flex>
          <SocialIcon icon={FaGithub} href="https://github.com/yourusername" />
          <Box w={4} />
          <SocialIcon
            icon={FaLinkedin}
            href="https://linkedin.com/in/yourusername"
          />
          <Box w={4} />
          <SocialIcon
            icon={FaTwitter}
            href="https://twitter.com/yourusername"
          />
        </Flex>
      </MotionFlex>
    </Box>
  );
};

export default Footer;
