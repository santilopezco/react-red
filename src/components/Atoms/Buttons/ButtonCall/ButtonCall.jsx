import React from 'react';
import Styles from'./ButtonCall.module.css';
import swal from 'sweetalert';

const ButtonCall = () => {
    
    const showAlert = () => {
        
        swal({
            text: 'Comunícate rápido y fácil al WhatsApp # 300 000 0000',    
            imageUrl: '../../Asset/logored.svg',
            imageHeigth: 212
        }); 
    }
        return ( 
            <div className={Styles.ButtonCall}>
                <button type='button' onClick={()=> showAlert()}>Llamar</button>
            </div>
        );
}
 
export default ButtonCall;