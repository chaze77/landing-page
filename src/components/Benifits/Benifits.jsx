import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { methodArray } from "./constants";
import styles from "./styles.module.css";
import { StyledContainer } from "../../globalstyle/GlobalTheme";

const Benifits = () => {
  return (
    <section>
      <StyledContainer fixed sx={{ mb: "64px" }}>
        <Box>
          <Typography className={styles.title}>Почему выбирают нас?</Typography>
        </Box>
        <Grid container spacing={0} className={styles.gridContainer}>
          {methodArray.map((element, index) => (
            <Grid
              item
              xl={3}
              lg={3}
              md={3}
              sm={6}
              xs={6}
              className={styles.gridItems}
            >
              <Box
                key={element.id}
                className={styles.boxItems}
                sx={{
                  borderRight: {
                    xl:
                      index === methodArray.length - 1
                        ? "none"
                        : "1px solid #d9d9d9",
                    lg:
                      index === methodArray.length - 1
                        ? "none"
                        : "1px solid #d9d9d9",
                    md:
                      index === methodArray.length - 1
                        ? "none"
                        : "1px solid #d9d9d9",
                    sm: "none",
                    xs: "none",
                  },
                  borderBottom: {
                    xl: "none",
                    lg: "none",
                    md: "none",
                    sm:
                      index === 0 || index === 1 ? "1px solid #d9d9d9" : "none",
                    xs:
                      index === 0 || index === 1 ? "1px solid #d9d9d9" : "none",
                  },
                }}
              >
                <img
                  src={element.image}
                  className={styles.firstImage}
                  alt="card-logo"
                />
                <Typography className={styles.text}>{element.text}</Typography>
                <img src={element.arrowpic} alt="arrow" />
              </Box>
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </section>
  );
};

export default Benifits;
