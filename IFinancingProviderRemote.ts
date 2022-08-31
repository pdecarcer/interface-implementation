import { Credit } from "./Credit";

export interface IFinancingProviderRemoteData {
  simulateCredit(params: Partial<Credit>): Promise<boolean>;
  requestCredit(): Promise<void>;
  getCreditProducts(): Promise<void>;
  getCreditStatus(): Promise<void>;
  updateCredit(params: Pick<Credit, 'cae'>): Promise<Credit>;
}
