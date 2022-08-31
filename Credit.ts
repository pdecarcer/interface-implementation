import * as z from 'zod';

export const CreditSchema = z.object({
  id: z.string().min(1),
  productId: z.string(),
  provider: z.enum(['Forum', 'CrediNissan', 'Santander']),
  providerId: z.string(),
  productProviderId: z.string(),
  simulationId: z.number(),
  status: z.enum(['Simulated', 'Requested', 'Pending', 'Approved', 'Rejected']),
  financingAmount: z.number(),
  downPaymentAmount: z.number(),
  paymentNumber: z.string(),
  goodValue: z.string(),
  interestAmount: z.string(),
  operationalCost: z.string().optional(),
  cae: z.string().optional(),
  interestRate: z.string(),
  fees: z.string().optional(),
  insurance: z.string().optional(),
});

export type Credit = z.infer<typeof CreditSchema>;