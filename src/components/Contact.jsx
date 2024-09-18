import React, { useState } from 'react';
import {
  Box,
  Heading,
  VStack,
  Input,
  Textarea,
  Button,
  useToast,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulating form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    toast({
      title: 'Message sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box as="section" py={10}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Contact Me
      </Heading>
      <MotionBox
        as="form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <VStack spacing={4} align="stretch">
          <Input
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            placeholder="Your Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Textarea
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            minHeight="150px"
          />
          <AnimatePresence>
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Button
                type="submit"
                colorScheme="blue"
                width="full"
                isLoading={isSubmitting}
                loadingText="Sending..."
              >
                Send Message
              </Button>
            </MotionBox>
          </AnimatePresence>
        </VStack>
      </MotionBox>
    </Box>
  );
};

export default ContactForm;
