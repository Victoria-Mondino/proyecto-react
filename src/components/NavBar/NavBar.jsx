import { Link } from "react-router-dom";

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, ChevronDownIcon } from '@chakra-ui/icons'

import { CartWidet } from '../CartWidget/CartWidget';
import { useGetAllCategories } from '../../hooks/useGetAllCategories';



export const  NavBar= () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {categories} = useGetAllCategories();


  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

        <Box>
          <Link to="/">Fusion</Link> 
        </Box>

        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Categorias
            </MenuButton>
            <MenuList height={"300px"} overflowY={"scroll"}>
              {
                categories.map((category) => {
                  return <MenuItem key={category.slug}><Link to={`/category/${category.slug}`}>{category.name} </Link></MenuItem>
                  }    
                )
              }
            </MenuList>
        </Menu>

          <Flex alignItems={'center'}>
            <CartWidet />
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://img.freepik.com/fotos-premium/icono-3d-abstracto-que-representa-perfil-usuario_1057-196704.jpg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://i.etsystatic.com/9277560/r/il/290262/2460707032/il_fullxfull.2460707032_lqvo.jpg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}