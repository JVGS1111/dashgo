import { Box, Text, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue, Spinner } from '@chakra-ui/react';
import * as React from 'react';
import { RiAddLine, RiEditLine } from 'react-icons/ri';
import { Sidebar } from '../../components/Sidebar';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import Link from 'next/link';
import { useUsers } from '../../services/hooks/useUsers';
import { useState } from 'react'

export default function UserList() {

    const [page, setPage] = useState(1);

    const { data, isLoading, error, isFetching } = useUsers(page);

    const isWideVersion = useBreakpointValue({
        base: false,
        md: true,
        lg: true
    });

    return (
        <Box >
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={["2", "6"]}>
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                            {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
                        </Heading>
                        <Link href="/users/create" passHref>
                            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon fontSize="20px" as={RiAddLine} />}>
                                Criar novo
                            </Button>
                        </Link>

                    </Flex>

                    {isLoading ? (
                        <Flex justify="center"><Spinner /></Flex>
                    ) : error ? (
                        <Flex justify="center">
                            <Text>Falha ao obter dados dos usuarios</Text>
                        </Flex>
                    ) : (
                        <>
                            <Table colorScheme="whiteAlpha">
                                <Thead>
                                    <Tr>
                                        <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                            <Checkbox colorScheme="pink" />
                                        </Th>
                                        <Th>Usuário</Th>
                                        {isWideVersion && <Th>Data de cadastro</Th>}
                                        {isWideVersion && <Th w="8"></Th>}
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data.users.map((user) => {
                                        return (
                                            <Tr key={user.id}>
                                                <Td px={["4", "4", "6"]}>
                                                    <Checkbox colorScheme="pink" />
                                                </Td>
                                                <Td>
                                                    <Box>
                                                        <Text fontWeight="bold">{user.name}</Text>
                                                        <Text fontWeight="bold" fontSize="small" color="gray.300">{user.email}</Text>
                                                    </Box>
                                                </Td>
                                                {isWideVersion && <Td>
                                                    {user.createdAt}
                                                </Td>}
                                                <Td>
                                                    {isWideVersion && <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiEditLine} />}>
                                                        Editar
                                                    </Button>}
                                                </Td>
                                            </Tr>
                                        )
                                    })}
                                </Tbody>
                            </Table>
                            <Pagination totalCountOfRegisters={data.totalCount} currentPage={page} onPageChange={setPage} />
                        </>
                    )}
                </Box>
            </Flex>
        </Box>

    )
}

