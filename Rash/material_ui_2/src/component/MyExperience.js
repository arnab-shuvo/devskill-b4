import { Container, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import WorkIcon from '@mui/icons-material/Work';

export const MyExperience = () => {
  return (
    <section id="my-experience">
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          My Experience
        </Typography>
        <div className="row">
          <div className="col-md-12">
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <WorkIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h5" component="h3">
                    Job 1
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Job 1 description.
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    Start date - End date
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <WorkIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h5" component="h3">
                    Job 2
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Job 2 description.
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    Start date - End date
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <WorkIcon />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h5" component="h3">
                    Job 3
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Job 3 description.
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    Start date - End date
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </Container>
    </section>
  );
};
