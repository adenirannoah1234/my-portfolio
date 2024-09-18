import React, { useState } from 'react';
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);

const ProjectCard = ({ title, description, imageUrl, onClick }) => (
  <MotionBox
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    cursor="pointer"
  >
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={imageUrl} alt={title} />
      <Box p="6">
        <Heading size="md" mb={2}>
          {title}
        </Heading>
        <Text>{description}</Text>
      </Box>
    </Box>
  </MotionBox>
);

const ProjectModal = ({ isOpen, onClose, project }) => (
  <Modal isOpen={isOpen} onClose={onClose} size="xl">
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{project.title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Image src={project.imageUrl} alt={project.title} mb={4} />
        <Text>{project.fullDescription}</Text>
      </ModalBody>
    </ModalContent>
  </Modal>
);

const ProjectsShowcase = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Short description',
      fullDescription: 'Full description',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Short description',
      fullDescription: 'Full description',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Short description',
      fullDescription: 'Full description',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Short description',
      fullDescription: 'Full description',
      imageUrl: 'https://via.placeholder.com/300',
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <Box as="section" py={10}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        My Projects
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        <AnimatePresence>
          {projects.map((project) => (
            <MotionBox
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard
                {...project}
                onClick={() => handleProjectClick(project)}
              />
            </MotionBox>
          ))}
        </AnimatePresence>
      </SimpleGrid>
      {selectedProject && (
        <ProjectModal
          isOpen={isOpen}
          onClose={onClose}
          project={selectedProject}
        />
      )}
    </Box>
  );
};

export default ProjectsShowcase;
