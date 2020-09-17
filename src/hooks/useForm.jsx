import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [Loading, setLoading] = useState({ value: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    setLoading(true);
    setTimeout(function () {
      console.log('Called setLoading');
      setLoading({ value: false });
    }, 1500);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      //call the server
      callback();
    } else {
      setTimeout(() => {
        toast.error('Invalid email or password');
      }, 1500);
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    Loading,
  };
};

export default useForm;
