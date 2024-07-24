import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const IUserSchema = z.object({
  id: z.string(),
  name: z.string(),
  cpf: z.string(),
  companyId: z.number(),
});

export class IUserDto extends createZodDto(IUserSchema) {}
