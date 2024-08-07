import {
  Box,
  Flex,
  Text,
  IconButton,
  Link,
  Button,
  Icon,
  Stack,
  Image,
  InputGroup,
  InputRightElement,
  Input,
  InputLeftElement,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuDivider,
  MenuItem,
} from "@chakra-ui/react";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Navbar = () => {
  return (
    <Box h={"15vh"} shadow={"md"}>
      <Flex h="100%" direction="column">
        <Flex h={"60%"} alignItems={"center"} justifyContent={"space-around"}>
          {/* 1 */}
          <Flex w={"33%"} alignItems={"center"} justifyContent={"center"}>
            <Image h={100} src="/YourLogoHere.png" objectFit="contain" />
          </Flex>

          {/* 2 */}
          <Flex w={"33%"} alignItems={"center"} justifyContent={"center"}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchRoundedIcon color="gray.300" />
              </InputLeftElement>
              <Input
                rounded={"full"}
                type="text"
                placeholder="Rechercher ..."
              />
            </InputGroup>
          </Flex>

          {/* 3 */}
          <Flex w={"33%"} alignItems={"center"} justifyContent={"center"}>
            <Stack direction={"row"}>
              <IconButton aria-label="Cart" icon={<ShoppingBagRoundedIcon />} />
              <IconButton
                aria-label="Favorites"
                icon={<FavoriteRoundedIcon />}
              />

              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Profile"
                  icon={<PersonRoundedIcon />}
                />
                <MenuList>
                  <MenuGroup title="Profil">
                    <MenuItem>Mon Profil</MenuItem>
                    <MenuItem>Mes Commandes</MenuItem>
                    <MenuDivider />
                    <MenuItem>Déconnexion</MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>

        <Flex h={"40%"} alignItems="center" justifyContent="space-around">
          <Flex w={"33%"} alignItems={"center"} justifyContent={"center"}>
            <Tabs
              defaultIndex={"none"}
              variant="soft-rounded"
              colorScheme="gray"
            >
              <TabList>
                <Tab>Men</Tab>
                <Tab>Women</Tab>
                <Tab>Children</Tab>
                <Tab>Accessories</Tab>
              </TabList>
            </Tabs>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
