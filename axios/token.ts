const jwt = require("jsonwebtoken");

export const getAcceToken = (userId: string) => {
  return jwt.sign(
    {
      userId,
    },
    process.env.NEXT_PUBLIC_JWT_ACCEESS_SECRET,
    { expiresIn: "7m" }
  );
};

export const getRefreshToken = (userId: string) => {
  return jwt.sign(
    {
      userId,
    },
    process.env.NEXT_PUBLIC_JWT_REFRESH_SECRET,
    { expiresIn: "15d" }
  );
};
