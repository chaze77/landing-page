import React from "react";
import { StyledContainer } from "../../globalstyle/GlobalTheme";
import ControlledAccordions from "./AccordionComponent";
import { Box, Grid, Typography } from "@mui/material";
import { questionsArray } from "./constants";
import Form from "./Form";
import styles from "./styles.module.css";
import FAQ from "../../assets/FAQ.png";

const Questions = () => {
  return (
    <section style={{ position: "relative" }}>
      <Box>
        <img className={styles.faq} src={FAQ} alt="" />
      </Box>
      <StyledContainer fixed className={styles.container}>
        <Grid container spacing={0} alignItems="flex-start">
          {/* First column: Frequently Asked Questions */}
          <Grid item xl={7.5} lg={7.5} md={6} sm={12} xs={12} container>
            <Grid item xs={12}>
              <Typography
                className={styles.title}
                sx={{
                  display: {
                    xl: "block",
                    lg: "block",
                    md: "none",
                    sm: "block",
                    xs: "block",
                  },
                }}
              >
                Часто задаваемые вопросы
              </Typography>
              <Typography className={styles.text}>
                Maecenas ut magna netus purus enim. Et sit est arcu facilisi
                tortor ipsum sem. Neque porta morbi ullamcorper blandit libero
                quam ligula ut aenean.{" "}
              </Typography>
            </Grid>
            {questionsArray.map((question) => (
              <Grid
                item
                xl={6}
                lg={6}
                md={12}
                sm={12}
                xs={12}
                sx={{ mb: "5px" }}
                key={question.id}
              >
                <ControlledAccordions
                  title={question.title}
                  text={question.details}
                />
              </Grid>
            ))}
          </Grid>

          {/* Second column: Form */}
          <Grid item xs={12} sm={12} md={6} lg={4.5} xl={4.5}>
            <Form />
          </Grid>
        </Grid>
      </StyledContainer>
    </section>
  );
};

export default Questions;
