import React from "react";
import { StyledContainer } from "../../globalstyle/GlobalTheme";
import { Box, Grid, Typography } from "@mui/material";
import { footerInfo, footerItems, footerLogos } from "./constants";
import styles from "./styles.module.css";
import f_logo from "../../assets/f_logo.png";
import c from "../../assets/c.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <StyledContainer className={styles.container}>
        <Grid container>
          <Grid
            item
            xl={4}
            lg={4}
            md={12}
            sm={12}
            xs={12}
            className={styles.logoGrid}
          >
            <Box>
              <img className={styles.logoFooter} src={f_logo} alt="" />
              <Box className={styles.logoFooterText}>
                <img src={c} />
                <Typography className={styles.logoText}>
                  2023 OracleDigital All rights Recerved.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={6}
            sm={6}
            xs={12}
            className={styles.footerItemsGrid}
          >
            <Box className={styles.footerItemsContainer}>
              {footerItems.map((item, idx) => (
                <Typography
                  key={idx}
                  className={
                    idx === 0 ? styles.itemFirstText : styles.itemsText
                  }
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={6}
            sm={6}
            xs={12}
            className={styles.footerInfoGrid}
          >
            <Box
              sx={{
                textAlign: {
                  xl: "left",
                  lg: "left",
                  md: "left",
                  sm: "left",
                  xs: "center",
                },
              }}
            >
              <Typography className={styles.itemFirsTextInfo}>
                Контакты
              </Typography>
              <Box sx={{ mb: "34px" }}>
                {footerInfo.map((info) => (
                  <Box sx={{ display: "flex", mb: "11px" }} key={info.id}>
                    <img
                      style={{ marginRight: "18px" }}
                      src={info.picture}
                      alt=""
                    />
                    <Typography className={styles.iconsText}>
                      {info.text}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: "flex", gap: "31px" }}>
                {footerLogos.map((logo, index) => (
                  <img key={index} src={logo} alt="" />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </StyledContainer>
    </footer>
  );
};

export default Footer;
