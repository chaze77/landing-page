import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useRef } from "react"; // Импортируем useRef
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledContainer } from "../../globalstyle/GlobalTheme";
import styles from "./styles.module.css";
import left from "../../assets/buttonleft.png";
import right from "../../assets/buttonright.png";
import BasicRating from "./Ratings";
import { studentsData } from "./constants";

const Students = () => {
  const sliderRef = useRef(null); // Создаем useRef для ссылки на Slider

  const handlePrevSlide = () => {
    sliderRef.current.slickPrev(); // Функция для переключения на предыдущий слайд
  };

  const handleNextSlide = () => {
    sliderRef.current.slickNext(); // Функция для переключения на следующий слайд
  };

  const sliderSettings = {
    dots: false, // Убираем точки (dots)
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
        <Box sx={{ width: "95%", border: "1px solid red" }}>
          <Slider {...sliderSettings} ref={sliderRef}>
            {" "}
            {/* Добавляем ref */}
            {studentsData.map((student, index) => (
              <Box key={index}>
                <Grid container sx={{ mb: "34px" }}>
                  <Grid
                    item
                    xl={6.8}
                    lg={6.8}
                    md={6.8}
                    sm={12}
                    xs={12}
                    sx={{
                      display: {
                        xl: "block",
                        lg: "block",
                        md: "block",
                        sm: "none",
                        xs: "none",
                      },
                    }}
                  >
                    <img
                      src={student.video}
                      alt="video"
                      className={styles.video}
                    />
                  </Grid>
                  <Grid item xl={0.2} lg={0.2} md={0.2}></Grid>
                  <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
                    <Box className={styles.information}>
                      <Box className={styles.studentInfo}>
                        <img
                          src={student.profile}
                          alt="profile"
                          className={styles.studentPicture}
                        />
                        <Box className={styles.studentInfoDetails}>
                          <Typography className={styles.studentName}>
                            {student.name}
                          </Typography>
                          <BasicRating rating={student.rating} />
                        </Box>
                      </Box>
                      <Box>
                        <Typography className={styles.text}>
                          {student.text}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Slider>
        </Box>
        <Box className={styles.arrows}>
          <Button onClick={handlePrevSlide}>
            <img src={left} alt="left" />
          </Button>
          <Button onClick={handleNextSlide}>
            <img src={right} alt="right" />
          </Button>
        </Box>
      </StyledContainer>
    </section>
  );
};

export default Students;
