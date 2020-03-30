import React from "react"

export default () => {
	return (
		<div className="footer">
			{/* <div className="social"> */}
			<h3><i> Check me out below! </i></h3>
			{/* <button className="icon-btn twitter">
    		<a className="link" href="https://twitter.com/" target="_blank">
    			<i className="fa fa-twitter"></i>
    		</a>
        </button> */}
			<button className="icon-btn facebook">
				<a className="link" href="https://www.facebook.com/fenil.shah.5070" target="_blank" rel="noopener noreferrer">
					<i className="fa fa-facebook" ></i>
				</a>
			</button>
			<button className="icon-btn twitter">
				<a className="link" href="https://www.linkedin.com/in/sfenil/" target="_blank" rel="noopener noreferrer">
					<i class="fa fa-linkedin-square" ></i>
				</a>
			</button>
			<button className="icon-btn instagram">
				<a className="link" href="https://www.instagram.com/_fenilshah_/" target="_blank" rel="noopener noreferrer">
					<center>	<i className="fa fa-instagram"></i></center>
				</a>
			</button>
			<button className="icon-btn github">
				<a className="link" href="https://github.com/fcshah" style={{ float: "center" }} target="_blank" rel="noopener noreferrer">
					<i className="fa fa-github"></i>
				</a>
			</button>
		</div>

		// </div>
	)
}
