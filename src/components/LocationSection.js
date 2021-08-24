import React from 'react';
import styles from '../sass/components/locationSection.module.scss';

export default class LocationSection extends React.Component {
    render() {
        return (
            <div className="section" style={{ paddingTop: 0 }}>
                <div className={styles.container}>
                    <div className={styles.info_section}>
                        <span className={styles.title}>Location</span>
                        <div className={styles.location}>
                            <span className={styles.info_title}>Location: </span>
                            <span className={styles.info}>123 Marie Curie, Orléans, Ontario, A1B 2C3</span>
                        </div>
                        <div className={styles.telephone}>
                            <span className={styles.info_title}>Telephone: </span>
                            <span className={styles.info}>+1 (613) 123-4567</span>
                        </div>
                        <div className={styles.email}>
                            <span className={styles.info_title}>Email: </span>
                            <span className={styles.info}>contact@havenclinicare.ca</span>
                        </div>
                    </div>
                    <div className={styles.map_section}>
                        <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.2098563203785!2d-75.68225151924665!3d45.42105305857751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05a75ded2db5%3A0x4d1a138c49c5ccb2!2sEngineering%20Students&#39;%20Society%2C%20University%20Of%20uOttawa!5e1!3m2!1sen!2sca!4v1629650000867!5m2!1sen!2sca" allowFullScreen="" loading="lazy" title="location"></iframe>
                    </div>
                </div>
            </div>
        );
    }
}