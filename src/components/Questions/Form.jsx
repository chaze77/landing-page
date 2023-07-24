import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";

const Form = () => {
  return (
    <div className={styles.form}>
      <Box className={styles.formContainer}>
        <Typography className={styles.formTitle}>
          У вас остались вопросы?
        </Typography>
        <Typography className={styles.formText}>
          Maecenas ut magna netus purus enim. Et sit est arcu facilisi tortor
          ipsum sem. Neque porta morbi
        </Typography>

        <input className={styles.formInput} placeholder="Ваш номер телефона" />
        <textarea
          className={styles.formTextArea}
          placeholder="Задайте вопрос здесь"
        />
        <Button className={styles.formButton}>Задать вопрос</Button>
      </Box>
    </div>
  );
};

export default Form;
