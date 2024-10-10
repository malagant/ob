import React from 'react';
import {
  TextField,
  Button,
  Grid,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';

const TenantForm = ({ onNext }) => {
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
            label="Tenant Name"
            {...register('tenantName', { required: 'Tenant name is required' })}
            error={!!errors.tenantName}
            helperText={errors.tenantName?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Tenant Description"
            {...register('tenantDescription')}
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

export default TenantForm;