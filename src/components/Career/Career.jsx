import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { descriptionsArray } from "./constants";
import styles from "./styles.module.css";
import { StyledContainer } from "../../globalstyle/GlobalTheme";

const Career = () => {
  return (
    <StyledContainer fixed className={styles.container}>
      <Box className={styles.innerContainer}>
        <Box>
          <Typography className={styles.title}>
            Почему стоит задуматься о карьере в IT?
          </Typography>
        </Box>
        <Grid container spacing={0}>
          {descriptionsArray.map((el) => (
            <Grid
              item
              key={el.id}
              sx={{
                display: "flex",
                padding: {
                  xl: "32px 36px 32px 20px",
                  lg: "32px 36px 32px 20px",
                  md: "16px 36px 16px 0px",
                  sm: "16px 36px 16px 0px",
                  xs: "8px 18px 8px 0px",
                },
              }}
              xl={6}
              lg={6}
              md={6}
              sm={12}
              xs={12}
            >
              <img className={styles.arrow} src={el.pic} alt="" />
              <Typography className={styles.text}>{el.text}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </StyledContainer>
  );
};

export default Career;
