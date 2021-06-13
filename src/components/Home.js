import { Image } from "@chakra-ui/image";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/layout";

const Home = () => {
  return (
    <Box>
      <Heading textAlign="center" fontSize="4xl" color="teal" padding="20px">
        Welcome to Eevee's Stud Service.
      </Heading>
      <Grid>
        <GridItem justifySelf="center" marginBottom="20px">
          <Image
            htmlWidth="500px"
            borderRadius="full"
            src="https://i.ibb.co/NNxCwtx/00000-IMG-00000-BURST20190628153201023-COVER-01.jpg"
          />
        </GridItem>
        <GridItem justifySelf="center" textAlign="center" margin="auto 30px">
          <Text color="teal" fontSize="2xl">
            Eevee is a mixed breed dog — a cross between the Shih Tzu and Toy
            Poodle dog breed. He will help make your future puppies! Contact us
            now.
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Home;
