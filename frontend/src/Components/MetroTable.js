import {
    Text,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Table,
    TableCaption,
    SlideFade,
    Skeleton
} from '@chakra-ui/react';

function MetroTable({ cases }) {
    if (!cases) {
        return <Skeleton height='60px' />;
    }
    if (!cases.metro.length) {
        return <Text className='noCases' fontSize='md'>No recent public metro cases...🤔</Text>;
    }
    return (
        <SlideFade key={1} in={true}>
            <Table
                variant='striped'
                size='sm'
                colorScheme='sydneyMetro'
            >
                <TableCaption className='tableCaption' placement='top'>
                    Metro
        </TableCaption>
                <Thead>
                    <Tr>
                        <Th>Route</Th>
                        <Th>Trip</Th>
                        <Th>Time</Th>
                        <Th>Updated</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        cases.metro.map((trainCase, i) => {
                            return (
                                <Tr key={i} className='row'>
                                    <Td>{trainCase.route}</Td>
                                    <Td><strong>{trainCase.start_location}</strong> - <strong>{trainCase.end_location}</strong></Td>
                                    <Td>
                                        <p className='slightEmphasis'>{trainCase.date_of_exposure}</p>
                                        <p className='faded'>{trainCase.time_of_exposure}</p>
                                    </Td>
                                    <Td>
                                        <Text as='i'>{trainCase.last_updated}</Text>
                                    </Td>
                                </Tr>
                            );
                        })
                    }
                </Tbody>
            </Table>
        </SlideFade>
    );
}

export default MetroTable;