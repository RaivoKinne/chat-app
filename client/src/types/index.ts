export type ResponseData = {
  error: Error | null;
  loading: boolean;
  data: {
    message: string;
  };
};
