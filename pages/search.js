import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import {BsFilter} from "react-icons/bs"
import SearchFilter from "@/components/SearchFilter";
import Property from "@/components/Property";
import noresult from "../assets/noresult.svg"
import { baseURL, fetchAPI } from "@/utils/fetchApi";

export default function Search({properties}){
    const [searchFilter, setSearchFilter] = useState(false)
    const router = useRouter()

    return(
        <Box>
            <Flex
                cursor='pointer'
                bg='gray.100'
                borderBottom='1px'
                borderColor='gray.200'
                padding='2'
                fontWeight='black'
                justifyContent='center'
                alignItems='center'
                onClick={()=> setSearchFilter((prev)=>!prev)}
            >
                <Text>Search Property By Filter</Text>
                <Icon paddingLeft='2' w='7' as={BsFilter}></Icon>
            </Flex>
            {searchFilter && <SearchFilter />}

            <Text fontSize='2xl' p='4' fontWeight='bold'>
                Properties {router.query.purpose}
            </Text>

            <Flex flexWrap='wrap'>
                {properties.map((property)=><Property property={property} key={property.id}/>)}
            </Flex>
            {properties.length === 0 && (<Flex justifyContent='center' alignItems='center' flexDirection='column' marginTop='5' marginBottom='5'>
                <Image alt='noresult' src={noresult }/>
                <Text fontSize='4xl' marginTop='3'>Oops, Results not found!</Text>
            </Flex>)}
        </Box>
    )
}
export async function getServerSideProps({ query }){
    const purpose = query.purpose || 'for-rent'
    const rentFrequency = query.rentFrequency || 'yearly'
    const minPrice = query.minPrice || '0'
    const maxPrice = query.maxPrice || '1000000'
    const roomsMin = query.roomsMin || '0'
    const bathsMin = query.bathsMin || '0'
    const sort = query.sort || 'pricc-desc'
    const areaMax = query.areaMax || '35000'
    const locationExternalIDs = query.locationExternalIDs || '5002' 
    const categoryExternalIDs = query.categoryExternalIDs || '4'
    
    const data = await fetchAPI(`${baseURL}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalIDs}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`)

    return {
        props: {
            properties: data?.hits
        }
    }
}