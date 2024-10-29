
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import SidebarItems from "./SidebarItems";
import CreatePost from "./CreatePost";
import useLogout from "../../hooks/useLogout";
import { BiLogOut } from "react-icons/bi";
import { useState } from "react";

const ProfileBar = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogoutClick = () => {
    handleLogout();
    setIsLoggedOut(true);
  };

  if (isLoggedOut) {
    return null;
  }

  return (
    <>
      {/* TopBar */}
      <Box
        position={"fixed"}
        top={0}
        left={0}
        width={"100%"}
        backgroundColor={"#000"}
        color={"#fff"}
        padding={4}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        zIndex={1000}
        maxWidth={"100vw"}
        minHeight={"60px"}
        maxHeight={"60px"}
        borderBottom={"1px solid #fff"}
      >
        <Flex direction={"row"} gap={20} marginLeft={5}>
          <RouterLink to="/home">
            <Text fontSize={20} fontWeight={600}>PSITHUB</Text>
          </RouterLink>
        </Flex>
        <Flex direction={"row"} gap={20} marginRight={5}>
          <CreatePost />
          <Flex
            cursor={"pointer"}
            onClick={handleLogoutClick}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <BiLogOut size={24} color={"#fff"} />
            <Text fontSize={16} fontWeight={500} color={"#fff"} marginLeft={2}>
              Logout
            </Text>
          </Flex>
        </Flex>
      </Box>

      {/* BottomBar */}
      <Box
        position={"fixed"}
        bottom={0}
        left={0}
        width={"100%"}
        backgroundColor={"#000"}
        color={"#fff"}
        padding={8}
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        zIndex={1000}
        maxWidth={"100vw"}
        minHeight={"60px"}
        maxHeight={"60px"}
        borderTop={"1px solid #fff"}
      >
        <Flex direction={"row"} justifyContent={"space-around"} width={"100%"}>
          <SidebarItems iconSize={24} />
        </Flex>
      </Box>
    </>
  );
};

export default ProfileBar;




