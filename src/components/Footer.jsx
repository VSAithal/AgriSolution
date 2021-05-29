import React, { Component } from 'react';
import styles from "../assets/styles/footer.module.scss"
class FooterComponent extends Component {
    render() { 
        return ( 
            <>
           <footer className={styles.footerContainer}>
                <div className="text-center p-3">
                    © 2021 Copyright: &nbsp; 
                    <a href="https://www.agrilution.com" rel="noreferrer" target="_blank" className="headerFont">Agrilution</a>
                </div>
            </footer>
            </>
          );
    }
}
 
export default FooterComponent;