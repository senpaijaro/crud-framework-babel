'use strict'
import "babel-polyfill";
//modules  
import express from 'express'
import requirAll from 'require.all'
import {compose} from 'compose-middleware'
import _ from 'underscore'
//files
import routes from './application/config/routes'


const app = express(),
publicDir = './../public'
app.set('views',__dirname + publicDir+ '/template')
app.use('/public', express.static(__dirname + publicDir+'/plugins'))
app.use('/partials', express.static(__dirname + publicDir+'/template/includes')),
app.use('/view', express.static(__dirname + publicDir+'/template'))
app.engine('html', require('ejs').renderFile)

let controllers = requirAll({
	dir: './application/controller', //only files that end with 'controller.js' 
	match: /Controller\.js$/i,
	recursive: false,
	map: (name, path, isFile ) => requirAll.map(name, path, isFile).replace(/Controller$/i,'')
})

_.each(routes, function(value, index){
	let getApi = index.split(" "),
	path = value.split("."),
	middleware = []

	middleware.push(controllers[path[0]][path[1]])
	if(getApi[0] == "GET"){
		app.get(getApi[1], compose(middleware))
	}else if (getApi[0] == "POST"){
		app.post(getApi[1], compose(middleware));
	}
})

app.listen(4200, function(){
	console.log('running port ' + 4200)
})