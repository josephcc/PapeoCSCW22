import Head from 'next/head'
import Link from 'next/link'

import {useState, useCallback, useEffect} from 'react'
import Papeo from './papeo'
import Header from './header'
import { getPapeos, PapeoType } from './api/utils'


export default function Home({papeos}: {papeos: PapeoType[]}) {

	const [filteredPapeos, setFilteredPapeos] = useState(papeos)
	const [query, setQuery] = useState('')
	const handleQuery = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value)
	}, [])

	useEffect(() => {
		const trimmed = query.trim().toLowerCase()
		if (query.length === 0) {
			setFilteredPapeos(papeos)
			return
		}
		setFilteredPapeos(papeos.filter(papeo => papeo.title.toLowerCase().includes(trimmed)))
	}, [query, papeos])


	return (
		<>
			<div style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', backgroundColor: '#f5f6f7', color: '#2e3743', padding: '60px 0px' }}>
				<Head>
					<title>Papeo Project @ CSCW 2022</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>
				<div style={{ width: '600px' }}>
					<Header />

					<hr />
					<input type="text" placeholder='🔎 Filter Papers' style={{
						width: '100%',
						padding: '6px 8px',
						borderRadius: '4px',
						border: '1px solid #aaa',
						marginTop: '-4px',
						marginBottom: '-2px',
						background: 'white'
					}} value={query} onChange={handleQuery} />
					<hr />

					{filteredPapeos.map(papeo => {
						return (<>
							<Papeo papeo={papeo} key={papeo.title} />
							<hr />
						</>)
					})}
				</div>
				<div style={{ width: '300px', marginLeft: '60px' }}>
					<div style={{ width: '100%', background: 'white', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)', padding: '20px', position: 'sticky', top: '20px' }}>
						<div style={{
							position: 'absolute',
							top: 0, left: 0,
							width: '100%',
							height: '6px',
							background: 'linear-gradient(270deg, #5492EF 0%, rgba(84, 146, 239, 0) 100%), #0F3875'
						}} />
						<div style={{ marginBottom: '12px' }}>Project Papeo</div>

						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<div style={{
								fontSize: '12px',
								lineHeight: '22px',
								fontStyle: 'normal',
								fontWeight: 400,
								color: '#536479'
							}}>Papeos Created</div>
							<div style={{
								fontSize: '12px',
								lineHeight: '22px',
								fontStyle: 'normal',
								fontWeight: 700,
								color: '#B85900'
							}}>{papeos.length}</div>
						</div>

						<hr />
						<div style={{
							fontSize: '12px',
							lineHeight: '22px',
							fontStyle: 'normal',
							fontWeight: 500,
						}}>
							Are you a CSCW 2022 author?
						</div>
						<div style={{
							fontSize: '12px',
							lineHeight: '22px',
							fontStyle: 'normal',
							fontWeight: 500,
							color: '#1857b6'
						}}>
							<a href='#' target='_blank' rel='noopener noreferrer'>Create a Papeo for your paper! (Disabled during review)</a>
						</div>
						<hr />
						<div style={{
							fontSize: '12px',
							lineHeight: '22px',
							fontStyle: 'normal',
							fontWeight: 500,
							color: '#1857b6',
							display: 'flex',
							justifyContent: 'space-between'
						}}>
							<Link href='/' target='_blank' rel='noopener noreferrer'>About This Project (Disabled during review)</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}


export async function getStaticProps() {
	const papeos = await getPapeos();
	return {
		props: {
			papeos
		},
		revalidate: 1, // In seconds
	};
}
