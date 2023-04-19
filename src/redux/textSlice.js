import { createSlice } from "@reduxjs/toolkit";
import wordData from "../data/words.json";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
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

const loadWords = (language, wordCount = 60) => {
  let shuffledWords = shuffle(wordData.words.slice(0));
  return shuffledWords.slice(0, wordCount).map((word) => {
    return { word: word[language], bgColor: "#FFFFFF", color: "#000000" };
  });
};

export const textSlice = createSlice({
  name: "text",
  initialState: {
    words: loadWords("turkish", 90),
    wordCount: 90,
    currentLanguage: "turkish",
    currentWordIndex: 0,
    correctWordCount: 0,
    wrongWordCount: 0,
    timer: 60,
    totalKeyPress: 0,
    enableClock: false,
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.currentLanguage = action.payload;
      state.words = loadWords(action.payload, state.wordCount);
    },
    countDown: (state, action) => {
      if (state.timer > 0) state.timer = state.timer - 1;
    },
    checkWordMatch: (state, action) => {
      state.totalKeyPress += 1;
      state.enableClock = true;
      if (action.payload === "") {
        state.words[state.currentWordIndex].color = "#000000";
      } else if (
        state.words[state.currentWordIndex].word.startsWith(action.payload)
      ) {
        state.words[state.currentWordIndex].color = "#4ADE80";
      } else {
        state.words[state.currentWordIndex].bgColor = "#FE0001";
      }
    },
    goNextWord: (state, action) => {
      if (state.currentWordIndex === state.wordCount) return;
      state.totalKeyPress += 1;
      if (action.payload === state.words[state.currentWordIndex].word) {
        state.words[state.currentWordIndex].color = "#4ADE80";
        state.currentWordIndex += 1;
        state.correctWordCount += 1;
      } else {
        state.words[state.currentWordIndex].color = "#FE0001";
        state.currentWordIndex += 1;
        state.wrongWordCount += 1;
      }
    },
  },
});

export const { changeLanguage, countDown, checkWordMatch, goNextWord } =
  textSlice.actions;
export default textSlice.reducer;
