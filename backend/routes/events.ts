import * as fs from 'fs'
import * as express from 'express';
import * as path from 'path'
const router = express.Router();
import { Event } from '../models/event.model'
import DB from '../DB'

/**
 * Lists all of the events currently in the database
 */
router.route('/').get((req, res) => {
  // console.log("It's hitting the breakpoint")
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/active').get((req, res) => {
  Event.find({'active': 'true'}, 'title description').then(events => {
    return res.json(events)
  })
})
/**
 * @function upload
 * uploads a picture
 */
router.route('/upload').post((req, res) => {
  console.log("upload")
  //AWS bucket operation
  let filename = path.resolve(__dirname, "../acf.jpg")
  
  fs.readFile(filename, (err,data) => {
    if (err) throw err;

    //let uploadData = new Buffer('binary', data);
    const params = {
      Bucket: 'adventist-bubble',
      Key: 'acf.jpg',
      Body: JSON.stringify(data, null, 2)
    };
    DB.s3.upload(params, function(s3Err, data) {
      if (s3Err) throw s3Err
      console.log('File uploaded succesfully at ${data.Location')
    })

  })
})
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

router.route('/:id').post((req, res) => {
  console.log("id")
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



export const eventsRouter = router;