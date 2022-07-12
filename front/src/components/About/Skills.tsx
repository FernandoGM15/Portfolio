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
                <Grid container xs={12} lg={10} columnSpacing={6}>
                    <Grid item xs={12}>
                        <Typography fontSize={"50px"} lineHeight={"75px"} textAlign={"center"}>Skills</Typography>
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
                    <Grid item xs={12} lg={6}>
                        <Typography fontSize={"35px"} lineHeight={"40px"} textAlign="center">Frameworks</Typography>
                        <hr />
                        <Box style={{display: "flex",alignItems:"center"}}>
                            <Typography width="50%" display="inline" fontSize={"25px"} lineHeight={"40px"}>Laravel</Typography>
                            <Box width="50%" justifyContent="space-between" display="flex"><Star /><Star /><Star /><Star /><StarHalf/></Box>
                        </Box>
                        <Box style={{display: "flex",alignItems:"center"}}>
                            <Typography display="inline" fontSize={"25px"} width="50%" lineHeight={"40px"}>React</Typography>
                            <Box width="50%" justifyContent="space-between" display="flex" ><Star /><Star /><Star /><StarOutline/><StarOutline/></Box>
                        </Box>
                        <Box style={{display: "flex",alignItems:"center"}}>
                            <Typography display="inline" fontSize={"25px"} width="50%" lineHeight={"40px"}>Angular</Typography>
                            <Box width="50%" justifyContent="space-between" display="flex" ><Star /><Star /><Star /><StarOutline/><StarOutline/></Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Typography fontSize={"35px"} lineHeight={"40px"} textAlign="center">Tools</Typography>
                        <hr />
                        <Box style={{display: "flex",alignItems:"center"}}>
                            <Typography width="50%" display="inline" fontSize={"25px"} lineHeight={"40px"}>Linux</Typography>
                            <Box width="50%" justifyContent="space-between" display="flex"><Star /><Star /><Star /><Star /><StarHalf /></Box>
                        </Box>
                        <Box style={{display: "flex",alignItems:"center"}}>
                            <Typography display="inline" fontSize={"25px"} width="50%" lineHeight={"40px"}>Docker</Typography>
                            <Box width="50%" justifyContent="space-between" display="flex" ><Star /><Star /><Star /><StarHalf /><StarOutline/></Box>
                        </Box>
                        <Box style={{display: "flex",alignItems:"center"}}>
                            <Typography display="inline" fontSize={"25px"} width="50%" lineHeight={"40px"}>Git</Typography>
                            <Box width="50%" justifyContent="space-between" display="flex" ><Star /><Star /><Star /><Star /><StarHalf/></Box>
                        </Box>
                        <Box style={{display: "flex",alignItems:"center"}}>
                            <Typography display="inline" fontSize={"25px"} width="50%" lineHeight={"40px"}>OOP</Typography>
                            <Box width="50%" justifyContent="space-between" display="flex" ><Star /><Star /><Star /><Star /><StarHalf/></Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Typography fontSize={"35px"} lineHeight={"40px"} textAlign="center">Databases</Typography>
                        <hr />
                        <Box style={{display: "flex",alignItems:"center"}}>
                            <Typography width="50%" display="inline" fontSize={"25px"} lineHeight={"40px"}>MySql</Typography>
                            <Box width="50%" justifyContent="space-between" display="flex"><Star /><Star /><Star /><Star /><StarHalf/></Box>
                        </Box>
                        <Box style={{display: "flex",alignItems:"center"}}>
                            <Typography display="inline" fontSize={"25px"} width="50%" lineHeight={"40px"}>MongoDB</Typography>
                            <Box width="50%" justifyContent="space-between" display="flex" ><Star /><Star /><Star /><StarOutline/><StarOutline/></Box>
                        </Box>
                        <Box style={{display: "flex",alignItems:"center"}}>
                            <Typography display="inline" fontSize={"25px"} width="50%" lineHeight={"40px"}>Firebird</Typography>
                            <Box width="50%" justifyContent="space-between" display="flex" ><Star /><Star /><Star /><Star/><StarOutline/></Box>
                        </Box>
                        <Box style={{display: "flex",alignItems:"center"}}>
                            <Typography display="inline" fontSize={"25px"} width="50%" lineHeight={"40px"}>PostgreSQL</Typography>
                            <Box width="50%" justifyContent="space-between" display="flex" ><Star /><Star /><Star /><Star/><StarOutline/></Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </motion.div >

    )
}

export default Skills;