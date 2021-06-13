import { GridItem } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

const NavItem = (props) => {
  return (
    <GridItem color="teal" margin="0 10px" alignSelf="center">
      <Link to={props.to}>{props.text}</Link>
    </GridItem>
  );
};

export default NavItem;
