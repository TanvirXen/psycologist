import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export default function Main() {
	return (
		<Container maxWidth="xl">
			<div className="wrk">
				<div>
					<img src="logo.svg" alt="" className="logo" />
				</div>
				<Grid container spacing={2}>
					<Grid item md={10} lg={8} xl={8}>
						<h1>
							Mehrin Mostafa, Psychologist, helps people who are dissatisfied
							with their lives, particularly in their relationships or their
							search for a partner.
						</h1>
					</Grid>
					<Grid item md={2} lg={4} xl={4}></Grid>
					<Grid item md={4} lg={4} xl={4}>
						<img src="mehrin.png" alt="" className="profile" />
					</Grid>
					<Grid item md={8} lg={8} xl={8}>
						<h2>
							Mehrin helps people who are frustrated with patterns that keep
							playing out in their lives and who seek meaningful and lasting
							change. They know an important shift needs to happen and are
							skeptical of generic advice.Providing mental health service with a
							single approach is not helpful always so my expertise areas are on
							Person Centered Therapy, Transactional Analysis, Cognitive
							Behavior Therapy, Mindfulness etc.
						</h2>
						<Button variant="contained" size="large" sx={{ maxWidth: 250 }} onClick={()=>window.open("Portfolio_Mehrin.pdf","_blank")}>
							Portfolio
						</Button>
					</Grid>
				</Grid>
			</div>
		</Container>
	);
}
