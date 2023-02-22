import { useCallback, useMemo, useState } from 'react';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import { Button, ListItemIcon, MenuItem } from '@mui/material';
import {
  AddCircleOutline,
  DeleteForever,
  Visibility,
} from '@mui/icons-material';
import { toast } from 'react-toastify';
import { Post, useDeletePostMutation, useGetPostsQuery } from './post.slice';
import AlertDialog from '../../components/common/AlertDialog';
import SideDrawer from '../../components/common/SideDrawer';
import PostForm from './postForm';

function PostTable() {
  const { data: posts, isLoading, isError } = useGetPostsQuery();

  const [alertOpen, setAlertOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [post, setPost] = useState<Post | null>(null);
  const [deletePost] = useDeletePostMutation();

  const columns = useMemo<MRT_ColumnDef<Post>[]>(
    () => [
      {
        accessorKey: 'userId',
        header: 'User Id',
        size: 100,
      },
      {
        accessorKey: 'id',
        header: 'Post Id',
        size: 100,
      },
      {
        accessorKey: 'title',
        header: 'Title',
      },
      {
        accessorKey: 'body',
        header: 'Body',
      },
    ],
    [],
  );

  const handleDeletePost = useCallback(async () => {
    try {
      await deletePost({ id: post?.id }).unwrap();
      toast.success('Post deleted successfully');
      setAlertOpen(false);
      setPost(null);
    } catch (err) {
      toast.success('Post delete failed.');
    }
  }, [post]);

  return (
    <>
      <MaterialReactTable
        columns={columns}
        data={posts || []}
        enableHiding={false}
        initialState={{ density: 'compact' }}
        renderTopToolbarCustomActions={() => {
          const handleCreate = () => {
            setPost(null);
            setFormOpen(true);
          };

          return (
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Button
                startIcon={<AddCircleOutline />}
                variant="text"
                onClick={handleCreate}
                id="addButton"
              >
                Add New User
              </Button>
            </div>
          );
        }}
        enableRowActions
        renderRowActionMenuItems={({ closeMenu, row }) => [
          <MenuItem
            key={0}
            onClick={() => {
              setPost(row.original);
              setFormOpen(true);
              closeMenu();
            }}
            sx={{ m: 0 }}
          >
            <ListItemIcon>
              <Visibility />
            </ListItemIcon>
            View
          </MenuItem>,
          <MenuItem
            key={1}
            onClick={() => {
              setPost(row.original);
              setAlertOpen(true);
              closeMenu();
            }}
            sx={{ m: 0 }}
          >
            <ListItemIcon>
              <DeleteForever />
            </ListItemIcon>
            Delete
          </MenuItem>,
        ]}
        state={{
          isLoading,
          showAlertBanner: isError,
        }}
      />
      <AlertDialog
        open={alertOpen}
        title="Delete Post"
        message="Are you sure you want to delete this item?"
        setOpen={setAlertOpen}
        onHandleSuccess={handleDeletePost}
      />

      {/* can use Popup form or side bar form  */}

      {/* popup form */}
      {/* <FormDialog open={formOpen} title="Add User" setOpen={setFormOpen}>
        <PostForm post={post} />
      </FormDialog> */}

      {/* sidebar form */}
      <SideDrawer title="Edit Post" open={formOpen} setOpen={setFormOpen}>
        <PostForm post={post} />
      </SideDrawer>
    </>
  );
}

export default PostTable;
