import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import videopic from "../../assets/video.png";
import ellipse from "../../assets/ellipse.png";
import stars from "../../assets/stars.png";
import { StyledContainer } from "../../globalstyle/GlobalTheme";
import styles from "./styles.module.css";
import left from "../../assets/buttonleft.png";
import right from "../../assets/buttonright.png";

const Students = () => {
  return (
    <section>
      <StyledContainer
        fixed
        sx={{
          mb: { xl: "106px", lg: "106", md: "50px", sm: "50px", xs: "50px" },
        }}
      >
        <Box>
          <Typography className={styles.title}>
            Что говорят наши студенты
          </Typography>
        </Box>
        <Grid container sx={{ mb: "34px" }}>
          <Grid
            item
            xl={6.8}
            lg={6.8}
            md={12}
            sm={12}
            xs={12}
            sx={{
              display: {
                xl: "block",
                lg: "block",
                md: "none",
                sm: "none",
                xs: "none",
              },
            }}
          >
            <img src={videopic} alt="video" className={styles.video} />
          </Grid>
          <Grid item xl={0.2} lg={0.2}></Grid>
          <Grid item xl={5} lg={5}>
            <Box className={styles.information}>
              <Box className={styles.studentInfo}>
                <img
                  src={ellipse}
                  alt="profile"
                  className={styles.studentPicture}
                />
                <Box className={styles.studentInfoDetails}>
                  <Typography className={styles.studentName}>
                    Андрей Соломонов
                  </Typography>
                  <img src={stars} alt="stars" />
                </Box>
              </Box>
              <Box>
                <Typography className={styles.text}>
                  Eu facilisis duis pulvinar dui sapien vestibulum. Praesent sed
                  ridiculus iaculis eget egestas blandit euismod. Ligula
                  senectus egestas cras risus sodales commodo. Enim nec neque
                  sodales quis sit massa posuere. Id eget ultrices tempus sit id
                  donec feugiat. Congue aliquet tristique egestas dictum
                  tincidunt ac. Odio varius sit dignissim justo. Dui sapien
                  aliquet aliquam quis et tellus velit bibendum. Quis pretium
                  vitae suspendisse at. Iaculis eu convallis egestas a mattis
                  viverra. Id leo sollicitudin matti <br />
                  <br />
                  Id nullam sollicitudin aliquet in morbi fermentum sit aenean.
                  Diam lectus vitae pretium dolor. Et sollicitudin fermentum
                  pulvinar ut. Viverra faucibus molestie maecenas elementum
                  mauris. Volutpat.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box className={styles.arrows}>
          <Box>
            <Button>
              <img src={left} alt="left" />
            </Button>
            <Button>
              {" "}
              <img src={right} alt="right" />
            </Button>
          </Box>

          <Box className={styles.lastArrowBox}>
            <Button>
              <img src={left} alt="left" />
            </Button>
            <Button>
              {" "}
              <img src={right} alt="right" />
            </Button>
          </Box>
        </Box>
      </StyledContainer>
    </section>
  );
};

export default Students;
