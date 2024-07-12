import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
import { IUserSchema } from './IUserDTO';

export const IPlanIdRequestSchema = z.object({
  user: IUserSchema,
  planId: z.string(),
});

export class IPlanIdRequestDTO extends createZodDto(IPlanIdRequestSchema) {}
