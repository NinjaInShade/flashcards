// Libraries , css and static files
import React, { useState, createContext } from "react";

// Components and util
import { icons } from "../utils/icons";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const [auth, setAuth] = useState({
    isAuth: true,
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
        id: "5",
        flashcards: [
          {
            question: "1+1",
            answer: "2",
            completed: false,
          },
        ],
      },
      {
        name: "Biology",
        icon: icons.chemistry,
        id: "6",
        flashcards: [
          {
            question: "1+1",
            answer: "2",
            completed: false,
          },
        ],
      },
      {
        name: "Science",
        icon: icons.chemistry,
        id: "21",
        flashcards: [
          {
            question: "1+1",
            answer: "2",
            completed: false,
          },
        ],
      },
      {
        name: "Gym",
        icon: icons.chemistry,
        id: "22",
        flashcards: [
          {
            question: "1+1",
            answer: "2",
            completed: false,
          },
        ],
      },
      {
        name: "Chemistry",
        icon: icons.chemistry,
        id: "23",
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
        id: "34",
        flashcards: [
          {
            question: "1+1",
            answer: "2",
            completed: false,
          },
          {
            question: "1+1",
            answer: "2",
            completed: false,
          },
          {
            question: "1+1",
            answer: "2",
            completed: false,
          },
          {
            question: "1+1",
            answer: "2",
            completed: false,
          },
          {
            question: "1+1",
            answer: "2",
            completed: false,
          },
          {
            question: "1+1",
            answer: "2",
            completed: false,
          },
          {
            question: "1+1",
            answer: "2",
            completed: false,
          },
          {
            question: "Max char 350 For question",
            answer:
              "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa",
            completed: false,
          },
        ],
      },
    ],
  });

  return <AuthContext.Provider value={[auth, setAuth]}>{children}</AuthContext.Provider>;
}
