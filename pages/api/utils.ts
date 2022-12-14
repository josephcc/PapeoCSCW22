import { google } from 'googleapis'
import creds from './joseph.json'

const SHEET_ID = '11hN1QgPiFEmnjj0NSdlinEv3f8G7UCwKIsQ_MOpkOJ4'

export interface PapeoType {
	author: string
	email: string
	title: string
	status: string
	link: string
	conference: string
	abstract: string
}

export async function getPapeos() {
	try {
		const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
		const jwt = new google.auth.JWT(
			creds.client_email,
			undefined,
			(creds.private_key || '').replace(/\\n/g, '\n'),
			target
		);

		const sheets = google.sheets({ version: 'v4', auth: jwt });
		const response = await sheets.spreadsheets.values.get({
			spreadsheetId: SHEET_ID,
			range: 'Sheet1', // sheet name
		});

		const rows = response.data.values;
		if (rows && rows.length) {
			let papeos = rows.map((row) => ({
				author: row[0],
				email: row[1],
				title: row[2],
				status: row[3],
				link: row[4],
				conference: row[5],
				abstract: row[6]
			}))
			papeos = papeos
								.filter(papeo => Boolean(papeo))
								.filter(papeo => ! Object.values(papeo).some(value => value === undefined))
								.filter(papeo => papeo.status.toLowerCase().trim() === 'done')
			console.log('POST', papeos)
			return papeos as PapeoType[]
		}
	} catch (err) {
		console.log(err);
	}
	return [];
}

