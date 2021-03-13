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
    email: "leon@gmail.com",
    collections: [
      {
        name: "Maths1",
        icon: icons.maths,
        id: "1",
        flashcards: [
          {
            question: "1+1",
            answer: "2",
            completed: false,
            id: 1,
          },
          {
            question: "1+4",
            answer: "5",
            completed: false,
            id: 2,
          },
        ],
      },
      {
        name: "Testerrrr2",
        icon: icons.maths,
        id: "12",
        flashcards: [
          {
            question: "1+1",
            answer: "2",
            completed: false,
            id: 3,
          },
          {
            question: "1+4",
            answer: "5",
            completed: false,
            id: 4,
          },
        ],
      },
      {
        name: "Chemistry3",
        icon: icons.chemistry,
        id: "5",
        flashcards: [
          {
            question: "1+1",
            answer: "2",
            completed: false,
            id: 5,
          },
        ],
      },
      {
        name: "Biology4",
        icon: icons.chemistry,
        id: "6",
        flashcards: [
          {
            question: "1+1",
            answer: "2",
            completed: false,
            id: 6,
          },
        ],
      },
      {
        name: "Science5",
        icon: icons.chemistry,
        id: "21",
        flashcards: [
          {
            question: "1+1",
            answer: "2",
            completed: false,
            id: 7,
          },
        ],
      },
      {
        name: "Gym6",
        icon: icons.chemistry,
        id: "22",
        flashcards: [
          {
            question: "1+1",
            answer: "2",
            completed: false,
            id: 8,
          },
        ],
      },
      {
        name: "Chemistry7",
        icon: icons.chemistry,
        id: "23",
        flashcards: [
          {
            question: "1+1",
            answer: "2",
            completed: false,
            id: 9,
          },
        ],
      },
      {
        name: "Phsyics8",
        icon: icons.physics,
        id: "34",
        flashcards: [
          {
            question: "1+1",
            answer: "2",
            completed: false,
            id: 10,
          },
          {
            question: "1+2",
            answer: "2",
            completed: false,
            id: 11,
          },
          {
            question: "1+3",
            answer: "2",
            completed: false,
            id: 12,
          },
          {
            question: "1+4",
            answer: "2",
            completed: false,
            id: 13,
          },
          {
            question: "1+5",
            answer: "2",
            completed: false,
            id: 14,
          },
          {
            question: "1+6",
            answer: "2",
            completed: false,
            id: 15,
          },
          {
            question:
              "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
            answer: "2",
            completed: false,
            id: 16,
          },
          {
            question: "Max char 200 For question",
            answer:
              "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa",
            completed: false,
            id: 17,
          },
        ],
      },
    ],
  });

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
}
