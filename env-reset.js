process.env.NODE_ENV = undefined;
process.env.PORT = undefined;
process.env.LOG_LEVEL = undefined;

const obj = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  LOG_LEVEL: process.env.LOG_LEVEL
};
console.log(obj);
