import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, ListItemText, ListItemIcon, ListItem, Collapse, Box } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import GroupIcon from '@mui/icons-material/Group';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const routes = ['/', '/users', '/posts'];

function ListItems({ open }) {
  const params = useLocation();
  const navigate = useNavigate();
  const routeIndex = routes.findIndex((route) => route === params.pathname);
  const [selectedIndex, setSelectedIndex] = useState(routeIndex);
  const [nestedMenuOpen, setNestedMenuOpen] = useState(true);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
    navigate(routes[index]);
  };

  const handleNestedMenuClick = () => {
    setNestedMenuOpen(!nestedMenuOpen);
    handleListItemClick(2);
  };

  const MainListItem = styled(ListItem)(({ theme }) => ({
    '&.MuiListItem-root.Mui-selected': {
      backgroundColor: blue[100],
      borderRight: theme.palette.primary.main,
      borderRightWidth: 4,
      borderRightStyle: 'solid'
    },
    '&.MuiListItem-root:hover': {
      backgroundColor: blue[50]
    }
  }));

  const nestedPadding = open ? 4 : null;

  return (
    <Box sx={{ mt: 2 }}>
      <MainListItem selected={selectedIndex === 0} onClick={() => handleListItemClick(0)}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </MainListItem>
      <MainListItem
        data-testid="users-menu"
        selected={selectedIndex === 1}
        onClick={() => handleListItemClick(1)}
      >
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </MainListItem>
      <MainListItem onClick={handleNestedMenuClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Data" />
        {nestedMenuOpen ? <ExpandLess /> : <ExpandMore />}
      </MainListItem>
      <Collapse in={nestedMenuOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <MainListItem
            sx={{ pl: nestedPadding }}
            selected={selectedIndex === 2}
            onClick={() => handleListItemClick(2)}
          >
            <ListItemIcon>
              <DynamicFeedIcon />
            </ListItemIcon>
            <ListItemText primary="Posts" />
          </MainListItem>
        </List>
      </Collapse>
    </Box>
  );
}

ListItems.propTypes = {
  open: PropTypes.bool.isRequired
};

export default ListItems;
