import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Popup from '../../components/ui/Popup';
import Notification from '../../components/ui/Notification';
import ConfirmDialog from '../../components/ui/ConfirmDialog';
import Breadcrumbs from '../../components/controls/Breadcrumbs';
import UsersForm from './UserForm';
import useTable from '../../hooks/useTable';
import Controls from '../../components/controls/Controls';
import {
  loadUsers,
  selectUsers,
  addUser,
  updateUser,
  deleteUser,
  closeNotification,
  selectNotification,
  selectTotalElements,
  selectRefreshStatus
} from '../../store/users';

const headCells = [
  { id: 'name', label: 'name', width: '30%' },
  { id: 'email', label: 'Email', width: '30%' },
  { id: 'phone', label: 'Mobile', width: '25%' },
  { id: 'actions', label: 'Actions', width: '15%' }
];

export default function User() {
  const dispatch = useDispatch();
  const records = useSelector(selectUsers);
  const notify = useSelector(selectNotification);
  const refresh = useSelector(selectRefreshStatus);
  const totalRecords = useSelector(selectTotalElements);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [search, setSearch] = useState('');
  const [openPopup, setOpenPopup] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: ''
  });

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting, page, limit } =
    useTable(records, headCells, totalRecords);

  const addOrEdit = (user, resetForm) => {
    if (user.id === 0) dispatch(addUser(user));
    else dispatch(updateUser(user));
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  const onDelete = (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false
    });
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    dispatch(loadUsers(page, limit, search));
  }, [page, limit, search, refresh]);

  return (
    <>
      <Breadcrumbs path="users" label="Users" />
      <Paper sx={{ m: 2, p: 2 }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Controls.Input
            sx={{
              width: 320,
              '& .Mui-focused': { width: 350 }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
            value={search}
            placeholder="Search..."
            onChange={({ target: input }) => {
              setSearch(input.value);
            }}
          />
          <Controls.Button
            data-testid="add-new-users"
            text="Add New"
            startIcon={<AddIcon />}
            onClick={() => {
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
          />
        </Toolbar>

        <TblContainer>
          <TblHead />
          <TableBody>
            {records.length <= limit &&
              recordsAfterPagingAndSorting().map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>
                    <Controls.ActionButton
                      color="primary.light"
                      tooltip="Edit User"
                      onClick={() => {
                        openInPopup(item);
                      }}
                    >
                      <EditIcon fontSize="small" />
                    </Controls.ActionButton>
                    <Controls.ActionButton
                      color="error.main"
                      tooltip="Delete User"
                      onClick={() => {
                        setConfirmDialog({
                          isOpen: true,
                          title: 'Are you sure to delete this record?',
                          subTitle: "You can't undo this operation",
                          onConfirm: () => {
                            onDelete(item.id);
                          }
                        });
                      }}
                    >
                      <CloseIcon fontSize="small" />
                    </Controls.ActionButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </TblContainer>
        {records && <TblPagination />}
      </Paper>
      <Popup title="Setup Users" openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <UsersForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
      {notify.isOpen && <Notification notify={notify} closeNotification={closeNotification} />}
      {confirmDialog.isOpen && (
        <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
      )}
    </>
  );
}
