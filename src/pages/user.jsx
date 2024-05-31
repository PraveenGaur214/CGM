

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,FormControl,
    FormLabel,
    Input,
    Textarea,
    InputGroup,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react';

function User() {
    const [isOpen, setIsOpen] = useState(false);
    const [tabOneData, setTabOneData] = useState(null);
    const history = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        characteristics: '',
        features: '',
        brand: '',
        sku: {
            sellingPrice: '',
            maxRetailPrice: '',
            amount: '',
            unit: '',
            quantity: '',
        },
    });

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const handleLogout = () => {
        // Implement your logout logic here, e.g., clear session/local storage, redirect to login page, etc.
        history('/');
        console.log("Logged out");
    };

    const handleTabChange = (index) => {
        if (index === 0) {
            const transformedData = Object.entries(formData).map(([key, value]) => ({ field: key, value }));
        setTabOneData(transformedData);
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSkuInputChange = (e, skuField) => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            sku: {
                ...prevState.sku,
                [skuField]: value
            }
        }));
    };
    return (
        <div>
            <h1>Hello</h1>
            <Tabs variant='enclosed' onChange={handleTabChange}>
                <TabList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                    <Button colorScheme='blue' onClick={handleOpenModal}>Button</Button>
                    <Button colorScheme="red" onClick={handleLogout}>Logout</Button>
                </TabList>
                <TabPanels>
                    <TabPanel>
                    {tabOneData && (
                        <Table variant="simple">
        <Thead>
            <Tr>
                <Th>Field</Th>
                <Th>Value</Th>
            </Tr>
        </Thead>
        <Tbody>
            {tabOneData.map((dataItem, index) => (
                <Tr key={index}>
                    <Td>{dataItem.field}</Td>
                    <Td>{typeof dataItem.value === 'object' ? JSON.stringify(dataItem.value) : dataItem.value}</Td>
                </Tr>
            ))}
        </Tbody>
    </Table>

                        )}
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Modal size={"xl"} isOpen={isOpen} onClose={handleCloseModal}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    {/* <ModalBody>
                        Your form components go here
                        <p>This is a modal form.</p>
                    </ModalBody> */}
                    <ModalBody>
                    <FormControl mb={4}>
                            <FormLabel>Name</FormLabel>
                            <Input name="name" placeholder="Enter name" value={formData.name} onChange={handleInputChange} />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel>Category</FormLabel>
                            <Input name="category" placeholder="Enter category" value={formData.category} onChange={handleInputChange} />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel>Characteristics</FormLabel>
                            <Textarea name="characteristics" placeholder="Enter characteristics" value={formData.characteristics} onChange={handleInputChange} />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel>Features</FormLabel>
                            <Textarea name="features" placeholder="Enter features" value={formData.features} onChange={handleInputChange} />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel>Brand</FormLabel>
                            <Input name="brand" placeholder="Enter brand" value={formData.brand} onChange={handleInputChange} />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel>Sku</FormLabel>
                            <InputGroup>
                                <Input name="sellingPrice" placeholder="Selling price" value={formData.sku.sellingPrice} onChange={(e) => handleSkuInputChange(e, 'sellingPrice')} />
                                <Input name="maxRetailPrice" placeholder="Max retail price" value={formData.sku.maxRetailPrice} onChange={(e) => handleSkuInputChange(e, 'maxRetailPrice')} />
                                <Input name="amount" placeholder="Amount" value={formData.sku.amount} onChange={(e) => handleSkuInputChange(e, 'amount')} />
                                <Input name="unit" placeholder="Unit" value={formData.sku.unit} onChange={(e) => handleSkuInputChange(e, 'unit')} />
                                <Input name="quantity" placeholder="Quantity in inventory" value={formData.sku.quantity} onChange={(e) => handleSkuInputChange(e, 'quantity')} />
                            </InputGroup>
                        </FormControl>
                        </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleCloseModal}>
                            Close
                        </Button>
                        <Button colorScheme="green" onClick={() => { handleCloseModal(); handleTabChange(0); }}>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
}

export default User;
