const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// GET one, PUT, and DELETE one thought /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// POST new reaction to thoughts /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(addReaction)

// DELETE reaction to thoughts /api/thoughts/:thoughtId/reactions/:reactionId
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;