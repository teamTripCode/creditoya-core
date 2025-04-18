export class CreateClientDto {
  email: string;
  password: string;
  names: string;
  firstLastName: string;
  secondLastName: string;
  phone?: string;
};

export class SignInDto {
  email: string;
  password: string;
}

export class UpdatePasswordDto {
  password: string;
}

export class UpdateDocumentDto {
  documentSides: string;
  number: string;
}

export class RejectReasonDto {
  reason: string;
}