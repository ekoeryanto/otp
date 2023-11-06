import { OtpService, UnstorageAdapter, numericalSolutionGenerator } from '@pake/otp';
import memoryDriver from 'unstorage/drivers/memory';

export const otpService = new OtpService({
  storage: new UnstorageAdapter(memoryDriver()),
  maxAttempts: 2,
  timeToResend: 10 * 1000,
  timeToSolve: 60 * 1000,
  gracePeriod: 5 * 1000,
  // generateSolution: () => '1234',
  generateSolution: numericalSolutionGenerator(6),
  sendOtp: async (account, solution, args: { locale: string }) => {
    console.log(
      'sent otp to',
      account,
      'with solution',
      solution,
      'and locale',
      args.locale
    );
  },
});
