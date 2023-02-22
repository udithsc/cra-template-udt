import React, { useEffect } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Post, useAddNewPostMutation } from './post.slice';

interface IFormInput {
  title: string;
  body: string;
}

function PostForm({ post }: { post?: Post | null }) {
  const [addNewPost] = useAddNewPostMutation();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      title: '',
      body: '',
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      await addNewPost(data).unwrap();
      reset();
      toast.success('Post added successfully.');
    } catch (err) {
      toast.error('Post creation failed');
    }
  };

  useEffect(() => {
    if (post) reset(post);
  }, [post]);

  return (
    <Grid
      container
      gap={2}
      sx={{ p: 2 }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <TextField {...field} fullWidth label="Title" id="title" />
        )}
      />
      <Controller
        name="body"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label="Post"
            multiline
            rows={4}
            id="post"
          />
        )}
      />
      <Button type="submit">Submit</Button>
    </Grid>
  );
}

export default PostForm;
