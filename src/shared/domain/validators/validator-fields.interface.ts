export type FieldErrors = {
  [field: string]: string[];
};

export interface ValidatorFieldsInterfaces<PropsValidated> {
  errors: FieldErrors;
  validatedData: PropsValidated;
  validate(data: any): boolean;
}
