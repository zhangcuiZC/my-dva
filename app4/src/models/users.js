export default {
	namespace: 'users',
	state: {
		list: [],
		total: null,
		loading: false,
		current: null,
		currentItem: {},
		modalVisible: false,
		modalType: 'create',
	},

	effects: {
		*query() {},
		*create() {},
		*'delete'() {},
		*update() {},
	},

	reducers: {
		showLoading() {},
		showModal() {},
		hideModal() {},
		querySuccess(state) {
			const mock = {
				total: 3,
				current: 1,
				loading: false,
				list: [
					{
						name: '张三',
						age: 23,
						address: '成都',
					},
					{
						name: '李四',
						age: 24,
						address: '杭州',
					},
					{
						name: '王五',
						age: 25,
						address: '上海',
					},
				],
			};
			return { ...state, ...mock, loading: false };
		},
		createSuccess() {},
		deleteSuccess() {},
		updateSuccess() {},
	},

	subscriptions: {
		setup({ dispatch, history }) {
			history.listen(location => {
				if (location.pathname === '/users') {
					dispatch({
						type: 'querySuccess',
						payload: {}
					});
				}
			});
		},
	},
}