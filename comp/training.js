import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

export default function Training() {
	return (
		<div className="bgcl">
			<Container maxWidth="xl">
				<Grid container spacing={2}>
					<Grid item xs={12} md={7} lg={7} xl={7}>
						<h3>Training & Workshop</h3>

						<div className="pd1">
							<p className="e1">
								Well Being Training from a NLP Trainer, Heal Foundation
							</p>
							<p className="e2">
								<span
									style={{ color: "#3C6562", fontWeight: "400" }}
								>Topic : </span>
								Psychological Well-being of Young Adults (6 hours) of HEAL Bangladesh Foundation.
							</p>
							<p className="e2">
								<span
									style={{ color: "#3C6562", fontWeight: "400" }}
								>Duration : </span>
								6 Hours
							</p>
						</div>
						<div className="pd1">
							<p className="e1">Suicide Prevention, Ghatail, Tangail </p>
							<p className="e2">
								<span
									style={{ color: "#3C6562", fontWeight: "400" }}
								>Topic : </span>
								Suicide and it’s prevention.       
							</p>
							<p className="e2">
								<span
									style={{ color: "#3C6562", fontWeight: "400" }}
								>Duration : </span>
								3 Hours
							</p>
						</div>
						<div className="pd1">
							<p className="e1">Stress Management</p>
							<p className="e2">
								<span
									style={{ color: "#3C6562", fontWeight: "400" }}
								>Topic : </span>
							 How to manage stress personally and at workplace, webinar 
							</p>
							<p className="e2">
								<span
									style={{ color: "#3C6562", fontWeight: "400" }}
								>Duration : </span>
								1.5 Hours
							</p>
						</div>
						<div className="pd1">
							<p className="e1">Covid Anxiety Management </p>
							<p className="e2">
								<span
									style={{ color: "#3C6562", fontWeight: "400" }}
								>Topic : </span>
							Taking care of mental heath during covid and reducing anxiety, webinar    
							</p>
							<p className="e2">
								<span
									style={{ color: "#3C6562", fontWeight: "400" }}
								>Duration : </span>
							 1.5 Hours
							</p>
						</div>
						<div className="pd1">
							<p className="e1">
								Liberating Ourselves and Counselling others by NVC
							</p>
							<p className="e2">
								<span
									style={{ color: "#3C6562", fontWeight: "400" }}
								>Topic : </span>
							 Resolving conflicts, NVC consciousness and mindfulness.             
							</p>
							<p className="e2">
								<span
									style={{ color: "#3C6562", fontWeight: "400" }}
								>Duration : </span>
								24 Hours
							</p>
						</div>
					</Grid>
					<Grid item xs={12} md={5} lg={5} xl={5}>
						<img src="training.svg" alt="" className="imgss" />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
