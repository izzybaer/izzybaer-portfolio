import React, { Component } from 'react';
import './app.css';
import headshot from '../../assets/izzy.jpg';

export default class Landing extends Component {
  render() {
    const style = {
      hero: {
        borderRadius: '50%',
        height: '400px',
      },
      heroWrapper: {
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        padding: '1em',
      },
      header: {
        height: '150px',
        textAlign: 'center',
        width: '100%',
        fontSize: '2em',
        fontFamily: 'Roboto',
      },
    };
    return (
      <main>
        <section style={style.header}>
          <p>Izzy Baer</p>
        </section>
        <section>
          <div style={style.heroWrapper}>
            <img style={style.hero} src={headshot} />
          </div>
        </section>
        <section className="contact">
          <div className="social-wrapper">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/izzybaer/">
                <i class="fab fa-linkedin" />
              </a>
            </div>
            <div className="social-icon">
              <a href="mailto:izabellabaer@gmail.com">
                <i class="fas fa-envelope" />
              </a>
            </div>
            <div className="social-icon">
              <a href="https://www.instagram.com/izzybaer_/?hl=en">
                <i class="fab fa-instagram" />
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
