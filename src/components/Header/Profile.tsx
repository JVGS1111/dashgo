import { Avatar, Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import * as React from 'react';

interface ProfileProps {
    showProfileData?: boolean
}
export function Profile({ showProfileData = true }: ProfileProps) {


    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text >João Vinícius</Text>
                    <Text color="gray.300" fontSize="small">joaoviniciusgs@gmail.com</Text>
                </Box>
            )}

            <Avatar size="md" name="João Vinícius" />
        </Flex>
    )
}