const express = require("express");
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
	models.movies.findAll()
	.then(data => {
		res.status(200).json(data)
	})
})

router.post('/', (req, res) => {
	const data = req.body;
	console.log('**',data);
	const newMovie = new models.movies(data);
	newMovie.save()
		.then(newMovie => {
			data.categoryId.map(id => 
			models.categories.findById(id).then(category => category.addMovie(newMovie)));
			res.status(201).send(`Movie added at id : ${newMovie.id}`)
		})
		.catch(err => {
			res.status(500).send("Cannot add movie")
		})
})

router.put('/:id(\\d+)', (req, res) => {
	models.movies.findByPk(req.params.id)
		.then(movieFound => {
			if(movieFound){
				const data = req.body;
				models.movies.update(data, {
					where : { id : req.params.id }
				})
				.then(x => {
					res.status(200).send(`Movie updated at id ${req.params.id}`);
				});
			} else {
				return res.status(404).send(`Movie at id ${req.params.id} does not exist in db`);
			}
		})
})

router.delete('/:id(\\d+)', (req, res) => {
	models.movies.findByPk(req.params.id)
		.then(movieFound => {
			if(movieFound){
				models.movies.destroy({
					where : {
						id : req.params.id
					}
				})
				.then(x => {
					res.status(200).send(`Movie deleted at id : ${req.params.id}`)
				})
			} else {
				return res.status(404).send(`Movie at id ${req.params.id} does not exist in db`)
			}
		})
})

module.exports = router;