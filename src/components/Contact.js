import { useTranslation } from "react-i18next";


export function Contact (){
    const {t} = useTranslation();
    
return (
   
<div className="container">
<div className="contact">


    <h2>{t("contact title")}</h2>
</div>
<div className="row" >
    <div className="column">
         <ul>
        <li><label for="fname">{t("first name")}</label></li>
        <li><input type="text" id="fname" name="firstname" placeholder={t("your name")}/></li>
        <li><label for="lname">{t("last name")}</label></li>
        <li><input type="text" id="lname" name="lastname" placeholder={t("your last name")}/></li>
        <li><label for="email">{t("email")}</label></li>
        <li><input type="text" id="email" name="email" placeholder={t("your email")}/></li>
        <li><label for="subject">{t("subject")}</label></li>
        <li><textarea className="text" id="subject" name="subject" placeholder={t("write something")}></textarea></li>
        <li><input type="submit" value={t("submit")}/></li>
     </ul>
        </div>
        
    </div>
    </div>
    )
}