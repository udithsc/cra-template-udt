import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Grid, Typography, Paper } from '@mui/material';
import CollectionsIcon from '@mui/icons-material/Collections';
import GroupIcon from '@mui/icons-material/Group';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import CommentIcon from '@mui/icons-material/Comment';
import Title from './Title';
import UserSummary from '../../pages/users/UserSummary';
import { loadUsers, selectUsers } from '../../store/users';
import Controls from '../controls/Controls';

function Home() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex'
          }}
        >
          <Box sx={{ flex: 3, display: 'flex', flexDirection: 'column' }}>
            <Title>Users</Title>
            <Typography component="p" variant="h3" color="secondary">
              {users.length}
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Controls.ActionButton color="primary.main" onClick={() => {}}>
              <GroupIcon sx={{ fontSize: 50, p: 0.5 }} />
            </Controls.ActionButton>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex'
          }}
        >
          <Box sx={{ flex: 3, display: 'flex', flexDirection: 'column' }}>
            <Title>Posts</Title>
            <Typography component="p" variant="h3" color="secondary">
              {0}
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Controls.ActionButton color="primary.main" onClick={() => {}}>
              <DynamicFeedIcon sx={{ fontSize: 50, p: 0.5 }} />
            </Controls.ActionButton>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex'
          }}
        >
          <Box sx={{ flex: 3, display: 'flex', flexDirection: 'column' }}>
            <Title>Comments</Title>
            <Typography component="p" variant="h3" color="secondary">
              {0}
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Controls.ActionButton color="primary.main" onClick={() => {}}>
              <CommentIcon sx={{ fontSize: 50, p: 0.5 }} />
            </Controls.ActionButton>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex'
          }}
        >
          <Box sx={{ flex: 3, display: 'flex', flexDirection: 'column', mr: 3 }}>
            <Title>Albums</Title>
            <Typography component="p" variant="h3" color="secondary">
              {0}
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Controls.ActionButton color="primary.main" onClick={() => {}}>
              <CollectionsIcon sx={{ fontSize: 50, p: 0.5 }} />
            </Controls.ActionButton>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <>
            <Title>Welcome</Title>
            <Typography component="p" sx={{ flex: 1, mb: 2 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni hic enim aut iste vero
              dicta. Id eum aperiam, ducimus quod rerum beatae. Voluptate, facere sequi debitis
              distinctio saepe odit sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magni hic enim aut iste vero dictad.
            </Typography>
            <div>
              <Link color="primary" to="/posts" style={{ color: 'green' }}>
                Setup Posts
              </Link>
            </div>
          </>
        </Paper>
      </Grid>

      <Grid item xs={12} md={8} lg={8}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <UserSummary />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Home;
