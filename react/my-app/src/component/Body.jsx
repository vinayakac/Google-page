import "./Body.css"
export default function Input() {
    return(
		<div class="body">
			<div class="input_field">
				<label>Username or email address</label>
				<input type="text" class="input"></input>
			</div>
			<div class="input_field">
			<label-1>Password</label-1>
			<input type="text" class="input2"></input>
			<a href="/" class="forgot">Forgot password?</a>
		</div>
		<div class="btn">
			<input type="submit" value="Sign in" class="sign_btn"></input>
		</div>
		{/* <div class="text">
			<p>New to GitHub? </p>
		</div> */}
		
		

		</div>
    )
}