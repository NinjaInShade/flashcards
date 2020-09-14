// Libraries , css and static files
import React, { useState, createContext } from "react";

// Components and util
import { icons } from "../utils/icons";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const [auth, setAuth] = useState({
    isAuth: false,
    userId: "53bac2rcba32",
    username: "leon",
    supporter: true,
    collections: [
      {
        name: "Maths",
        icon: icons.maths,
        id: "1",
        flashcards: [
          {
            question: "1+1",
            answer: "2",
            completed: false,
          },
          {
            question: "1+4",
            answer: "5",
            completed: false,
          },
        ],
      },
      {
        name: "Chemistry",
        icon: icons.chemistry,
        id: "2",
        flashcards: [
          {
            question: "1+1",
            answer: "2",
            completed: false,
          },
        ],
      },
      {
        name: "Phsyics",
        icon: icons.physics,
        id: "3",
        flashcards: [
          {
            question: "1+1",
            answer: "2",
            completed: false,
          },
        ],
      },
    ],
  });

  return <AuthContext.Provider value={[auth, setAuth]}>{children}</AuthContext.Provider>;
}
