import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box color="teal" textAlign="center">
      <Grid height="60vh">
        <GridItem alignSelf="center" margin="auto">
          <Heading fontSize="4xl" padding="20px">
            Error 404.
          </Heading>
          <Text fontSize="2xl" padding="20px" paddingTop="0">
            The directory you are in is not found.
          </Text>
          <Link to="/">
            <Text>Go to home.</Text>
          </Link>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default NotFound;
