import { Box, Grid, Paper, createStyles, Button } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import axios from 'axios';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: '20px 10px 10px 10px',
    },
    container: {
      margin: '20px',
    },
    eachPaper: {
      height: '150px',
      padding: 10,
    },
  }),
);

export default function Diary(props: any) {
  const classes = useStyles();

  const addDiary = () => {
    axios.get(``).then((res) => {});
  };

  return (
    <>
      <Button variant="contained" color="primary" className={classes.button}>
        Draw
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Delete
      </Button>
      <Box maxWidth="lg" className={classes.container}>
        <Grid container spacing={5}>
          {props.diary.map((item: any) => (
            <Grid
              key={item.key}
              item
              xs={12}
              sm={4}
              style={{ padding: '10px' }}
            >
              <Paper elevation={5} className={classes.eachPaper}>
                {item.name}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
