import { Grid, Typography } from "@mui/material";
import Profile from "../../assets/img/profile.jpg";
import CursorText from "../../assets/img/cursor-text.gif";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import FadeIn from "../../assets/Animations/FadeIn";

const Intro = () => {
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
            <Grid container style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "85vh", marginBottom: "10vh" }}>
                <Grid item xs={10} md={4} lg={4}>
                    <img
                        src={Profile}
                        className="profile"
                        alt="profile"
                        style={{ cursor: "text" }}
                    />
                </Grid>
                <Grid item xs={12} md={10} lg={3} style={{ textAlign: "center" }}>
                    <Typography variant="h4" sx={{ fontFamily: "Inconsolata" }}>
                        Hi, i'm Fernando
                        <img className="cursor-text" src={CursorText} alt="cursor-text" />
                    </Typography>
                    <Typography variant="h6" sx={{ fontFamily: "Inconsolata" }}>
                        Full stack developer
                    </Typography>
                    <Typography variant="body1" sx={{ fontFamily: "Inconsolata" }}>
                        "Learn from the real projects"
                    </Typography>
                </Grid>
            </Grid>
        </motion.div>
    );
}
export default Intro;