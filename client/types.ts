import React from "react";

export type ColorScheme = {
  primaryColor: string;
  secondayColor: string;
};

export type LoginProps = {
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  setShowSignup: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TokenType = {
  token: string | null;
};
export interface HeaderProps {
  token: string | null;
  setToken: (token: string | null) => void;
}

export interface Post {
  _id: string;
  title: string;
  description: string;
  type: "Need" | "Offer";
  userId: { username: string };
  createdAt: string;
}
