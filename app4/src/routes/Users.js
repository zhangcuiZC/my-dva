import React, { PropTypes } from 'react';
// import { connect } from 'dva';

import UserList from '../components/Users/UserList';
import UserSearch from '../components/Users/UserSearch';
import UserModal from '../components/Users/UserModal';

import styles from './Users.css';

function Users() {

	const userSearchProps = {};
	const userListProps = {};
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

};

export default Users;