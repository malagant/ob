import React from 'react';
import {
  TextField,
  Button,
  Grid,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';

const GroupForm = ({ onNext }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Group Name"
            {...register('groupName', { required: 'Group name is required' })}
            error={!!errors.groupName}
            helperText={errors.groupName?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Group Description"
            {...register('groupDescription')}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Next
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default GroupForm;