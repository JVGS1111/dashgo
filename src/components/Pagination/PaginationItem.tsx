import { Button } from '@chakra-ui/react';
import * as React from 'react';

interface PaginationItem {
    isCurrent?: boolean;
    number: number
}

export function PaginationItem({ isCurrent = false, number }: PaginationItem) {

    if (isCurrent) {
        return (
            <Button size="sm" fontSize="xs" width="4" colorScheme="pink" disabled _disabled={{ bgColor: 'pink.500', cursor: 'default' }}>
                1
            </Button>
        )
    }

    return (
        <Button size="sm" fontSize="xs" width="4" bgColor="gray.700" _hover={{ bgColor: "gray.500" }}>
            {number}
        </Button>
    )


}