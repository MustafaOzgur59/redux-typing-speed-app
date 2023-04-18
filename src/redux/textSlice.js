import { createSlice } from "@reduxjs/toolkit";
import wordData from "../data/words.json";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const loadWords = (language) => {
  let shuffledWords = shuffle(wordData.words.slice(0));
  return shuffledWords.slice(0, 60).map((word) => word[language]);
};

export const textSlice = createSlice({
  name: "text",
  initialState: {
    words: loadWords("turkish"),
    currentLanguage: "turkish",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.currentLanguage = action.payload;
      state.words = loadWords(action.payload);
    },
  },
});

export const { changeLanguage } = textSlice.actions;
export default textSlice.reducer;
