import { OtpService } from '@romanzy/otp';
// import Storage from '@romanzy/otp/storage/MemoryStorage';
import Storage from '@romanzy/otp/storage/UnstorageAdapter';
// import { numericalSolutionGenerator } from '@romanzy/otp/helpers';
import memoryDriver from 'unstorage/drivers/memory';

export const otpService = new OtpService({
  storage: new Storage(memoryDriver()),
  maxAttempts: 2,
  timeToResend: 10 * 1000,
  timeToSolve: 60 * 1000,
  gracePeriod: 5 * 1000,
  generateSolution: () => '1234',
  // generateSolution: numericalSolutionGenerator(6);
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
