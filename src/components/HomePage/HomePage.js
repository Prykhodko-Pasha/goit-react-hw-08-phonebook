import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Hi! &#128075;
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          I am your phonebook manager. &#128222;
          <br />
          You can add, delete or find any your contact.
        </Typography>
        <Typography variant="body1">
          Of course if you will register or already have an account here.
        </Typography>
      </Container>
    </Box>
  );
}
