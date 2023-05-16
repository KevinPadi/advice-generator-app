import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Text,
  Flex,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { IconDice } from "./assets/icons/IconDice";
import { useState, useEffect } from "react";
// import { DividerPattern } from "./assets/icons/DividerPattern";

function App() {
  const [data, setData] = useState(null);

  const handleClick = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <Flex justify="center" align="center" mt={150}>
      <Card
        borderRadius={18}
        bg="hsl(217, 19%, 24%)"
        textAlign="center"
        w={{ base: "400px", md: "550px" }}
        p={5}
      >
        <CardHeader>
          <Heading
            letterSpacing={3}
            fontSize={"xs"}
            color="hsl(150, 100%, 66%)"
          >
            {data === null ? "ADVICE #" : `ADVICE # ${data.slip.id}`}
          </Heading>
        </CardHeader>
        <CardBody>
          <Text fontSize={28} fontWeight={800} color="hsl(193, 38%, 86%)">
            {data === null ? "“”" : `“${data.slip.advice}”`}
          </Text>
        </CardBody>
        <CardFooter
          position="relative"
          display="flex"
          justify="center"
          align="center"
          pb={16}
        >
          <Image
            src="/src/assets/images/pattern-divider-desktop.svg"
            alt="Divider"
          />
          <IconButton
            onClick={handleClick}
            bottom="-3rem"
            margin="auto"
            position="absolute"
            size="xl"
            isRound="true"
            bg="hsl(150, 100%, 66%)"
            transition="filter 0.1s ease-in-out"
            _active={{
              transform: "scale(0.9)",
            }}
            _hover={{
              bg: "hsl(150, 100%, 66%)",
              filter: "drop-shadow(0 0 1em hsl(150, 100%, 66%))",
            }}
            aria-label="Search database"
            icon={<IconDice />}
          />
        </CardFooter>
      </Card>
    </Flex>
  );
}
export default App;
