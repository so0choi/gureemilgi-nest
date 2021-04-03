import { Box, Grid, Paper } from '@material-ui/core';
import { createStyles } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({}));

export default function Diary(props: any) {
  return (
    <>
      <Box maxWidth="lg">
        <Grid container spacing={5}>
          {props.diary.map((item: any) => (
            <Grid key={item.key} item xs={12} sm={4}>
              <Paper elevation={5} style={{ height: '150px', padding: 10 }}>
                {item.name}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
