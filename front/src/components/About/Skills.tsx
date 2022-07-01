import { Grid, Typography, Box } from "@mui/material";
import { Star, StarHalf, StarOutline } from "@mui/icons-material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import FadeIn from "../../assets/Animations/FadeIn";

const Skills = () => {
    const controls = useAnimation();

    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
        else {
            controls.start("hidden")
        }
    }, [controls, inView]);

    return (

        <motion.div ref={ref} initial="hidden" animate={controls} variants={FadeIn}>
            <Box style={{ justifyContent: "center", display: "flex", alignItems: "center", height:"100vh", margin:"5rem;"}}>
                <Grid container xs={10} lg={8}>
                    <Grid item xs={12}>
                        <Typography fontSize={"50px"} lineHeight={"75px"} textAlign={"center"}>Skills</Typography>
                        <hr />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Typography fontSize={"35px"} lineHeight={"40px"} textAlign="center">Languages</Typography>
                        <hr />
                        <Box style={{display: "flex",alignItems:"center"}}>
                            <Typography width="50%" display="inline" fontSize={"25px"} lineHeight={"40px"}>PHP</Typography>
                            <Box width="50%" justifyContent="space-between" display="flex"><Star /><Star /><Star /><Star /><Star /></Box>
                        </Box>
                        <Box style={{display: "flex",alignItems:"center"}}>
                            <Typography display="inline" fontSize={"25px"} width="50%" lineHeight={"40px"}>JavaScript</Typography>
                            <Box width="50%" justifyContent="space-between" display="flex" ><Star /><Star /><Star /><Star /><StarOutline/></Box>
                        </Box>
                        <Box style={{display: "flex",alignItems:"center"}}>
                            <Typography display="inline" fontSize={"25px"} width="50%" lineHeight={"40px"}>Python</Typography>
                            <Box width="50%" justifyContent="space-between" display="flex" ><Star /><Star /><Star /><StarHalf /><StarOutline/></Box>
                        </Box>
                        <Box style={{display: "flex",alignItems:"center"}}>
                            <Typography display="inline" fontSize={"25px"} width="50%" lineHeight={"40px"}>Java</Typography>
                            <Box width="50%" justifyContent="space-between" display="flex" ><Star /><Star /><Star /><StarHalf /><StarOutline/></Box>
                        </Box>
                        <Box style={{display: "flex",alignItems:"center"}}>
                            <Typography display="inline" fontSize={"25px"} width="50%" lineHeight={"40px"}>C#</Typography>
                            <Box width="50%" justifyContent="space-between" display="flex" ><Star /><Star /><Star /><StarOutline/><StarOutline/></Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </motion.div >

    )
}

export default Skills;