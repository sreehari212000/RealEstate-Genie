import React from 'react'
import { useContext } from 'react'
import Image from 'next/image'
import { Box, Icon, Flex } from '@chakra-ui/react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import 'react-horizontal-scrolling-menu/dist/styles.css';

const LeftArrow = ()=>{
    const {scrollPrev} = useContext(VisibilityContext)
    return (
        <Flex justifyContent='center' alignItems='center' marginRight='1'>
            <Icon as={FaArrowAltCircleLeft}
                onClick={()=>scrollPrev()}
                fontSize='2xl'
                cursor='pointer'
            />
        </Flex>
    )
}

const RightArrow = ()=>{
    const {scrollNext} = useContext(VisibilityContext)
    return (
        <Flex justifyContent='center' alignItems='center' marginRight='1'>
            <Icon as={FaArrowAltCircleRight}
                onClick={()=>scrollNext()}
                fontSize='2xl'
                cursor='pointer'
            />
        </Flex>
    )
}



const ImageScrollbar = ({data}) => {
  return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} itemClassName='ss'>
            {data.map((item)=>(
                <Box key={item.id} width='910px' itemID={item.id} overflow='hidden' p='1'>
                    <Image placeholder='blur' blurDataURL={item.url} src={item.url} width={1000} height={400} alt='property' priority style={{objectFit:'contain', width:'100%', height:'400px'}}
                    sizes='(max-width:500px) 100px, (max-width:1023px) 400px, 1000px' 
                    />
                </Box>
                )
            )}
        </ScrollMenu>
  )
}

export default ImageScrollbar