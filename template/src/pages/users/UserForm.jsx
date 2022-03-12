import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Joi from 'joi';
import { Grid } from '@mui/material';
import Controls from '../../components/controls/Controls';
import Notification from '../../components/ui/Notification';
import { useForm, Form } from '../../hooks/useForm';
import { showNotification, selectNotification, closeNotification } from '../../store/users';

const initialFormValues = {
  id: 0,
  name: '',
  email: '',
  phone: ''
};

const schema = {
  name: Joi.string().required().label('Name'),
  email: Joi.string().required().label('Email'),
  phone: Joi.number().required().label('Mobile')
};

export default function UserForm({ addOrEdit, recordForEdit }) {
  const notify = useSelector(selectNotification);
  const dispatch = useDispatch();

  const { values, setValues, errors, handleInputChange, resetForm, validate } = useForm(
    initialFormValues,
    schema
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (formErrors) {
      dispatch(
        showNotification({
          type: 'error',
          message: Object.values(formErrors)[0]
        })
      );
    }
    if (!formErrors) addOrEdit(values, resetForm);
  };

  useEffect(() => {
    if (recordForEdit !== null)
      setValues({
        ...recordForEdit
      });
  }, [recordForEdit]);

  return (
    <Form onSubmit={handleSubmit} data-testid="user-form">
      <Grid container direction="column" sx={{ width: 700 }}>
        <Grid container wrap="nowrap">
          <Controls.Input
            label="Name"
            name="name"
            value={values.name}
            onChange={handleInputChange}
            error={errors.name}
          />
          <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            label="Mobile"
            name="phone"
            value={values.phone}
            onChange={handleInputChange}
            error={errors.phone}
          />
        </Grid>
        <Grid container item justifyContent="flex-end">
          <Controls.Button text="Reset" onClick={resetForm} variant="text" textColor="primary" />
          <Controls.Button type="submit" text="Submit" onClick={() => {}} />
        </Grid>
        {notify.isOpen && <Notification notify={notify} closeNotification={closeNotification} />}
      </Grid>
    </Form>
  );
}

UserForm.propTypes = {
  addOrEdit: PropTypes.func.isRequired,
  recordForEdit: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  })
};

UserForm.defaultProps = {
  recordForEdit: initialFormValues
};
