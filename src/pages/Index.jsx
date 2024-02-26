import React from "react";
import { Box, Button, VStack, HStack, Input, Textarea, Heading, Text, Divider, List, ListItem, IconButton, useToast } from "@chakra-ui/react";
import { FaPlus, FaCheck, FaTimes, FaEdit, FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleApproval = () => {
    toast({
      title: "Topic Approved",
      description: "The suggested topic has been approved for discussion.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box p={5}>
      <VStack spacing={5} align="stretch">
        <Heading as="h1" size="xl">
          Business Alignment OS
        </Heading>

        {/* Task Manager Section */}
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="lg">
            Task Manager
          </Heading>
          <List spacing={3}>
            <ListItem>
              <HStack justifyContent="space-between">
                <Text>Design new landing page</Text>
                <IconButton icon={<FaCheck />} aria-label="Complete Task" />
              </HStack>
            </ListItem>
            {/* More tasks */}
          </List>
          <HStack mt={4}>
            <Input placeholder="New task..." />
            <Button leftIcon={<FaPlus />} colorScheme="blue">
              Add Task
            </Button>
          </HStack>
        </Box>

        {/* Pre-meeting Preparation */}
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="lg">
            Pre-meeting Preparation
          </Heading>
          <VStack spacing={3}>
            <HStack>
              <Input placeholder="Suggest a topic..." />
              <Button leftIcon={<FaPlus />} colorScheme="green">
                Suggest
              </Button>
            </HStack>
            <Button leftIcon={<FaCheck />} colorScheme="blue" onClick={handleApproval}>
              Approve Topics
            </Button>
          </VStack>
        </Box>

        {/* In-meeting Collaboration */}
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="lg">
            In-meeting Collaboration
          </Heading>
          <Textarea placeholder="Collaborative notes..." />
          <Button mt={3} leftIcon={<FaEdit />} colorScheme="purple">
            Save Notes
          </Button>
        </Box>

        {/* Post-meeting Action and Follow-up */}
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading as="h2" size="lg">
            Post-meeting Action and Follow-up
          </Heading>
          <List spacing={3}>
            <ListItem>
              <HStack justifyContent="space-between">
                <Text>Summarize meeting and assign DRIs</Text>
                <IconButton icon={<FaRegCircle />} aria-label="Mark as Uncompleted" />
              </HStack>
            </ListItem>
            {/* More follow-up items */}
          </List>
          <Button mt={3} leftIcon={<FaRegCheckCircle />} colorScheme="orange">
            Complete Follow-up
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
