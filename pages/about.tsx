import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { CSSProperties } from 'react'

const HeadStyle: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	fontSize: '10px',
	color: 'royalblue'
}

export default function About() {
	return (
		<div style={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f5f6f7', color: '#2e3743', padding: '60px 0px' }}>
			<Head>
				<title>Papeo Project - About</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div style={{ maxWidth: '690px', width: '100%', color: '#555', padding: '0 20px', lineHeight: 1.5 }}>
				<h1>Welcome to Project Papeo 📄 📹</h1>
				<p>
					Are you attending CSCW 2022? &nbsp;
					<Link href="/" target="_blank" rel="noreferrer" style={{color: 'royalblue'}}>
						Try Author-Created Papeos Here!
					</Link>
					<br/>
						Are you a CSCW 2022 author? &nbsp;
					<Link href="https://docs.google.com/document/d/1ZuRS0CREp_ApnzEWhxKSdiyzp0B7zBF3Ip05l5Nt5Dc/" target="_blank" rel="noreferrer" style={{color: 'royalblue'}}>
						Create a Papeo for Your Paper!
					</Link>
					<br/>
					<span style={{ color: '#999' }}>(mobile not support yet)</span>
				</p>
				<p>
					Papeo is a system that allow authors to combine their research papers📄  with their conference presentation videos📹 into &ldquo;Papeos&rdquo; to provide a rich and interactive reading experience.
				</p>
				<p>

					We are currently trying out Papeo with CSCW 2022 authors and attendees to see if we can help provide scholars a new way to stay engaged during virtual conferences.
				</p>
				<p>
					You can play with &ldquo;Papeos&rdquo; other CSCW 2022 authors have already made or create your own using the links above!
				</p>
				<p>
					This project is the result of an internship project in the Semantic Scholar Research at the Allen Institute for AI (AI2).
					Our team is composed of...
				</p>
				<div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
					<div>
						<a href="https://taesookim.com/" target="_blank" rel="noreferrer" style={HeadStyle}>
							<Image unoptimized src="/heads/taesoo.jpeg" alt={'A photo of Tae Soo Kim'} width={110} height={110} style={{
								borderRadius: '65px'
							}} />
							Tae Soo Kim (KAIST)
						</a>
					</div>
					<div>
						<a href="https://joe.cat/" target="_blank" rel="noreferrer" style={HeadStyle}>
							<Image unoptimized src="/heads/joseph.jpeg" alt={'A photo of Joseph Chee Chang'} width={110} height={110} style={{
								borderRadius: '65px'
							}} />
							Joseph Chee Chang (AI2)
						</a>
					</div>
					<div>
						<a href="https://homes.cs.washington.edu/~axz/" target="_blank" rel="noreferrer" style={HeadStyle}>
							<Image unoptimized src="/heads/amy.png" alt={'A photo of Amy X. Zhang'} width={110} height={110} style={{
								borderRadius: '65px'
							}} />
							Amy X. Zhang (UW & AI2)
						</a>
					</div>
					<div>
						<a href="https://www.jonathanbragg.com/" target="_blank" rel="noreferrer" style={HeadStyle}>
							<Image unoptimized src="/heads/jonathan.jpeg" alt={'A photo of Jonathan Bragg'} width={110} height={110} style={{
								borderRadius: '65px'
							}} />
							Jonathan Bragg (AI2)
						</a>
					</div>
					<div>
						<a href="https://www.linkedin.com/in/mlatzke/" target="_blank" rel="noreferrer" style={HeadStyle}>
							<Image unoptimized src="/heads/matt.jpeg" alt={'A photo of Matt Latzke'} width={110} height={110} style={{
								borderRadius: '65px'
							}} />
							Matt Latzke (AI2)
						</a>
					</div>
				</div>
				<p>
					This deployment has been approved by the University of Washington IRB. While we do keep track of how people interact with the interface, we DO NOT collect any personal identifiable information.
				</p>
				<p>

					If you have any questions or feedback regarding the interface, please feel free to send us an email at taesoo.kim _AT_ kaist.ac.kr 😀
				</p>
			</div>
		</div>
	)
}
