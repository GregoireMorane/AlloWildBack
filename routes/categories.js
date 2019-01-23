const express = require("express");
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
	models.categories.findAll()
	.then(data => {
		res.status(200).json(data)
	})
})

router.get('/:id(\\d+)', (req, res) => {
	models.categories.findAll({
		where : {
			id : req.params.id
		},
		attributes : ['category'],
		include : [{
			model : models.movies,
			attributes : ['title', 'description', 'director', 'release_date']
		}]
	})
	.then(data => {
		res.status(200).json(data);
	})
	.catch(err => {
		res.status(500).send("Cannot get");
	})
})

router.post('/', (req, res) => {
	const data = req.body;
	const newCategory = new models.categories(data);
	newCategory.save()
		.then(newCategory => {
			res.status(201).send(`Category added at id : ${newCategory.id}`)
		})
		.catch(err => {
			res.status(500).send("Cannot add Category")
		})
})

router.put('/:id(\\d+)', (req, res) => {
	models.categories.findByPk(req.params.id)
		.then(CategoryFound => {
			if(CategoryFound){
				const data = req.body;
				models.categories.update(data, {
					where : { id : req.params.id }
				})
				.then(x => {
					res.status(200).send(`Category updated at id ${req.params.id}`);
				});
			} else {
				return res.status(404).send(`Category at id ${req.params.id} does not exist in db`);
			}
		})
})

router.delete('/:id(\\d+)', (req, res) => {
	models.categories.findByPk(req.params.id)
		.then(CategoryFound => {
			if(CategoryFound){
				models.categories.destroy({
					where : {
						id : req.params.id
					}
				})
				.then(x => {
					res.status(200).send(`Category deleted at id : ${req.params.id}`)
				})
			} else {
				return res.status(404).send(`Category at id ${req.params.id} does not exist in db`)
			}
		})
})

module.exports = router;