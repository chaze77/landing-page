import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import banner from "../../assets/banner.png";
import styles from "./styles.module.css";
import { StyledContainer } from "../../globalstyle/GlobalTheme";

const MainBanner = () => {
  return (
    <section>
      <StyledContainer
        fixed
        sx={{
          mb: { xl: "142px", lg: "142px", md: "60px", sm: "40px", xs: "40px" },
        }}
      >
        <Grid
          container
          direction="row"
          spacing={0}
          className={styles.gridContainer}
          sx={{ display: "flex", width: "100%" }}
        >
          <Grid item xl={6} lg={6} md={6.5} sm={12}>
            <Box className={styles.bannerBox} component="div">
              <Typography className={styles.bannerTitle}>
                Получи работу программистом{" "}
                <span className={styles.bannerTitleBlue}>в IT компании</span>
              </Typography>
            </Box>

            <Box sx={{ width: "70%", mb: "50px" }}>
              <Typography className={styles.bannerText}>
                Quis fringilla convallis et vitae volutpat at porttitor. Est
                tincidunt massa aliquam sed enim rhoncus. Id nullam sollicitudin
                aliquet in.{" "}
              </Typography>
            </Box>

            <Button variant="standard" className={styles.button}>
              Связаться с нами
            </Button>
          </Grid>
          <Grid item xl={6} lg={6} md={5.5} sm={0}>
            <Box sx={{ display: { md: "block", sm: "none", xs: "none" } }}>
              <img src={banner} alt="banner" />
            </Box>
          </Grid>
        </Grid>
      </StyledContainer>
    </section>
  );
};

export default MainBanner;
