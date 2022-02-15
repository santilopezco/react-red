import Styles from './Footer.module.css'
import Face from '../../../Assets/logos/Facebook.svg'
import Insta from '../../../Assets/logos/Instagram.svg'

const Footer = () => {
    return ( 
        <div className={Styles.ContainerFooter} >
            <div className={Styles.ContainerFooterContent} >
                <h1>Síguenos</h1>
                <img className={Styles.Instagram} src={Face} alt={'ImgFace'}></img>
                <img className={Styles.Facebook} src={Insta} alt={'ImgInsta'}></img>
            </div>
        </div>
     );
}
 
export default Footer;