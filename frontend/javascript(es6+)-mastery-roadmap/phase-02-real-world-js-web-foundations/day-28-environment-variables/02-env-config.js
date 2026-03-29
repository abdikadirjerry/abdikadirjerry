// Challenge — Config Object

const config = {
  apiKey: process.env.API_KEY || "default_key",
  dbUrl: process.env.DB_URL || "localhost",
};

console.log(config);
