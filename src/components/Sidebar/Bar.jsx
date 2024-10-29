import { Box, Button, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import SidebarItems from "./SidebarItems";

const Bar = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  return (
    <>
      {/* Top Bar */}
      <Box
        position={"fixed"}
        top={0}
        left={0}
        width={"100%"}
        backgroundColor={"#000"}
        color={"#fff"}
        padding={4}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        zIndex={1000}
        maxWidth={"100vw"}
        minHeight={"60px"}
        maxHeight={"60px"}
      >
        <Flex direction={"row"} gap={5}>
          <h1>PSITHUB</h1>
        </Flex>
      </Box>

      {/* Bottom Bar */}
      <Box
        position={"fixed"}
        bottom={0}
        left={0}
        width={"100%"}
        backgroundColor={"#333"}
        color={"#fff"}
        padding={4}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        zIndex={1000}
        maxWidth={"100vw"}
        minHeight={"60px"}
        maxHeight={"60px"}
      >
        <Flex direction={"row"} gap={5}>
          <SidebarItems />
        </Flex>
        <Tooltip hasArrow label={"Logout"} placement='right' ml={1} openDelay={500}>
          <Flex onClick={handleLogout} alignItems={"center"} gap={4} _hover={{ bg: "whiteAlpha.400" }} borderRadius={6} p={2} justifyContent={{ base: "center", md: "flex-start" }}>
            <BiLogOut size={25} />
          </Flex>
        </Tooltip>
      </Box>
    </>
  );
};

export default Bar;
