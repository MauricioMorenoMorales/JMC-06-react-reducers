import { TYPES } from '../actions/crudActions';

export const crudInitialState = {
	db: null,
};

export const crudReducer = function (state, action) {
	switch (action.type) {
		case TYPES.READ_ALL_DATA: {
		}
		case TYPES.READ_ONE_DATA: {
		}
		case TYPES.CREATE_DATA: {
		}
		case TYPES.UPDATE_DATA: {
		}
		case TYPES.DELETE_DATA: {
		}
		case TYPES.NO_DATA: {
		}
		case TYPES.READ_ALL_DATA:
			return crudInitialState;
		default:
			break;
	}
};
