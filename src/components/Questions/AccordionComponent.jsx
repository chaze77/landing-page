import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styles from "./styles.module.css";

export default function ControlledAccordions({ title, text }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        disableGutters={true}
        sx={{ mr: "28px" }}
      >
        <AccordionSummary
          className={styles.accordionSummary}
          expandIcon={
            expanded === "panel1" ? (
              <RemoveIcon sx={{ fill: "#5699E8" }} />
            ) : (
              <AddIcon sx={{ fill: "#5699E8" }} />
            )
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              pl: "10px",
              width: "90%",
              flexShrink: 0,
            }}
            className={styles.accordionTitle}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.accordionText}>{text}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
