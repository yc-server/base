import { IConfig } from '@ycs/core/lib/mongodb';

export const development: IConfig = {
  uri: 'mongodb://localhost/helloWorld',
  options: {
    useMongoClient: true,
  },
  promise: global.Promise,
};

export const production: IConfig = {
  uri: process.env.MONGODB_URI || 'mongodb://localhost/helloWorld',
  options: {
    useMongoClient: true,
  },
  promise: global.Promise,
};
