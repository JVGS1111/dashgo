import { Flex, Icon, Input } from '@chakra-ui/react';
import * as React from 'react';
import { useState, useRef } from 'react';
import { RiSearchLine } from 'react-icons/ri';

//controled component

export function SearchBox() {

    //const [search, setSearch] = useState('');

    const searchInputRef = useRef<HTMLInputElement>(null)

    //searchInputRef.current.value

    return (
        <Flex as="label" flex="1" py="4" px="8" ml="6" maxWidth={400}
            alignSelf="center" color="gray.200" position="relative" bg="gray.800" borderRadius="full">
            <Input ref={searchInputRef} color="gray.50" variant="unstyled" placeholder="Buscar na plataforma" px="4" mr="4" _placeholder={{ color: 'gray.400' }}></Input>
            <Icon as={RiSearchLine} fontSize="20" cursor="pointer" />

        </Flex>
    )

}