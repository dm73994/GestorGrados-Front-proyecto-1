import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { useLogin } from './hooks/useLogin';
import { Formik } from 'formik';

export const LoginPage = () => {
    const { handleSubmit, control, initialValues, onSubmit, errors } = useLogin();
    return (
        <Container maxWidth="sm">
            <h1>Bienvenido</h1>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <form onSubmit={handleSubmit}>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Correo electrónico"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                error={!!errors.email}
                                helperText={
                                    errors.email ? errors.email.message : ''
                                }
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Contraseña"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                type="password"
                                error={!!errors.password}
                                helperText={
                                    errors.password ? errors.password.message : ''
                                }
                            />
                        )}
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Enviar
                    </Button>
                </form>
            </Formik>
        </Container>
    );
};
