import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
import { IUserSchema } from './IUserDTO';

export const IPlanIdAndIdRequestSchema = z.object({
  user: IUserSchema,
  planId: z.string(),
  id: z.string(),
});

export class IPlanIdAndIdRequestDTO extends createZodDto(IPlanIdAndIdRequestSchema) {}
