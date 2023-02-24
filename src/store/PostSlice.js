import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: [{title:"ChatGPT was launched on November 30, 2022, by San Francisco–based OpenAI, the creator of DALL. E 2 and Whisper AI. The service was launched as initially free to the public, with plans to monetize the service later. By December 4, 2022, ChatGPT already had over one million users.",img:"https://vid.alarabiya.net/images/2023/01/22/5e24e8b6-c7de-420d-bf1f-0d32dac2426d/5e24e8b6-c7de-420d-bf1f-0d32dac2426d.jpg?crop=4:3&width=1200"},{title:"What is BARD? The BARD AI chatbot is an experimental conversational AI service that would provide fresh, high-quality responses to support creativity and curiosity. It will draw information from the web and combine the power of intelligence and creativity with large language models.",img:"https://i0.wp.com/techarenahindi.in/wp-content/uploads/2023/02/what-is-bard-ai.webp"}],
  reducers: {
    add(state, action) {
      state.unshift(action.payload);
    },
  },
});

export const { add } = postSlice.actions;

export default postSlice.reducer;
