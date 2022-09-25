import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

export default function Education() {
	return (
		<div className="bgcl">
			<Container maxWidth="xl">
				<Grid container spacing={2}>
					<Grid item xs={12} md={7} lg={7} xl={7}>
						<h3>Education</h3>
						<div className="pd1">
							<p className="e1">
								MS in Counselling Psychology, University of Dhaka
							</p>
							<p className="e2">Grade - CGPA 3.84(First Class First)</p>
							<p className="e2">Year-2019-2020</p>
						</div>
						<div className="pd1">
							<p className="e1">BSc. Hons in Psychology, University of Dhaka</p>
							<p className="e2">Grade - CGPA 3.49</p>
							<p className="e2">Year-2014-2017</p>
						</div>
						<div className="pd1">
							<p className="e1">HSC from BCIC College, Mirpur, Dhaka</p>
							<p className="e2">Grade - GPA 5.00</p>
							<p className="e2">Year-2011-2013</p>
						</div>
						<div className="pd1">
							<p className="e1">
								SSC from Shaheed Abu Taleb High School, Mirpur, Dhaka
							</p>
							<p className="e2">Grade - GPA 5.00</p>
							<p className="e2">Year-2009-2011</p>
						</div>
					</Grid>
					<Grid item xs={12} md={5} lg={5} xl={5}>
						<img src="education.svg" alt="" className="imgs" />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
