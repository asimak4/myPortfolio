import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const About: React.FC = () => {
  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f4f4f9",
        padding: "0 20px",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" gutterBottom>
        About Me
      </Typography>
      <Typography
        variant="body1"
        sx={{ maxWidth: "600px", marginBottom: "20px" }}
      >
        Hi! I'm Alex, a web developer with a passion for building elegant and
        functional websites. I enjoy working on both frontend and backend
        technologies, always eager to learn new things and push the boundaries
        of web development.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="#contact"
        sx={{ marginTop: "20px" }}
      >
        Get in Touch
      </Button>
    </Box>
  );
};

export default About;
