export function Contact (){
return (
<div className="container">
<div className="contact">
    <h2>CONTACT</h2>
</div>
<div className="row" >
    <div className="column">
         <ul>
        <li><label for="fname">First Name</label></li>
        <li><input type="text" id="fname" name="firstname" placeholder="Your name.."/></li>
        <li><label for="lname">Last Name</label></li>
        <li><input type="text" id="lname" name="lastname" placeholder="Your last name.."/></li>
        <li><label for="email">Email</label></li>
        <li><input type="text" id="email" name="email" placeholder="Your email.."/></li>
        <li><label for="subject">Subject</label></li>
        <li><textarea className="text" id="subject" name="subject" placeholder="Write something.." ></textarea></li>
        <li><input type="submit" value="Submit"/></li>
     </ul>
        </div>
        
    </div>
    </div>
    )
}