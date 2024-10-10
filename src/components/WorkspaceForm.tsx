import React from 'react';
import {
  TextField,
  Button,
  Grid,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';

const WorkspaceForm = ({ onNext }) => {
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
            label="Workspace Name"
            {...register('workspaceName', { required: 'Workspace name is required' })}
            error={!!errors.workspaceName}
            helperText={errors.workspaceName?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Workspace Description"
            {...register('workspaceDescription')}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Finish
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default WorkspaceForm;