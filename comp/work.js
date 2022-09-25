import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
export default function Work() {
	const [more, setmore] = useState(false);
	return (
		<div className="wrk">
			<Container maxWidth="xl">
				<Grid container spacing={2}>
					<Grid item xs={12} md={7} lg={7} xl={7}>
						<h3>Work Experience</h3>

						<div className="pd1">
							<p className="e1">
								Universal College Bangladesh, Monash Pathways at UCB
							</p>
							<p className="e2">
								Senior Counsellor, Students’ Affairs and Events
							</p>
							<p className="e2">July,2022- Present</p>
							<div style={{ display: "flex" }}>
								<p
									className="e2"
									style={{ color: "#3C6562", fontWeight: "400" }}
								>
									Responsibilities:
								</p>
								<p className="e2">
									Conducting one to one counselling sessions with students,
									pastoral counselling classes, arranging events and programs
									for students etc.{" "}
								</p>
							</div>
						</div>
						<div className="pd1">
							<p className="e1">
								Psychological Health and Wellness Clinic (PHWC)
							</p>
							<p className="e2">Psychological Counselor (Full time) </p>
							<p className="e2">August 2020- June 2022 </p>
							<div style={{ display: "flex" }}>
								<p
									className="e2"
									style={{ color: "#3C6562", fontWeight: "400" }}
								>
									Responsibilities:
								</p>
								<p className="e2">
									Counselling sessions, case reporting, receiving supervision
									for professional growth and administrative work, conducting
									webinar and workshops. I have also worked in ‘Moner Jotno
									Mobile e” and provided tele counselling services{" "}
								</p>
							</div>
						</div>
						<div className="pd1">
							<p className="e1">BRAC IED</p>
							<p className="e2">
								Learning Support Facilitator, LSF. (Part time)
							</p>
							<p className="e2">June 2020- February 2021 </p>
							<div style={{ display: "flex" }}>
								<p
									className="e2"
									style={{ color: "#3C6562", fontWeight: "400" }}
								>
									Responsibilities:
								</p>
								<p className="e2">
									Provide tele counselling services to primary school teachers
									regarding mental well-being.{" "}
								</p>
							</div>
						</div>
						{more ? (
							<div></div>
						) : (
							<div style={{ textAlign: "center" }}>
								<Button
									variant="contained"
									size="large"
									sx={{ maxWidth: 250 }}
									onClick={() => setmore(true)}
								>
									Show More
								</Button>
							</div>
						)}

						{more ? (
							<div>
								<div className="pd1">
									<p className="e1">
										Student guidance and counselling office, TSC University of
										Dhaka{" "}
									</p>
									<p className="e2">Part time counselor</p>
									<p className="e2">Oct 2019 – Sep 2020 </p>
									<div style={{ display: "flex" }}>
										<p
											className="e2"
											style={{ color: "#3C6562", fontWeight: "400" }}
										>
											Responsibilities:
										</p>
										<p className="e2">
											Face to face counselling session with both male and female
											students and staff of University of Dhaka, supervised by
											the teachers of University of Dhaka.
										</p>
									</div>
								</div>
								<div className="pd1">
									<p className="e1">
										Dhaka University Optimistic Society (DUOS) (Voluntary
										Service)
									</p>
									<p className="e2">Peer Counselor at Monchithi</p>
									<p className="e2">July 2020- April 2021</p>
									<div style={{ display: "flex" }}>
										<p
											className="e2"
											style={{ color: "#3C6562", fontWeight: "400" }}
										>
											Responsibilities:
										</p>
										<p className="e2">Tele counselling sessions</p>
									</div>
								</div>
								<div className="pd1">
									<p className="e1">
										National Institute of mental Health (NIMH)
									</p>
									<p className="e2">Trainee Counselling</p>
									<p className="e2">June 2020- February 2021</p>
									<div style={{ display: "flex" }}>
										<p
											className="e2"
											style={{ color: "#3C6562", fontWeight: "400" }}
										>
											Responsibilities:
										</p>
										<p className="e2">
											• Face to face session (Pre-Covid)
											<br />• Tele counselling sessions (Post-covid)
										</p>
									</div>
								</div>
								<div style={{ textAlign: "center" }}>
									<Button
										variant="contained"
										size="large"
										sx={{ maxWidth: 250 }}
										onClick={() => setmore(false)}
									>
										Show less
									</Button>
								</div>
							</div>
						) : (
							<div></div>
						)}
					</Grid>
					<Grid item xs={12} md={5} lg={5} xl={5}>
						<img src="work.svg" alt="" className="imgs" />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
