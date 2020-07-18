// pages/index/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		width: 0,
		height: 0,
		name: '',
		sex: '',
		age: '',
		tel: '',
		spell: '',
		job: '',
		exp: '',
		email: '',
		address: '',
		skill: [],
		education: [],
		work: [],
		project: [],
		introduction: ""
	},


	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {
		// 获取信息
		wx.showLoading({
			title: '加载中！',
		})
		// 获取屏幕的宽高
		var width = wx.getSystemInfoSync().windowWidth
		var height = wx.getSystemInfoSync().windowHeight


		//获取简历信息
		wx.request({
			url: 'https://api.huat.xyz/my/resume.json', //接口地址
			header: {
				'content-type': 'application/json' // 默认值
			},
			method: 'GET',
			success: (res) => {
				this.setData({
					width: width,
					height: height,
					name: res.data.name,
					spell: res.data.spell,
					sex: res.data.sex,
					age: res.data.age,
					tel: res.data.tel,
					email: res.data.email,
					job: res.data.job,
					exp: res.data.exp,
					address: res.data.address,
					skill: res.data.skill,
					education: res.data.education,
					work: res.data.work,
					project: res.data.project,
					introduction: res.data.introduction
				})
				wx.hideLoading()

				wx.showToast({
					title: '数据更新成功！',
					icon: 'success',
					duration: 1500
				})
			}
		})
	}
})
