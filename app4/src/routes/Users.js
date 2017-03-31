import React, { PropTypes } from 'react';
// import { connect } from 'dva';

import UserList from '../components/Users/UserList';
import UserSearch from '../components/Users/UserSearch';
import UserModal from '../components/Users/UserModal';

import styles from './Users.css';

function Users() {

	const userSearchProps = {};
	const userListProps = {
		total: 3,
		current: 1,
		loading: false,
		dataSource: [
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
	const userModalProps = {};

	return (
		<div className={styles.normal}>
			<UserSearch {...userSearchProps} />
			<UserList {...userListProps} />
			<UserModal {...userModalProps} />
		</div>
	);
}

Users.propTypes = {
	users: PropTypes.object,
};

export default Users;