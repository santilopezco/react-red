import Styles from './About.module.css'
import PageHeader from './../PageHeader/PageHeader.jsx'

const About = () => {
    return ( 
        <div className={Styles.Container}>
            <PageHeader title={'Quiénes Somos'}/>
            
        </div>
     );
}
 
export default About;