import * as React from "react";
import { Button, Typography } from "@mui/material";
import CoverLayout from "../components/CoverLayout";
import { useNavigate } from "react-router-dom";

const backgroundImage =
  "https://cdn.wallpapersafari.com/15/99/E0G8AS.jpg";

export default function CoverPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("home button clicked");
    navigate("/home");
    window.location.reload();
  };

  return (
    <CoverLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography fontWeight={500} fontFamily={'Iceland'} color="white" align="center" variant="h1" marked="center">
        Welcome to E-Nirvachan
      </Typography>
      <Typography
        color="yellow"
        fontFamily={'Bruno Ace'}
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        A decentralized voting system,built on the Ethereum blockchain
        by <br/>
        Bishal Chakraborty & Poushali Chattopadhyay
      </Typography>


      <Button
        variant="contained"
        size="large"
        sx={{ minWidth: 200 }}
        onClick={handleClick}
      >
        <Typography fontFamily={'Bruno ace'} borderColor={'red'} color={'black'}>
        Enter the Voting System
        </Typography>
    </Button>
    </CoverLayout>
  );
}
