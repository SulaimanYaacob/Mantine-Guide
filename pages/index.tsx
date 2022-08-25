import type { NextPage } from "next";
import {
  ActionIcon,
  Box,
  Group,
  Text,
  Title,
  UnstyledButton,
  Stack,
  useMantineTheme,
} from "@mantine/core";

import { PlayerPlay, Settings, PlaylistAdd, Plus } from "tabler-icons-react";

const Home: NextPage = () => {
  const theme = useMantineTheme();
  return (
    <Group mt="-20px">
      <Stack
        justify={"flex-start"}
        style={{
          backgroundColor: theme.colors.gray[0],
          width: "500px",
          height: "100vh",
        }}
        mx="auto"
      >
        <Group position="apart" style={{ width: "100%" }}>
          <ActionIcon color="gray" size="xl" m="sm" variant="transparent">
            <Settings />
          </ActionIcon>
          <ActionIcon color="gray" size="xl" m="sm" variant="transparent">
            <PlaylistAdd />
          </ActionIcon>
        </Group>
        <Stack mt="sm" mx="auto">
          <Title order={1} style={{ fontWeight: "900", fontSize: "4rem" }}>
            25:00
          </Title>
          <Text>Record Mantine Tutorial</Text>
        </Stack>
        <Group mt="sm" position="center" mx={"auto"} mb="md">
          <ActionIcon color={"dark"} size="xl" variant="transparent">
            -5
          </ActionIcon>
          <ActionIcon radius="xl" color={"dark"} size="xl" variant="filled">
            <PlayerPlay />
          </ActionIcon>
          <ActionIcon color={"dark"} size="xl" variant="transparent">
            +5
          </ActionIcon>
        </Group>
        <Group mt={"sm"} mb="sm" position="center" mx={"auto"}>
          <UnstyledButton style={{ height: "100%", width: "256px" }}>
            <Stack
              p="lg"
              mt={"sm"}
              mx="auto"
              align={"center"}
              spacing="xs"
              style={{
                background: "rgb(238,238,238",
                border: "1px dashed rgb(189,189,189)",
              }}
            >
              <Plus style={{ color: "gray" }}></Plus>
              <Text size={"xs"} color="gray">
                Add Task
              </Text>
            </Stack>
          </UnstyledButton>
        </Group>
        <Group
          mx={"auto"}
          style={{ width: "300px", justifyContent: "space-between" }}
          position="right"
        >
          <Text size="xs">💼Hide Complete</Text>
          <Text size="xs">✅Clear Complete</Text>
          <Text size="xs">🧹Clear All</Text>
        </Group>
      </Stack>
    </Group>
  );
};

export default Home;
