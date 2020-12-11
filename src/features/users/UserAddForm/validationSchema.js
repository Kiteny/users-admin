import * as yup from 'yup';
import 'yup-phone';

export default yup.object().shape({
  fio: yup
    .string()
    .max(40, 'Не более 40 символов')
    .required('Обязательное поле'),
  email: yup
    .string()
    .email('Неверный формат')
    .required('Обязательное поле'),
  phone: yup
    .string()
    .phone('RU', true, 'Неверный формат')
    .required(),
  password: yup
    .string()
    .min(6, 'Не менее 6 символов')
    .max(15, 'Не более 15 символов')
    .required('Обязательное поле'),
  role: yup
    .string()
    .required('Обязательное поле'),
});
