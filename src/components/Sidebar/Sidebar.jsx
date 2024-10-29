import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import SidebarItems from "./SidebarItems";
import Notifications from "./Notifications";

const BottomBar = () => {
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
          <Notifications />
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

export default BottomBar;









