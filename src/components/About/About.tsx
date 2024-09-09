import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { aboutMeText, userEmail } from "./aboutMe";
const About: React.FC = () => {

  const [showEmail, setShowEmail] = React.useState(false); 

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
        textAlign: "left",
      }}
    >
      <Typography variant="h2" gutterBottom>
        About Me
      </Typography>
      <Typography
        variant="body1"
        sx={{ maxWidth: "600px", marginBottom: "20px", }}
      >
        {aboutMeText}
      </Typography>
      {
        showEmail ? 
        <Typography>Email me at: <b>{userEmail}</b>! Looking forward to hearing from you! </Typography>
        :
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowEmail(true)}
          sx={{ marginTop: "20px" }}
        >
          Get in Touch
        </Button>
      }
    </Box>
  );
};

export default About;
