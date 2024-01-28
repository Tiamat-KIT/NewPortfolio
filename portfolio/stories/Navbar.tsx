"use client"
import "./Navbar.css"
import { Box, Center, Flex, Group,Text } from "@mantine/core";
export default function Navbar(){
    // https://step-learn.com/article/html-css/044-radius-top-down.html
    const borderRadius = "0px 0px 30% 30%"
    return (
        <nav style={{borderRadius,borderWidth: 2}}>
            <Flex
                mih={50}
                gap={175}
                justify="center"
                align="center"
                direction="row"
                wrap="wrap">
                <Box>
                    <Text size="xl">Home</Text>
                </Box>
                <Box>
                    <Center>
                        <Text size="xl">Portfolio</Text>
                    </Center>
                </Box>
                <Box>
                    <Text size="xl">New</Text>
                </Box>
            </Flex>
        </nav>
    )
}