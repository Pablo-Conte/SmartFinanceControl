declare namespace Express {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Request {
      user: {
          id_e?: string;
          email?: string;
      };
  }
}
 