'use strict'
import Controller from './../../system/Controller'
import autobind from 'class-autobind'

class UserController extends Controller {

	constructor(){
		super()
	}
	
	async listAllUser(req, res){
		const data = {
			title : 'Basic babel framework'
		}
		this.view(res, 'index.html', data)
	}

}
// export default new UserController
module.exports = new UserController