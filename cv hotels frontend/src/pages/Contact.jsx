import React from 'react';

const Contact = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Contact Us</h2>
            <p style={styles.subtext}>We are here to help. Reach out to us directly using the details below.</p>

            <div style={styles.cardContainer}>
                {/* Location Card */}
                <div style={styles.card}>
                    <div style={styles.icon}>📍</div>
                    <h3 style={styles.cardTitle}>Our Location</h3>
                    <p style={styles.cardText}>CV Hotels Main Branch<br/>Bengaluru, Karnataka, India</p>
                </div>

                {/* Phone Card */}
                <div style={styles.card}>
                    <div style={styles.icon}>📞</div>
                    <h3 style={styles.cardTitle}>Call Us</h3>
                    <p style={styles.cardText}>+91 98765 43210</p>
                </div>

                {/* Email Card */}
                <div style={styles.card}>
                    <div style={styles.icon}>✉️</div>
                    <h3 style={styles.cardTitle}>Email Us</h3>
                    <p style={styles.cardText}>support@cvhotels.com</p>
                </div>
            </div>
        </div>
    );
};

// Simple inline styles to make it look professional immediately
const styles = {
    container: {
        padding: '50px 20px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        minHeight: '60vh'
    },
    heading: {
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '10px'
    },
    subtext: {
        fontSize: '1.1rem',
        color: '#666',
        marginBottom: '40px'
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        flexWrap: 'wrap'
    },
    card: {
        backgroundColor: '#fff',
        border: '1px solid #eaeaea',
        borderRadius: '10px',
        padding: '30px',
        width: '250px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
        transition: 'transform 0.2s ease-in-out'
    },
    icon: {
        fontSize: '2.5rem',
        marginBottom: '15px'
    },
    cardTitle: {
        fontSize: '1.2rem',
        color: '#222',
        marginBottom: '10px'
    },
    cardText: {
        color: '#555',
        lineHeight: '1.5'
    }
};

export default Contact;