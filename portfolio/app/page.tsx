import { Container, Flex, MantineThemeOverride, MantineThemeProviderProps, Space, Text } from "@mantine/core";
import GitHubIcon from "../public/skill-icons-github-dark.svg"
import NextIcon from "../public/skill-icons-nextjs-light.svg"
import ReactIcon from "../public/skill-icons-react-light.svg"
import JavaScriptIcon from "../public/skill-icons-javascript.svg"
import TypeScriptIcon from "../public/skill-icons-typescript.svg"

// https://icones.js.org/
export default function Page(){

    return <main>
        <Container p={45}>
          <Text size="xl">Hello World!</Text>
          <Text size="sm">
            はじめまして！私は泡沫といいます！もちろん本名は別にありますが、<br />
            ここでは泡沫と名乗っています！このサイトは私のポートフォリオサイトです！<br />
            このサイトはNext.jsとMantineを使用して作成しました！<br />
            また、このサイトはVercelでホスティングしています！<br />
            また、コンポーネントはplopで自動生成し、<br />
            そのコンポーネントをStorybookで管理しています！<br />
          </Text>
          <Space h="xs" />
          <Text size="xl">今回使用した主なライブラリ・フレームワーク</Text>
          <Flex gap={15}>
            <GitHubIcon 
            width={50}
            height={50}
            />
            <NextIcon 
            width={50}
            height={50}/>
            <ReactIcon 
            width={50}
            height={50}/>
            <JavaScriptIcon 
            width={50}
            height={50}/>
            <TypeScriptIcon 
            width={50}
            height={50}/>
          </Flex>

        </Container>
    </main>
}