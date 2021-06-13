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
            src="https://lh3.googleusercontent.com/8_kURm8HZtYW2FG_JPqWE3ZrDTbi3uX8SX_-wlgkV5YNhUUmDZXeuIzIwJ1Why0r_OhMtMc733kHTwBnxlG4cgBKjbpYzw-lt_6LDVg6Voklw4GAXpm7oEntL3_crdPiq1uJ-5dnmHhueZ4XzL5zZFLP1O6O-LUvP7DnzjWGMJWCkm2F-bBWAaOn8I9W30Nsad2BereQ_iOypqI7u27mrygzzowqv9woVN5os81khpsSdvFCS1Jvwu5OoriZFB32nW2kPw2FO-0NB_f83u-CTiepxI9Q8P1tTbVxB3tSgRPFf0RktI0i9EF0-rTl-yhfanKbqULl0_-yCNCaMe6Sh41aBidyZLiZzt5iMrEpSqDLAfDK0kNLdpxCg26ePapb1m_T48PtIPmBxWGQOgQ7U4weJpG-u8sXxWC_ULD6NP3WFP6UUnYB6EMO4P71qBUl5aB9ma2aLsywqsPBMy8Rrn0w5v-fNUVR-qFI4sw3VjPvmUaoMyGI1X3WulxBsZ9ssHaFZIP1xh9PDIRt3W7mBJ4Mg_UZ-Sn31LU9gXMbcdGzELE4EGrICrNDoNihss0mAia2hJG9maHitmD13h0kPJwuJT-mY3jxL37bV7RSfcxGlNYOy7DQcQwAqdWxq6uZRyK2gyRYTomhiPcnzEzNMC_VKq2g2hQfkOXoi8IqKr1yOFEM-AnQHbNIhN7Gb0z3IZIvkQ1QCY1foIBdsDZ0NB6Q=w852-h637-no?authuser=0"
          />
        </GridItem>
        <GridItem justifySelf="center" textAlign="center" margin="auto 30px">
          <Text color="teal" fontSize="2xl">
            Eevee is a full breed Shih-poo who will help make your future
            puppies! Contact us now.
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Home;
