import { Typography, LinearProgress } from '@mui/material';

export const MySkills = () => {
  return (
    <section id="my-skills">
      <div className="container">
        <Typography variant="h4" gutterBottom>
          My Skills
        </Typography>
        <div className="row">
          <div className="col-md-6">
            <Typography variant="h5" gutterBottom>
              Technical Skills
            </Typography>
            <LinearProgress variant="determinate" value={90} color="primary" />
            <Typography variant="body1" gutterBottom>
              HTML/CSS
            </Typography>
            <LinearProgress variant="determinate" value={80} color="primary" />
            <Typography variant="body1" gutterBottom>
              JavaScript
            </Typography>
            <LinearProgress variant="determinate" value={70} color="primary" />
            <Typography variant="body1" gutterBottom>
              PHP
            </Typography>
          </div>
          <div className="col-md-6">
            <Typography variant="h5" gutterBottom>
              Soft Skills
            </Typography>
            <LinearProgress variant="determinate" value={95} color="primary" />
            <Typography variant="body1" gutterBottom>
              Communication
            </Typography>
            <LinearProgress variant="determinate" value={85} color="primary" />
            <Typography variant="body1" gutterBottom>
              Teamwork
            </Typography>
            <LinearProgress variant="determinate" value={75} color="primary" />
            <Typography variant="body1" gutterBottom>
              Time Management
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};
