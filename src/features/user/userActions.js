import { createAsyncThunk } from "@reduxjs/toolkit";


// const server = "http://localhost:3001";

/**
 *  Redux userlogin action : fetch request returning a promise.
 *  The userLogin action (POST) requires parameters email and password, and returns user token if successfull
 */
export const userLogin = createAsyncThunk(
	"user/userLogin",
	async ({ email, password }, { rejectWithValue }) => {
		let mainData = { status: 400, token: 'fdfdfdfdfd'};

		if (email === 'tony@stark.com' && password === 'password123') {
			mainData.status = 200;
			mainData.token = '0101010101';
			return mainData;
		}

		if (email === 'steve@rogers.com' && password === 'password456') {
			mainData.status = 200;
			mainData.token = '0202020202';
			return mainData;
		}

		return rejectWithValue('bad user or password');
	}
);

/**
 *  Redux userProfile action : fetch request returning a promise.
 *  The userProfile action (POST) returns email, firstName, lastName, user id, createdDate & updatedDate if successfull
 */
export const userProfile = createAsyncThunk(
	"user/userProfile",
	async ({ data }, { rejectWithValue }) => {
		let mainData = { status: 400, token: 'fdfdfdfdfd'};

		if (sessionStorage.getItem("userToken") === '0101010101') {
			mainData.firstName = 'tony';
			mainData.lastName = 'stark';
			mainData.email = 'tony@stark.com';
			mainData.id ='01';
			mainData.createdAt = '1990-12-01';
			mainData.updatedAt = '2022-12-01';
			mainData.status = 200;
			return mainData;
		}

		if (sessionStorage.getItem("userToken") === '0202020202') {
			mainData.firstName = 'steve';
			mainData.lastName = 'rogers';
			mainData.email = 'steve@rogers.com';
			mainData.id ='02';
			mainData.createdAt = '1990-12-01';
			mainData.updatedAt = '2022-12-01';
			mainData.status = 200;
			return mainData;
		}

		return rejectWithValue('bad token');
	}
);

/**
 *  Redux userName action : fetch request returning a promise.
 *  The userName action (PUT) requires firstName & lastName parameters, and returns email, firstName, lastName, user id, createdDate & updatedDate if successfull
 */
export const userName = createAsyncThunk(
	"user/userName",
	async ({ firstName, lastName }, { rejectWithValue }) => {

		let mainData = { status: 400, token: 'fdfdfdfdfd'};

		if (sessionStorage.getItem("userToken") === '0101010101') {
			mainData.firstName = firstName;
			mainData.lastName = lastName;
			mainData.email = 'tony@stark.com';
			mainData.id ='01';
			mainData.createdAt = '1990-12-01';
			mainData.updatedAt = '2022-12-01';
			mainData.status = 200;
			return mainData;
		}

		if (sessionStorage.getItem("userToken") === '0202020202') {
			mainData.firstName = firstName;
			mainData.lastName = lastName;
			mainData.email = 'steve@rogers.com';
			mainData.id ='02';
			mainData.createdAt = '1990-12-01';
			mainData.updatedAt = '2022-12-01';
			mainData.status = 200;
			return mainData;
		}

		return rejectWithValue('bad token');

	}
);
