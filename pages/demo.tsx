import Head from 'next/head'

const URL = 'https://paper-video-nav.apps.allenai.org/reader/papeo_paper'


export default function Demo() {

	return (
		<div style={{ width: '100%', height: '100vh', padding: '0', margin: '0', overflow: 'hidden' }}>
			<Head>
				<title>Papeo Project @ CSCW 2022</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<iframe src={URL} title="Papeo Demo" style={{ width: '100%', height: '100%', padding: '0', margin: '0', borderWidth: 0}}></iframe>
		</div>
	)
}
