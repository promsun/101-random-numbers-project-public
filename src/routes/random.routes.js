const express = require("express");
const {
  coinFlip,
  diceRoll,
  randomNumber,
} = require("../controllers/random.controller");

const router = express.Router();

/**
 * @swagger
 * /api/coinFlip:
 *   get:
 *     summary: Simulate a coin flip
 *     description: Returns "Heads" or "Tails" randomly. Can flip multiple times if times parameter is provided.
 *     tags:
 *       - Random Operations
 *     parameters:
 *       - in: query
 *         name: times
 *         schema:
 *           type: integer
 *           default: 1
 *           minimum: 1
 *         description: Number of times to flip the coin
 *     responses:
 *       200:
 *         description: Successful coin flip
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: array
 *                   items:
 *                     type: string
 *                     enum: [Heads, Tails]
 *             example:
 *               result: ["Heads", "Tails", "Heads"]
 */
router.get("/coinFlip", coinFlip);

/**
 * @swagger
 * /api/diceRoll:
 *   get:
 *     summary: Roll a six-sided dice
 *     description: Returns a random number between 1 and 6. Can roll multiple times if times parameter is provided.
 *     tags:
 *       - Random Operations
 *     parameters:
 *       - in: query
 *         name: times
 *         schema:
 *           type: integer
 *           default: 1
 *           minimum: 1
 *         description: Number of times to roll the dice
 *     responses:
 *       200:
 *         description: Successful dice roll
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: array
 *                   items:
 *                     type: integer
 *                     minimum: 1
 *                     maximum: 6
 *             example:
 *               result: [3, 5, 1]
 */
router.get("/diceRoll", diceRoll);

/**
 * @swagger
 * /api/randomNumber:
 *   get:
 *     summary: Generate a random number
 *     description: Returns a random number between min and max (inclusive). Defaults to 1-100 if parameters are not provided.
 *     tags:
 *       - Random Operations
 *     parameters:
 *       - in: query
 *         name: min
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Minimum value (inclusive)
 *       - in: query
 *         name: max
 *         schema:
 *           type: integer
 *           default: 100
 *         description: Maximum value (inclusive)
 *     responses:
 *       200:
 *         description: Successful random number generation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: integer
 *             example:
 *               result: 42
 *       400:
 *         description: Invalid parameters (min >= max)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: "Min should be less than max."
 */
router.get("/randomNumber", randomNumber);

module.exports = router;
