//interfaces
import {CommentApiEntry} from "../interfaces/CommentsInterface";

export const API_KEY = "AIzaSyB_3dCjR5OHzN8Tnjo00J9job-X61aVokA";

export const updateObject = (oldObject: any, UpdatedValues: any) => {
    return {
        ...oldObject,
        ...UpdatedValues,
    };
};

export const formatComments = (data: CommentApiEntry[]) => {
    return data.map(el => {
        const {
            id,
            snippet: {
                topLevelComment: {
                    snippet: {
                        authorDisplayName,
                        authorProfileImageUrl,
                        textDisplay,
                        publishedAt
                    }
                }
            }
        } = el;
        return ({
            id,
            authorDisplayName,
            authorProfileImageUrl,
            textDisplay,
            publishedAt,
        })
    });
};
