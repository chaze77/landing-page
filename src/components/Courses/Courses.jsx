import { Box, Card, Container, Typography, Button, Grid } from "@mui/material";
import React from "react";
import { coursesArray } from "./constants";
import styles from "./styles.module.css";
import { StyledContainer } from "../../globalstyle/GlobalTheme";

const Courses = () => {
  return (
    <section>
      <StyledContainer
        fixed
        sx={{
          mb: { xl: "143px", lg: "143px", md: "70px", sm: "70px", xs: "35px" },
        }}
      >
        <Box>
          <Typography className={styles.title}>Наши курсы</Typography>
        </Box>

        <Grid container spacing={0}>
          {coursesArray.map((course, index) => (
            <Grid
              item
              key={course.id}
              xl={4}
              lg={4}
              md={6}
              sm={12}
              xs={12}
              sx={{
                // border: "1px solid red",
                padding: "0px 16px 0px 0px",
                mb: "10px",
              }}
            >
              <Card className={styles.card}>
                <Box className={styles.courseNameContainer}>
                  <Typography className={styles.nameOfCourse}>
                    {course.nameOfCourse}
                  </Typography>
                  <Typography className={styles.detailsOfCourse}>
                    {course.detailsOfCourse}
                  </Typography>
                </Box>
                <Box className={styles.courseInformationContainer}>
                  <Typography className={styles.countOfCourse}>
                    {course.countOfCourse}
                  </Typography>
                  {course.courseInfo.map((info, idx) => (
                    <Box key={idx} className={styles.boxLabels}>
                      <Typography
                        component="span"
                        className={styles.courseLabels}
                      >
                        {info.label}
                      </Typography>
                      <Typography
                        component="span"
                        className={styles.courseAnswers}
                      >
                        {info.answer}
                      </Typography>
                    </Box>
                  ))}
                  <Box sx={{ mb: "61px" }}>
                    <Typography className={styles.courseLabels}>
                      {course.labelBonus}{" "}
                      <span className={styles.courseAnswers}>
                        {course.answerBonus}
                      </span>
                    </Typography>
                  </Box>

                  <Box className={styles.boxPrices}>
                    <Typography className={styles.lastPrice}>
                      {course.lastPrice}
                    </Typography>
                    <Typography className={styles.newPrice}>
                      {course.newPrice}
                    </Typography>
                  </Box>
                  <Box className={styles.boxButton}>
                    <Button className={styles.courseButton}>
                      {" "}
                      {course.buttonName}
                    </Button>
                    <Typography className={styles.startCourse}>
                      {course.startCourse}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </section>
  );
};

export default Courses;
