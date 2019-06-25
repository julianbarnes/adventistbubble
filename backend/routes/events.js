const router = require('express').Router();
let Event = require('../models/event.model');
/**
 * Lists all of the events currently in the database
 */
router.route('/').get((req, res) => {
  // console.log("It's hitting the breakpoint")
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ' + err));
});
/**
 * Adds an event
 * Inputs: Title, description, and date
 */
router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newEvent = new Event({
    title,
    description,
    date
  });

  newEvent.save()
  .then(() => res.json('Event added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Event.findByIdAndDelete(req.params.id)
    .then(() => res.json('Event deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Event.findById(req.params.id)
    .then(event => {
      event.username = req.body.username;
      event.description = req.body.description;
      event.date = Date.parse(req.body.date);

      event.save()
        .then(() => res.json('Event updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;