import { EFieldValidation, fieldValidation, FieldValidationType } from '@/utils/validation/field';
import { useMemo, useRef, useState, ChangeEvent, FormEvent } from 'react';

// Definimos el tipo del estado del formulario
export type FormState = Record<string, string>;

interface useFormProps {
   initialState?: FormState,
   activeValidation?: boolean,
   validations?: FieldValidationType
}
// Hook useForm tipado
export const useForm = ({
   initialState = {},
   activeValidation = false,
   validations = fieldValidation,
}: useFormProps) => {

   const [formState, setFormState] = useState<FormState>(initialState);
   const [formValidation, setFormValidation] = useState<Record<string, string | null>>({});

   const formValidationRef = useRef<FieldValidationType>({
      // ...fieldValidation,
      ...validations,
   });

   // Cambiar el estado inicial
   const onInitialChange = (newInitialState: FormState) => {
      setFormState(newInitialState);
   };

   // Validación de un campo específico
   const validationChange = (key: EFieldValidation, value: string): [boolean, string] => {
      const validation = formValidationRef.current[key];
      if (!validation) return [true, ''];

      const [fn, errorMessage = 'El campo es obligatorio'] = validation;

      if (key === EFieldValidation.passwordConfirm) {
         return [fn(formState.password as string, value), errorMessage];
      }

      return [fn(value), errorMessage];
   };

   // Validar todo el formulario
   const validateForm = (): boolean => {
      const formCheckedValues = Object.entries(formState).reduce((acc, [key, value]) => {
         const [valid, errorMessage] = validationChange(key as EFieldValidation, value as string);
         acc[`${key}Valid`] = valid ? null : errorMessage;
         return acc;
      }, {} as Record<string, string | null>);

      setFormValidation(formCheckedValues);
      return Object.values(formCheckedValues).every((value) => !value);
   };

   // Manejar cambios en los inputs
   const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormState((prev) => ({ ...prev, [name]: value }));

      if (!activeValidation) return;

      const [valid, errorMessage] = validationChange(name as EFieldValidation, value);
      setFormValidation((prev) => ({ ...prev, [`${name}Valid`]: valid ? null : errorMessage }));
   };

   // Resetear formulario
   const onResetForm = () => {
      setFormState(initialState);
      setFormValidation({});
   };

   // Manejar envío del formulario
   const onSubmitForm = useMemo(() =>
      (callback: (event: FormEvent<HTMLFormElement>) => void) => {
         if (typeof callback !== 'function') {
            throw new Error('callback is not a function');
         }

         return (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            let isFormValid = true;
            if (activeValidation) {
               isFormValid = validateForm();
            }
            if (!isFormValid) return;
            callback(event);
         };
      },
      [formState, formValidation]
   );

   return {
      ...formState,
      ...formValidation,
      formState,
      formValidation,
      onInputChange,
      onResetForm,
      onSubmitForm,
      onInitialChange,
   };
};
