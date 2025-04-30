declare namespace NodeJS {
  export interface ProcessEnv {
    APP_ENV: string;
    APP_URL: string;
    AUTH_TOKEN: string;
    DATABASE_URI: string;
    PAYLOAD_SECRET: string;
    S3_BUCKET: string;
    S3_ACCESS_KEY_ID: string;
    S3_SECRET_ACCESS_KEY: string;
    S3_REGION: string;
  }
}
