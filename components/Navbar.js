import React from 'react'
import Link from 'next/link'
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react'
import {FcMenu, FcHome, FcAbout} from "react-icons/fc"
import {BsSearch} from "react-icons/bs"
import {FiKey} from "react-icons/fi"

const Navbar = () => {
  return (
    <Flex p='2' borderRadius='3x' borderBottom={'1px'} borderColor='gray.100' backgroundColor={'blackAlpha.900'} w='full'>
        <Box fontSize='3xl' color={'honeydew'} fontWeight='bold'>
            <Link href={'/'}>RealEstate Genie</Link> 
        </Box>
        <Spacer/>
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant='outlined' backgroundColor='whiteAlpha.100'/>
                <MenuList>
                    <Link href='/' passHref>
                        <MenuItem><FcHome /> Home</MenuItem>
                    </Link>
                    <Link href='/search' passHref>
                        <MenuItem><BsSearch />Search</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-sale' passHref>
                        <MenuItem><FcAbout /> Buy Property</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-rent' passHref>
                        <MenuItem><FiKey /> Rent Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
  )
}

export default Navbar