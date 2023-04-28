import Titre from "../components/Titre";

function Contact() {
    return (
        <div>
            <Titre text="Contact" />
            <form action="">
                <label htmlFor="nom">Nom</label>
                <input className="int" type="text" id="nom" />
                <label htmlFor="prenom">Prénom</label>
                <input className="int" type="text" id="prenom" />
                <label htmlFor="mail">Votre email</label>
                <input className="int" type="email" name="mail" id="mail" />
                <label htmlFor="message">Message</label>
                <textarea name="" id="message" cols="20" rows="10"></textarea>
                <div>
                    <input  type="checkbox" name="" id="btn" required="required" />
                    <label htmlFor="btn">
                        En cochant cette case, vous confirmez avoir lu et acceptez nos <br />
                        conditions générales d'utilisation et notre politique de confidentialité.
                    </label> 
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>

    )
}

export default Contact;