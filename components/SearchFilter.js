import React, { useState } from 'react'
import { Flex, Select, Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'


import { filterData, getFilterValues } from '@/utils/filterData'

const SearchFilter = () => {
  const router = useRouter()
  const [filters, setfilters] = useState(filterData)


  function searchProperties(filtervalues){
    const path = router.pathname
    const {query} = router
    const values = getFilterValues(filtervalues)
    values.forEach((item)=>{
      if(item.value && filtervalues?.[item.name]){
        query[item.name] = item.value
      }
    })
    router.push({pathname: path, query})
  }


  return (
    <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
      {filters.map((filter)=>{
        return (
          <Box key={filter.queryName}>
            <Select 
              placeholder={filter.placeholder}
              w="fit-content"
              p='2'
              onChange={(e)=>searchProperties({[filter.queryName]: e.target.value})}>
              {filter?.items?.map((item)=>(
              <option value={item.value} key={item.value}>{item.name}</option>
              ))}
            </Select>
          </Box>
        )
      })}
    </Flex>
  )
}

export default SearchFilter