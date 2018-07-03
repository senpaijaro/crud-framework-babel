import Model from './../../system/Model'

class UserModel extends Model{
	constructor(){
		super()
		this.table = 'tbluser'
		this.mainBrCode = 'srsn'
		this.mainMsBrCode = 'srsnms'
	}
	async showUser(){
		let field = 'tfname,tlname',
		res = await this.select(this.mainBrCode,this.table,field)
		return res
	}

	async insertUser(){
		let data = {
			tfname: 'Jade',
			tlname: 'Batal',
		},
		res = await this.insert(this.mainBrCode, this.table, data)
		return res
	}
	async updateUser(){
		let data = {
			tfname: 'Jades',
			tlname: 'Batals',
		},
		condition = {
			id: 1
		},
		res = await this.update(this.mainBrCode, this.table, condition, data)
		return res
	}

	async showMsUser(){
		let res = await this.query(this.mainMsBrCode,`SELECT * FROM tbluser`)
		return res
	}
}

export default new UserModel