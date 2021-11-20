import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(null);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'pass':
        setPass(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    //post
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleClickShowPassword = () => {
    setShowPass(!showPass);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <>
      <Button
        onClick={handleToggleModal}
        variant="contained"
        size="large"
        endIcon={<AddCircleIcon />}
      >
        Create a room
      </Button>
      <Modal
        open={showModal}
        onClose={handleToggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            // flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'white',
              // marginTop: 8,
              textAlign: 'center',
              border: '1px solid',
              padding: '50px',
              borderRadius: '40px',
              position: 'relative',
            }}
          >
            <Typography component="h1" variant="h5">
              Create your own room
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                mt: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                value={name}
                autoFocus
                onChange={handleChange}
              />

              <FormControl margin="normal" variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password" required>
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPass ? 'text' : 'password'}
                  name="pass"
                  value={pass}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPass ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Party date"
                  // name="date"
                  value={date}
                  onChange={newDate => {
                    setDate(newDate);
                  }}
                  minDate={Date.now()}
                  renderInput={params => (
                    <TextField {...params} margin="normal" fullWidth required />
                  )}
                />
              </LocalizationProvider>

              <Button
                type="submit"
                // fullWidth
                variant="contained"
                size="large"
                sx={{
                  margin: '0 auto',
                  mt: 3,
                  mb: 2,
                  // backgroundColor: 'green',
                }}
              >
                Create a room
              </Button>
              <IconButton
                aria-label="close"
                onClick={handleToggleModal}
                sx={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  // p: 2,
                  // minWidth: 300,
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Modal>
    </>
  );
}

// import React, { useState, useEffect } from 'react';
// import { useHistory, useLocation } from 'react-router-dom';
// import { fetchSearchingMovies } from '../../services/movies-api';
// import Searchbar from '../Searchbar/Searchbar';
// import Loader from '../Loader/Loader';
// import MoviesGallery from '../MoviesGallery/MoviesGallery';
// import Button from '../Button/Button';

// export default function MoviesPage() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [movies, setMovies] = useState([]);
//   const [status, setStatus] = useState('idle');
//   const [pageNumber, setPageNumber] = useState(1);
//   const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const history = useHistory();
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   // console.log(searchParams);
//   const queryParam = searchParams.get('query');
//   // console.log(searchParamFromURL);

//   useEffect(() => {
//     queryParam && setSearchQuery(queryParam);
//   }, [queryParam]);

//   useEffect(() => {
//     if (!searchQuery) return; //отменяем первый рендер или рендер пустой строки

//     setStatus('pending');

//     fetchSearchingMovies(searchQuery, pageNumber)
//       .then(data => {
//         if (data.results.length === 0) {
//           setStatus('rejected');
//           setErrorMessage('There are no movies for this query :(');
//         } else {
//           const totalPages = Math.ceil(data.total_pages / 12);
//           const usableMovieKeysArr = data.results.map(
//             ({ id, poster_path, title, release_date }) => {
//               return {
//                 id,
//                 poster_path,
//                 title,
//                 release_date,
//               };
//             },
//           );

//           setMovies(prevMovies => [...prevMovies, ...usableMovieKeysArr]);
//           setStatus('resolved');
//           setShowLoadMoreBtn(totalPages === pageNumber ? false : true);
//         }
//       })
//       .catch(err => {
//         setStatus('rejected');
//         setErrorMessage(`There is an error: ${err}`);
//       });

//     window.scrollTo({
//       top: document.documentElement.scrollHeight - window.innerHeight,
//       behavior: 'smooth',
//     });
//   }, [searchQuery, pageNumber]);

//   const onSearch = query => {
//     setSearchQuery(query);
//     setMovies([]);
//     setPageNumber(1);
//     history.push(`?query=${query}`);
//   };

//   const onLoadMore = () => {
//     setPageNumber(pageNumber + 1);
//     setStatus('pending');
//   };

//   return (
//     <>
//       <Searchbar onSearch={onSearch} />
//       {status === 'pending' && (
//         <>
//           {movies.length !== 0 && <MoviesGallery moviesArr={movies} />}
//           <div style={{ height: '60vh' }}>
//             <Loader />
//           </div>
//           <div className="loadMoreReplacer"></div>
//         </>
//       )}
//       {status === 'rejected' && <p className="Msg">{errorMessage}</p>}
//       {status === 'resolved' && (
//         <>
//           <MoviesGallery moviesArr={movies} />
//           {showLoadMoreBtn && <Button onLoadMore={onLoadMore} />}
//         </>
//       )}
//     </>
//   );
// }
