import React, { PropTypes } from 'react';
import { connect } from 'dva';

import UserList from '../components/Users/UserList';
import UserSearch from '../components/Users/UserSearch';
import UserModal from '../components/Users/UserModal';

import styles from './Users.css';

function Users({ location, dispatch, users }) {

	const {
		loading, list, total, current, 
		currentItem, modalVisible, modalType
	} = users;

	const userSearchProps = {};
	const userListProps = {
		dataSource: list,
		total,
		loading,
		current,
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

function mapStateToProps({ users }) {
	return {users};
}

export default connect(mapStateToProps)(Users);