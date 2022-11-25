import React from 'react'
import {Button} from "@chakra-ui/react"
import { FormControl,FormLabel} from "@chakra-ui/react"
import {Input,InputGroup,InputRightElement} from "@chakra-ui/react"
import {VStack} from "@chakra-ui/react"
import {useToast} from "@chakra-ui/react"










function Login() {
  return (
    <VStack spacing="10px" >
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input 
          value=""
          type="email"
          placeholder='Enter your Email Address'
          onChange=""
          >
        </Input>
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
        <Input
        value=""
        onChange=""
        type="password"
        placeholder="Enter password"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" >
            but
          </Button>
        </InputRightElement>
      
        </InputGroup>

      </FormControl>

      <Button
      colorScheme="blue"
      width="100%"
      style={{marginTop:15}}

      >
        Login

      </Button>

      <Button 
      variant="solid"
      colorScheme="red"
      width="100%"
      >
        Get Guest User Credentials

      </Button>

    </VStack>
  )
}

export default Login