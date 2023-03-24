import Link from "next/link"
import Image from "next/image"
import { Flex, Box, Text, Button } from "@chakra-ui/react"
import { baseURL, fetchAPI } from "@/utils/fetchApi"
import Property from "@/components/Property"

const Banner = ({purpose, title1, title2, linkName, buttonText, desc1, desc2, imageUrl})=>(
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
      <Image width={500} height={300} src={imageUrl} alt='banner'/> 
      <Box p='5'> {/*div in html*/}
        <Text color='gray.500' fontSize='small' fontWeight='medium'>{purpose}</Text>  
        <Text fontSize='3xl' fontWeight='bold'>{title1}<br /> {title2}</Text>  
        <Text fontSize='lg' fontWeight='medium' paddingTop='3' paddingBottom='3' color='gray.700'>{desc1}<br/>{desc2}</Text>  
        <Button fontSize='xl'>
          <Link href={linkName}>{buttonText}</Link>
       </Button>
      </Box>
  </Flex>
)

export default function Home({propertiesForRent, propertiesForSale}) {
  return (
    <Box marginTop='16'>
      <Banner 
        purpose='RENT A HOME' 
        title1='Rent homes for'
        linkName='/search?purpose=for-rent'
        title2='Everyone'
        desc1='Explore Appartments, villas, Homes'
        desc2='and more'
        buttonText='Explore Renting'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
        />
        <Flex flexWrap='wrap'>
          {propertiesForRent.map((property)=>{
            return <Property property={property} key={property.id}/>
          })}
        </Flex>
      <Banner 
        purpose='BUY A HOME' 
        title1='Find Buy and Own your'
        linkName='/search?purpose=for-sale'
        title2='Dream Home'
        desc1='Explore Appartments, villas, Homes'
        desc2='and more'
        buttonText='Explore Buying'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
        />
        <Flex flexWrap='wrap'>
          {propertiesForSale.map((property)=>{
            return <Property property={property} key={property.id}/>
          })}
        </Flex>
    </Box>
  )
}

export async function getStaticProps(){
  const propertiesForSale = await fetchAPI(`${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertiesForRent = await fetchAPI(`${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props:{
      propertiesForSale: propertiesForSale?.hits,
      propertiesForRent: propertiesForRent?.hits
    }
  }
}