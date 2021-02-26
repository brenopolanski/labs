import Head from 'next/head'
import styles from '../styles/Home.module.css'
import DarkModeSwitch from "../components/DarkModeSwitch";
import { Text, Heading, Flex, Stack, useColorModeValue } from "@chakra-ui/react";

export default function Home() {
  const color = useColorModeValue('gray.800', 'white')

  return (
    <Stack as="main" align="center">
      <Flex flexDirection="column" maxWidth="700px">
        <Flex flexDirection="row" w="700px" pt={4} justify="space-between">
          <DarkModeSwitch />
          <Text color={color}>Home</Text>
        </Flex>
        <Heading as="h1" size="2xl" fontWeight="bold">Hello World</Heading>
        <Text mt={4}>Hello, again</Text>
      </Flex>
    </Stack>
  )
}
