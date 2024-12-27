declare namespace NodeJS {
  interface ProcessEnv {
    JWT_SECRET_USER: string;
    MONGO_URL: string;
  }
}
declare namespace Express {
  export interface Request {
    userId: any;
  }
  export interface Response {
    userId: any;
  }
}
