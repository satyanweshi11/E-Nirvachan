import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Candidate({ id, name, voteCount }) {
  const IMG =
    "https://cdn.dribbble.com/users/1158215/screenshots/12295638/media/13bcf0f160c91a93404ffa3893fb8892.jpg?auto=format&fit=crop&w=1400";

  return (
    <Card sx={{ maxWidth: 345, minWidth: 300 }}>
      <CardHeader
        title={
          <Typography align="center" variant="subtitle1" fontFamily={'Iceland'}>
            {name}
          </Typography>
        }
      />
      <CardContent sx={{ padding: 0 }}>
        <CardMedia
          component="img"
          alt="vande mataram"
          height="140"
          image={IMG}
        />
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        {voteCount && (
          <Typography align="center" variant="h6" fontFamily={'Iceland'}>
            <strong>5</strong> votes {voteCount}
          </Typography>
        )}
      </CardActions>
    </Card>
  );
}
