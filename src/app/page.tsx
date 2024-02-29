'use client'

import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import {useState} from "react";

import virtuverse from "../images/virtuverse_concept.png";
import virtuverseweb from "../images/virtuverse_website.png";
import vvapril from "../images/vvapril.png";
import nmn from "../images/nmn_game.png";
import uedocs from "../images/uedocs_website.png";
import allographic from "../images/allographic_website.png";
import deliciously from "../images/deliciously.png";

export default function Home() {
	const [readMore, setReadMore] = useState(false);

	return (
		<main className={styles.main}>
			<div className={styles.hero}>
				<p>Hey! My name is</p>
				<h1>Donatas Mockus</h1>
				<h2>
					<span
						className="underline_green">Game Developer</span> \&#8288;\ <span className="underline_red">Full-stack Web Developer</span> \&#8288;\ <span
					className="underline_blue">Software Engineer</span>
				</h2>
			</div>
			<section className={styles.about}>
				<h2>{!readMore && <span>
					[briefly]</span>} about me.</h2>
				<p>
					Hi! My name is Donatas Mockus and I&apos;m a software developer from Lithuania.
					I started my programming journey at the age of 13, making simple 2D platformers in Unity using C#
					and JavaScript (remember when that was in Unity?!).
					At the same time I took interest in programming in general, exploring languages like
					Ruby (which I swore I&apos;d never use again), C++, HTML, and CSS.
				</p>
				<p>
					Today I am primarily a professional C++ developer. I spend most of my time developing
					video games using Unreal Engine 5 but also delve into other paradigms such as web development,
					compiler design, and embedded programming.
				</p>
				<div className={styles.read_more} data-visible={readMore}>
					<p>
						Thank you, I spent 10 whole minutes animating this button, so I appreciate your interest!
					</p>
					<p>
						In my mid-teens I got tired of programming and started exploring different hobbies. I started
						out with graphic design creating logos for myself and friends. That led to an interest in 3D
						modeling; I used to make abstract renders I&apos;d post to Instagram.
						Eventually I started drawing, mostly some wacky abstract sketches but I have created a couple
						of murals too.
					</p>
					<p>
						All of this eventually came full circle when I took an interest in cryptography and netsec.
						I quickly realised how valuable programming was to these activities and decided to get back into
						it, however, I quickly grew tired of making ultimately pointless applications on my own and so
						when I turned
						16 or 17 I wanted to collaborate with someone. I often say that I didn&apos;t choose game
						development,
						rather it chose me and that&apos;s exactly what happened - I was asked to work on an RPG called
						Growth of Glia.
						We made some nice progress and that project made me interested in project management. I had the
						privilege to lead a small team of artists, writers, and composers.
						Glia was a passion project for us and many of us were still teenagers trying to bring our ideas
						to life, but that was a lot more difficult than we imagined. Passion fizzled out and I started
						to look for something new. That&apos;s how I found Virtuverse.
					</p>
					<p>
						Virtuverse without a doubt had the biggest impact of my life. I started out as a gameplay
						developer
						fixing some bugs and it snowballed into me managing the project, attending Sweden Game Arena and
						GDC, and
						moving to Sweden. In our first three years we released six major updates, built a passionate and
						supportive community, and built a game I&apos;m genuinely
						proud of.
					</p>
					<p>
						While programming is still my primary hobby (and day-job!), I maintain an interest in a great
						number of subjects such as digital electronics, music, chemistry, photography, woodworking,
						knitting, baking, gardening, and many more.
						Even within computer science I enjoy working on a variety of areas beyond games like compiler
						design, open source software, system administration, UI/UX design, performance critical
						application
						development... Honestly, if I had to list it all, I&apos;d have to update this website monthly!
					</p>
				</div>
				<button className="text_button" onClick={() => setReadMore(!readMore)}>read
					{readMore ? " less" : " more"}.
				</button>
			</section>
			<section className={styles.experience}>
				<h2>experience.</h2>
				<div className={styles.grid}>
					<div className={styles.column}>
						<h3 className="underline_green">game development</h3>
						<p>
							Unreal Engine and Unity generalist. I have worked on more than 8 titles
							both at indie studios and with individual clients. While I specialise in
							gameplay development, network development, and UI/UX implementation, I am also very
							comfortable with
							game design, environment design, and AI behaviour implementation.
						</p>
						<h4>Engines & languages</h4>
						<p>
							Unreal Engine 4 and 5, Unity
						</p>
						<p>
							C++, C#
						</p>
					</div>
					<div className={styles.column}>
						<h3 className="underline_red">web development</h3>
						<p>
							Passionate about beautiful and accessible websites. I&apos;m highly experienced in web
							design for
							both small and enterprise scale websites, writing supporting back-end APIs, deployment, and
							on-going support.
						</p>
						<h4>Languages & frameworks</h4>
						<p>
							Typescript, HTML, CSS, React, NextJS, Vue
						</p>
						<h4>Back-end tech & databases</h4>
						<p>Node, Python, .NET, MySql, PostgreSQL, Redis, DynamoDB</p>
						<h4>Devops</h4>
						<p>AWS, Azure, Google Cloud, nginx</p>
					</div>
					<div className={styles.column}>
						<h3 className="underline_blue">software engineering</h3>
						<p>
							Experienced in developing highly scalable and robust desktop applications,
							embedded software, time critical applications, and libraries.
						</p>
						<h4>Languages</h4>
						<p>C++, C#, Rust, Python, Java</p>
					</div>
				</div>
			</section>
			<section className={styles.projects}>
				<h2>projects.</h2>
				<p>
					Unfortunately many of my projects are covered by an NDA and so I can&apos;t share them (yet!), but
					here&apos;
					s a small handful that I can!
				</p>
				<h3 className="underline_green">games</h3>
				<div className={styles.panels}>
					<div className={styles.panel} style={{gridColumn: "span 3"}}>
						<Image src={virtuverse} alt={"Concept art for Virtuverse by Keegan"}/>
						<div className={styles.panel_content}>
							<h3>Virtuverse</h3>
							<p> Virtuverse is an RCE MMO-RPG set in a virtual world. A sort of sandbox-on-rails,
								Virtuverse
								allows players to specialise in different professions: crafting, mining, hunting, and
								many
								more; go on quests, ally or fight different factions, and explore the large and open
								worlds.

								I have worked on Virtuverse for more than four years along with a team of extremely
								talented
								developers and artists. Over the course of these four years, we have shipped more than 6
								major updates and are currently working on the 7th, which is a complete rewrite in
								Unreal
								Engine 5. </p>
							<div className={styles.tech}>
								<p>Tech:</p>
								<p>
									Unreal Engine 4/5, C++, AWS Gamelift, DynamoDB, Python, NodeJs, PostgreSQL,
									Perforce
								</p>
							</div>
						</div>
					</div>
					<div className={styles.panel} style={{gridArea: "span 1 / span 3"}}>
						<div className={styles.panel_content}>
							<h3>Terraforma</h3>
							<p>
								Terraforma is a 2D, hex-tile based game where the player controls an intricate network
								of
								plant roots and must restore the soil&apos;s thriving ecosystem. The game explores the
								nuances of
								soil science and underlines the importance of taking care of our planet and the
								environment.
							</p>
							<div className={styles.tech}>
								<p>Tech:</p>
								<p>Unity 2D, C#, git</p>
							</div>
						</div>
					</div>
					<div className={styles.panel} style={{gridArea: "span 1 / span 3"}}>
						<Image src={nmn} alt={"Screenshot of No Man's North website"}/>
						<div className={styles.panel_content}>
							<h3>No Man&apos;s North</h3>
							<p>
								No Man&apos;s North explores the saga of James Heresy, an average man living in British
								Columbia who finds himself in the midst of the next ice-age. Accompanied only by his dog
								Monty, he must survive the harsh wilderness before the oncoming storm makes him perish.
							</p>
							<div className={styles.tech}>
								<p>Tech:</p>
								<p>Unity 3D, C#, git</p>
							</div>
						</div>
					</div>
					<div className={styles.panel} style={{gridArea: "span 1 / span 4"}}>
						<Image src={"https://cdn.akamai.steamstatic.com/steam/apps/1361570/header.jpg?t=1695841211"}
							   width={900} height={300} alt={"Uprising title screen"}/>
						<div className={styles.panel_content}>
							<h3>Uprising</h3>
							<p>
								Unleash carnage on the streets in this modern-day riot simulator. Play as either the
								&quot;friendly&quot; Police force, unleashing havoc on the streets with tear gas,
								shotguns and
								shield walls, or stand in solidarity with the &quot;peaceful&quot; Protestors armed with
								everything from machetes to a surprising arsenal of cactus weaponry.

							</p>
							<div className={styles.tech}>
								<p>Tech:</p>
								<p>Unreal Engine 5, Blueprints, Subversion</p>
							</div>
						</div>
					</div>
					<div className={styles.panel} style={{gridArea: "span 1 / span 2"}}>
						<div className={styles.panel_content}>
							<h3>Galaxy of Battlecruisers</h3>
							<p>
								Gallaxy of Battlecruisers is a space warfare-themed game where players control
								different classes of ships and battle other players on the server.
								A heavy focus on tactics this game allows players to develop intricate strategies to
								outmaneuver and outgun their opponents. Each class of ship comes with its own strengths
								and weaknesses, encouraging players to experiment with various playstyles to find the
								one that suits them best. The game&apos;s dynamic environment adds an extra layer of
								complexity, as players must adapt to changing conditions such as asteroid fields.
							</p>
							<div className={styles.tech}>
								<p>Tech:</p>
								<p>Unreal Engine 5, C++, SteamAPI, Perforce</p>
							</div>
						</div>
					</div>
					<div className={styles.panel} style={{gridArea: "span 1 / span 6"}}>
						<div className={styles.panel_content}>
							<h3>Frostfall</h3>
							<p>
								First-person, survival-horror, and resource management game where the
								player finds itself stranded on an antarctic research station during a harsh
								polar night. They must survive by maintaining their base, keeping their vitals
								in check, and performing science tasks all the while solving the mystery of why
								the night never ends.
							</p>
							<div className={styles.tech}>
								<p>Tech:</p>
								<p>Unreal Engine 5, C++</p>
							</div>
						</div>
					</div>
				</div>


				<h3 className="underline_red">web</h3>
				<div className={styles.panels}>
					<div className={styles.panel} style={{gridArea: "span 2 / span 2"}}>
						<Image src={uedocs} alt={"Screenshot of UE docs homepage"}/>
						<div className={styles.panel_content}>
							<h3>UE Docs</h3>
							<p>
								After working with Unreal Engine for over 5 years, I became frustrated with the poor
								quality of the official documentation, so I decided to create my own open sourced
								documentation for it. Anyone with some knowledge of markdown and who wishes to
								contribute can submit documentation.
							</p>
							<div className={styles.tech}>
								<p>Tech:</p>
								<p>
									NextJS, Typescript, Contentlayer
								</p>
							</div>
						</div>
					</div>
					<div className={styles.panel} style={{gridArea: "span 2 / span 4"}}>
						<Image src={allographic} alt={"Screenshot of allographic.io homepage"}/>
						<div className={styles.panel_content}>
							<h3>allographic.io</h3>
							<p>
								In late 2022, I along with a business partner started a tech consultancy firm. We
								specialise in software development, and full-stack web application development and
								support.
							</p>
							<p>
								The website, beyond the everyday user facing side, offers a fully featured dashboard for
								tracking projects, invoices, quotes, and business metrics.
							</p>
							<div className={styles.tech}>
								<p>Tech:</p>
								<p>NextJS, Typescript, Auth.js, PostgreSQL</p>
							</div>
						</div>
					</div>
					<div className={styles.panel} style={{gridArea: "span 1 / span 3"}}>
						<Image src={virtuverseweb}
							   alt={"Screenshot of Virtuverse.io homepage"}/>
						<div className={styles.panel_content}>
							<h3>Virtuverse</h3>
							<p>
								I have worked at Virtuverse as a game developer for over five years now. I also
								contributed to the development of the website.
							</p>
							<div className={styles.tech}>
								<p>Tech:</p>
								<p>Xsolla</p>
							</div>
						</div>
					</div>
					<div className={styles.panel} style={{gridArea: "span 1 / span 3"}}>
						<Image src={vvapril}
							   alt={"Screenshot of april.virtuverse.io homepage"}/>
						<div className={styles.panel_content}>
							<h3>Virtuverse April Fools Site</h3>
							<p>
								A website for downloading VirtuverseRPG, a little parody game created by
								the wonderful AugyTek of the Virtuverse community.
							</p>
							<div className={styles.tech}>
								<p>Tech:</p>
								<p>Vue</p>
							</div>
						</div>
					</div>
					<div className={styles.panel} style={{gridColumn: "span 4"}}>
						<Image src={deliciously} alt={"Screenshot of allographic.io homepage"}/>
						<div className={styles.panel_content}>
							<h3>Deliciously</h3>
							<p>
								A recipe sharing website with a focus on high quality recommendations, curated and
								tested recipes.
							</p>
							<div className={styles.tech}>
								<p>Tech:</p>
								<p>NextJS, Javascript, Node, Python</p>
							</div>
						</div>
					</div>
					<div className={styles.panel} style={{gridColumn: "span 2"}}>
						<div className={styles.panel_content}>
							<h3>rehype-cl-img</h3>
							<p>
								An open source Rehype plugin for Contentlayer allowing developers to embed any number of
								images in their mdx files, complete with image file management and automatic image size
								detection.
							</p>
							<div className={styles.tech}>
								<p>Tech:</p>
								<p>Typescript</p>
							</div>
						</div>
					</div>
				</div>


				<h3 className="underline_blue">software</h3>
				<div className={styles.panels}>
					<div className={styles.panel} style={{gridColumn: "span 2"}}>
						<div className={styles.panel_content}>
							<h3>alxLang</h3>
							<p>
								A general purpose language that was born out of curiosity to build a front-end but
								spiraled
								out into a massive project involving a full back-end with all the IR, lowering, and
								register
								selection goodies. Compiles from plain text to AST, IR, gets lowered to MIR, then
								assembled
								into x86_64 wasm. Currently working on register selection.
							</p>
							<div className={styles.tech}>
								<p>Tech:</p>
								<p>
									C++
								</p>
							</div>
						</div>
					</div>
					<div className={styles.panel} style={{gridColumn: "span 2"}}>
						<div className={styles.panel_content}>
							<h3>cpp inquirer</h3>
							<p>
								An interactive command line interface for C+&#8288;+ similar to Inquirer.js.
							</p>
							<div className={styles.tech}>
								<p>Tech:</p>
								<p>C++</p>
							</div>
						</div>
					</div>
					<div className={styles.panel} style={{gridColumn: "span 2"}}>
						<div className={styles.panel_content}>
							<h3>coloforma</h3>
							<p>
								A library I made for C++ for printing formatted strings in the command line, with full
								8-bit colour support. Works very similar to fmt, but I made it before I knew it existed.
							</p>
							<div className={styles.tech}>
								<p>Tech:</p>
								<p>C++</p>
							</div>
						</div>
					</div>
					<div className={styles.panel} style={{gridColumn: "span 2"}}>
						<div className={styles.panel_content}>
							<h3>QCacheGrind</h3>
							<p>
								I made some contributions to the FOSS KCachegrind which is a KDE/Qt GUI used to
								visualize
								profiling data.
								It&apos;s mainly used as visualization frontend for data measured by
								Cachegrind/Callgrind. Both of these tools I use on a near daily basis when working on
								desktop applications to identify potential performance improvements.
							</p>
							<div className={styles.tech}>
								<p>Tech:</p>
								<p>C++</p>
							</div>
						</div>
					</div>
					<div className={styles.panel} style={{gridColumn: "span 2"}}>
						<div className={styles.panel_content}>
							<h3>Matt Godbolt&apos;s Compiler Explorer</h3>
							<p>
								A fork of godbolt.org compiler explorer which supports my own programming language
								alxLang.
							</p>
							<div className={styles.tech}>
								<p>Tech:</p>
								<p>C++</p>
							</div>
						</div>
					</div>
				</div>
				<h3 className="underline_blue">tidbits</h3>
				<p>Some projects that either haven&apos;t seen the light of day or aren&apos;t worth mentioning
					above</p>
				<ul>
					<li>AlxLib - a C++ library for random utility functions I used often.</li>
					<li>74LS - software emulation of a few popular TI 74LS series chips.</li>
					<li>QCalc - (not a Qt application despite the name) a simple windows app for common thermodynamic
						and other physics calculations. Not as fancy as it sounds. C# and WinForms.
					</li>
					<li>RandomPulsarGraph - Generate random plots that resemble the Joy Divisions - Unknown Pleasures
						album cover. Made with Processing (the Java library).
					</li>
					<li>DownLink - an Unreal Engine 4 game replicating the old Introversion Software game Uplink from
						2001.
					</li>
					<li>Chemlist - following my interest in chemistry, I made an application to track inventory and
						various projects in my lab. Made with C# and WinForms.
					</li>
					<li>Space Invaders - a space invaders clone but with slightly different rules. Made in Unreal Engine
						5 for fun in about three days.
					</li>
					<li>Invoicing - a tiny CLI app that I still use to track my quotes, invoices, and budgets for my
						clients. Made in Python, compiled with Cython.
					</li>
					<li>CppLT - all C++ keywords redefined in Lithuanian. As a joke.</li>
					<li>Countless of RESTful service projects serving the dozens of projects I juggle. Most in NodeJs, some
						in .NET or Python.
					</li>
				</ul>


			</section>
		</main>
	);
}
