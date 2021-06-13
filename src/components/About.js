import { Image } from "@chakra-ui/image";
import { Box, Grid, GridItem, Heading, Text, Flex } from "@chakra-ui/layout";

const About = () => {
  return (
    <Box>
      <Heading fontSize="4xl" textAlign="center" color="teal" marginTop="20px">
        The Shih-Poo
      </Heading>
      <Grid>
        <GridItem justifySelf="center" margin="30px auto">
          <Image
            src="https://i.ibb.co/WDYM8bN/IMG-20201228-100138.jpg"
            borderRadius="full"
          />
        </GridItem>
        <GridItem
          justifySelf="center"
          maxWidth="900px"
          color="teal"
          margin="auto 30px"
        >
          <Text fontSize="2xl">
            The Shih-Poo are small, hypoallergenic and cuddly companions, these
            pups inherited some of the best qualities from both of their
            parents.
            <br />
            <br />
            Shih-Poos also go by the names Shoodle or Pooshi, but don’t confuse
            them with the Poo-Shi, the Poodle/Shiba Inu mix. Despite their
            status as a designer breed, you may find these mixed breed dogs in
            shelters and rescues. So remember to adopt! Don’t shop!
            <br />
            <br />
            Shih-Poos make great companion animals for just about anyone, but a
            retired senior would most likely be an ideal match. They love to be
            doted on, pampered, and loved. They are pretty versatile and can
            thrive in almost any environment–family home, apartment, or tiny
            house in the middle of nowhere.
            <br />
            <br />
            Single person, or family, just make sure your Shih-Poo gets lots of
            love and attention. Shih-Poos should never be kept outside and will
            require regular vet check ups, dental cleanings, and grooming.
            Frequent potty breaks can also help if they inherit their Shih Tzu
            parents’ propensity for stubbornness and territorial marking.
          </Text>
          <Flex justifyContent="flex-end">
            <Box>
              <Text as="i">- https://dogtime.com/dog-breeds/shih-poo</Text>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default About;
