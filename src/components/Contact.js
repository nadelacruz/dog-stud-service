import { Image } from "@chakra-ui/image";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/layout";

const Contact = () => {
  return (
    <Box color="teal" textAlign="center">
      <Grid height="60vh">
        <GridItem alignSelf="center" margin="auto">
          <Heading fontSize="4xl" padding="20px">
            You can reach us at these numbers.
          </Heading>
          <Text fontSize="2xl">Nico Dela Cruz - 09267228111</Text>
          <Text fontSize="2xl">Niña Dela Cruz - 09265208244</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Contact;
