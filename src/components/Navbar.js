import { Box, Grid, GridItem } from "@chakra-ui/layout";
import { FaDog } from "react-icons/fa";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <Box>
      <Grid
        templateColumns="2fr 1fr 1fr 1fr 1fr 1fr 2fr"
        padding="20px"
        borderBottom="1px solid teal"
      >
        <GridItem></GridItem>
        <NavItem text="Home" to="/" />
        <NavItem text="About" to="/" />
        <GridItem color="teal" margin="0 10px">
          <FaDog size="50px" />
        </GridItem>
        <NavItem text="Services" to="/" />
        <NavItem text="Contact" to="/" />
        <GridItem></GridItem>
      </Grid>
    </Box>
  );
};

export default Navbar;
