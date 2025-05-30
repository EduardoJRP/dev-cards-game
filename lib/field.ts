export * from './field';
export enum EFieldValidation {
   email = 'email',
   password = 'password',
   passwordConfirm = 'passwordConfirm',
   title = 'title',
   name = 'name',
   description = 'description',
   category = 'category',
   color = 'color',
}
export type FieldValidationType = Record<EFieldValidation, [(value: string, extraValue?: string) => boolean, string?]>;

// Definimos las reglas de validación
export const fieldValidation: FieldValidationType = {
   email: [(value: string) => /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(value), 'El correo no es válido'],
   password: [(value: string) => value.trim().length >= 6, 'La contraseña debe tener al menos 6 caracteres'],
   passwordConfirm: [(password, value) => value === password, 'Las contraseñas no son iguales'],
   title: [(value: string) => value.trim().length >= 1, 'El título es obligatorio'],
   name: [(value: string) => value.trim().length >= 4, 'El nombre es obligatorio'],
   description: [(value: string) => value.trim().length >= 1, 'La descripción es obligatoria'],
   category: [(value: string) => value.trim().length >= 1, 'La categoría es obligatoria'],
   color: [(value: string) => value.trim().length >= 1, 'El color es obligatorio'],
   // isPublic: [(value: boolean) => !!value, 'El color es obligatorio'],
};