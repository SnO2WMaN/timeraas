export type Context = {
  'x-user-id': string | null;
};

export type UserModel = {
  id: string;
  name: string;
  image: string;
};

export type CountdownModel = {
  id: string;
  title: string;
  igniteAt: Date;
  createdAt: Date;
  updatedAt: Date;
  createdBy: {id: string};
};
