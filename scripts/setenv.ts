import { writeFile } from 'fs';
import { argv } from 'yargs';
import { config } from 'dotenv';

// read environment variables from .env file
config();

// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'production';

const targetPath = isProduction
  ? `./src/environments/environment.prod.ts`
  : `./src/environments/environment.ts`;

const content = `\
export const environment = {
  production: ${isProduction},
  UNSPLASH_API: "${process.env.UNSPLASH_API}",
  UNSPLASH_ACCESS_KEY: "${process.env.UNSPLASH_ACCESS_KEY}",
  UNSPLASH_SECRET_KEY: "${process.env.UNSPLASH_SECRET_KEY}",
};
`;

writeFile(targetPath, content, (err) => {
  if (err) {
    console.error(err);
  }

  console.log(`Wrote variables to ${targetPath}`);
});
