const fs = require('fs');
const express = require('express');
const app = express();

//Middleware
app.use(express.json());

const tourDetails = JSON.parse(fs.readFileSync(`${__dirname}/data/tours.json`));

app.get('/tours', (req, res) => {
  fs.readFile(`${__dirname}/data/tours.json`, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }

    const tours = JSON.parse(data);
    res.status(200).json(tours);
  });
});

app.post('/tours', (req, res) => {
  const { name, description, duration, price } = req.body;

  fs.readFile(`${__dirname}/data/tours.json`, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }

    const newId = tourDetails[tourDetails.length - 1].id + 1;
    console.log(newId);

    const newTour = { id: newId, name, description, duration, price };
    tourDetails.push(newTour);

    fs.writeFile(
      `${__dirname}/data/tours.json`,
      JSON.stringify(tourDetails),
      (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: 'Internal server error' });
          return;
        }

        res.status(200).json({ message: 'Tour added successfully' });
      }
    );
  });
});

app.put('/tours/:id', (req, res) => {
  const tourId = parseInt(req.params.id);
  const updatedTour = req.body;

  fs.readFile(`${__dirname}/data/tours.json`, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }

    let tours = JSON.parse(data);

    const tourIndex = tours.findIndex((tour) => tour.id === tourId);

    if (tourIndex === -1) {
      res.status(404).json({ message: 'Tour not found' });
      return;
    }

    tours[tourIndex] = { ...tours[tourIndex], ...updatedTour };

    fs.writeFile(
      `${__dirname}/data/tours.json`,
      JSON.stringify(tours),
      (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: 'Internal server error' });
          return;
        }

        res.status(200).json({ message: 'Tour updated successfully' });
      }
    );
  });
});

app.delete('/tours/:id', (req, res) => {
  const tourId = parseInt(req.params.id);

  fs.readFile(`${__dirname}/data/tours.json`, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }

    let tours = JSON.parse(data);

    const tourIndex = tours.findIndex((tour) => tour.id === tourId);

    if (tourIndex === -1) {
      res.status(404).json({ message: 'Tour not found' });
      return;
    }

    tours.splice(tourIndex, 1);

    fs.writeFile(
      `${__dirname}/data/tours.json`,
      JSON.stringify(tours),
      (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: 'Internal server error' });
          return;
        }

        res.status(200).json({ message: 'Tour deleted successfully' });
      }
    );
  });
});

module.exports = app;
