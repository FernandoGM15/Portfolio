import { Grid, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import FadeIn from "../../assets/Animations/FadeIn";

const Presentation = () => {

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
        <motion.div ref={ref} animate={controls} variants={FadeIn}>
            <Grid
                container
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh"
                }}
            >
                <Grid item xs={12} lg={10} >
                    <Typography
                        sx={{ fontSize: "45px", lineHeight: "80px" }}
                        textAlign="center"
                    >
                        Hello World!
                    </Typography>
                    <Typography
                        sx={{ fontSize: "25px", lineHeight: "40px" }}
                        textAlign="justify"
                    >
                        My name is Luis Fernando García Morales, i'm a full stack web
                        developer interested on keep learning all the new technologies that
                        may be useful to expand my professional skills.
                    </Typography>
                </Grid>
            </Grid>
        </motion.div>
    )
}
export default Presentation;