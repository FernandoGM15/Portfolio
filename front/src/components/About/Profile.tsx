import { Grid, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import FadeIn from "../../assets/Animations/FadeIn";

const Profile = () => {
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
            <Grid container style={{ display: "flex", justifyContent: "center", height: "85vh", marginBottom:"10vh", alignItems: "center" }}>
                <Grid item xs={10}>
                    <Typography fontSize={"45px"} lineHeight={"80px"} textAlign={"center"}>Profile</Typography>
                    <Typography fontSize={"25px"} lineHeight={"40px"} textAlign={"justify"}>
                        I'm a computer systems engineer graduated from Universidad Autónoma de Coahuila, nowadays i'm working in
                        web development using technologies as PHP, JavaScript, HTML, CSS and SQL.
                        I like to help people by creating technological solutions to facilitate their activities,
                        In my free times i like to learn from new technologies and play videogames.
                    </Typography>
                </Grid>
            </Grid>
        </motion.div>
    )
}

export default Profile;