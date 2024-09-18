import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Button,
  useColorMode,
  useColorModeValue,
  IconButton,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const Header = () => {
  const { toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');

  const menuItems = ['Home', 'Projects', 'Skills', 'About', 'Contact'];

  return (
    <Box
      as="header"
      bg={bgColor}
      px={4}
      boxShadow="sm"
      position="fixed"
      width="100%"
      zIndex="banner"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <MotionBox
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h1" size="lg" letterSpacing="tight">
            Adeniran Noah
          </Heading>
        </MotionBox>

        <Flex alignItems="center">
          <Box display={{ base: 'none', md: 'block' }}>
            {menuItems.map((item, index) => (
              <MotionBox
                key={item}
                as="a"
                href={`#${item.toLowerCase()}`}
                mx={2}
                display="inline-block"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button variant="ghost" color={textColor}>
                  {item}
                </Button>
              </MotionBox>
            ))}
          </Box>
          <MotionBox
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            display={{ base: 'none', md: 'block' }}
          >
            <Button onClick={toggleColorMode} ml={2}>
              Toggle Theme
            </Button>
          </MotionBox>
          <Box display={{ base: 'block', md: 'none' }}>
            <IconButton
              aria-label="Open Menu"
              size="lg"
              icon={isOpen ? <X /> : <Menu />}
              onClick={onToggle}
            />
          </Box>
        </Flex>
      </Flex>

      <AnimatePresence>
        {isOpen && (
          <MotionFlex
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            direction="column"
            align="stretch"
            display={{ base: 'flex', md: 'none' }}
          >
            <VStack spacing={4} align="stretch" py={4}>
              {menuItems.map((item, index) => (
                <MotionBox
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Button
                    as="a"
                    href={`#${item.toLowerCase()}`}
                    variant="ghost"
                    w="full"
                    justifyContent="flex-start"
                    onClick={onToggle}
                  >
                    {item}
                  </Button>
                </MotionBox>
              ))}
              <MotionBox
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: menuItems.length * 0.1 }}
              >
                <Button
                  onClick={toggleColorMode}
                  w="full"
                  justifyContent="flex-start"
                >
                  Toggle Theme
                </Button>
              </MotionBox>
            </VStack>
          </MotionFlex>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Header;
