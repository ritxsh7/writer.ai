import express from "express";

//controllers
import { getStory } from "../controllers/getStory.js";
import { upVote } from "../controllers/upVote.js";
import { fetchStory } from "../controllers/fetchStory.js";
import { testRoute } from "../controllers/testRoute.js";

//router
const router = express.Router();

//get-story route
router.post('/fetch-story', fetchStory)
router.post('/get-story', getStory);
router.post('/story/like', upVote);

router.get('/test-route', testRoute);

export default router;