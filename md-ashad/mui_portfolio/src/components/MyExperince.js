import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function MyExperince() {
  return (
    <Container maxWidth="lg">
      <Typography paragraph sx={{ fontSize: "3rem", textAlign: "center" }}>
        My Experience
      </Typography>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            09:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Box sx={{ marginTop: "-1rem" }}>
              <Typography variant="h3">Web Programmer</Typography>
              <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
                optio, dolorum provident rerum aut hic quasi placeat iure
                tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus
                veritatis qui ut.
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {" "}
            <Box sx={{ marginTop: "-1rem" }}>
              <Typography variant="h3">Web Programmer</Typography>
              <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
                optio, dolorum provident rerum aut hic quasi placeat iure
                tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus
                veritatis qui ut.
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            12:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {" "}
            <Box sx={{ marginTop: "-1rem" }}>
              <Typography variant="h3">Web Programmer</Typography>
              <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
                optio, dolorum provident rerum aut hic quasi placeat iure
                tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus
                veritatis qui ut.
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            9:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {" "}
            <Box sx={{ marginTop: "-1rem" }}>
              <Typography variant="h3">Web Programmer</Typography>
              <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
                optio, dolorum provident rerum aut hic quasi placeat iure
                tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus
                veritatis qui ut.
              </Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}
