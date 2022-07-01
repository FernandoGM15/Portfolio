import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction} from "@mui/material";
import "./Networks.css";
import { Box } from "@mui/system";

const Networks = () => {
  return (
    <Box  className="card-networks">
      <BottomNavigation showLabels style={{display:"flex", justifyContent:"space-around"}}>
        <BottomNavigationAction label="Linkedn" icon={<LinkedIn />} target="_blank" href="https://www.linkedin.com/in/fernando-garc%C3%ADa-310317205/"/>
        <BottomNavigationAction label="Facebook" icon={<Facebook />} target="_blank" href="https://www.facebook.com/fernando.garcia.morales.15"/>
        <BottomNavigationAction label="Instagram" icon={<Instagram />} target="_blank" href="https://www.instagram.com/fer_nandogm15/"/>
        <BottomNavigationAction label="GitHub" icon={<GitHub />} target="_blank" href="https://github.com/FernandoGM15"/>
      </BottomNavigation>
    </Box>
  );
};

export default Networks;
