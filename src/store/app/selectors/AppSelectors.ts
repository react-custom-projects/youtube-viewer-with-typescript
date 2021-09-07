import {State} from "../../rootReducer";

export const getAppYoutubeVideos = (state: State) => state.app.videos;

export const getAppSelectedYoutubeVideo = (state: State) => state.app.selectedVideo;
