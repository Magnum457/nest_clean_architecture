export type FieldsErrors = {
  [field: string]: string[];
};

export interface ValidatorFieldsInterfaces<PropsValidated> {
  errors: FieldsErrors;
  validatedData: PropsValidated;
  validate(data: any): boolean;
}
