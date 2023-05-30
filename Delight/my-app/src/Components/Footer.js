import React from 'react'
// import "../Component/Footer.css"
// import Logo from '../Assests/gold.png'
import "./Footer.css"
export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-content-container'>
                    <div>
                        <div className="footer-contentSection-1">
                            {/* <div className="footer-logo-container">
                                <img src={Logo} alt="Stick" className="logo-gold" />
                            </div> */}
                            {/* <p>GOLDENPROEPRTY CASTLE a concern of CANH Infrastructure Ltd., is a project catering to the needs of common man.
                                It offers Residential plots at Mysuru – Hunsur NH 275 near Manuganahalli Checkpost.
                                A destination that is favourite among residents of Musuru and surrounding areas .
                                This is a project to match your lifestyle requirments. We have been serving clientsfor a number of years.
                            </p> */}
                            {/* <div className="footer-socialmedia-link-container-1">
                                <div>
                                    <a traget="_new" href="https://twitter.com">
                                        <img className="footer-social-link-icons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAdCAYAAAC5UQwxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQDSURBVHgBtVZdTFtlGH572tP2FLqeFtxSh/REnILDAEayuQvpkhli5g8zasQLJfFGM43bnT8xVBfjzZKxxWR6xfDCJTMaFoPLlmBbDTJHoFNgLXOzpYBdW1pOKf3htKfH7ytr05Zz2rLhk7zN6fu8532+9zvv9yODKnHirMPcsdfQrpQr2gx6isa+dCbDLixE5l23wrZP3++0wf2i70MrM/qHr/+GJ7KyxmWEcub2xdxXxpcG8TtwL/j+srs/GOEqCpWaNxAXrGiQVQvhEV6dDjq2KlRqP/+66K5YLQ64Nhty369Yzq7NLm8SlefFjlnpvtdbxtser2dgm/BAHUXvrNP0gObw0PWrQ0nsk+XIK2NLgwc6jX3wP8CzEB1obdIdx8/ZCq2OQPujjO5rSq3IB8WTaSAVRNlETm8Uzoyvwo9zSZhdjEOzngANyoH9ckGAXD6VSr5/R+PLduvIN56sB/2cMtDqomSfj9yB55proGuvXlRsaCICJ2+itUhQG45VAPtoAqgUC2ouBV8+qwcDvUFhYfP+3bhzbQT+qKbdtebShBNJFRyfFODC74FNYiE2CaedPBKTF/lvcyTcQobhQlUWormJNr/9yZiJeKX74Z7S6jBInocEqYT+eQ28et4P9pmVPOfwcVlODHgQL+xRwaF9xiI/rvJId8MRhY6mXhJ78c3HSDjxz8bzDNTAO9MATXMr0FGTvttplKigNpmA1542inK76mvMCgOtYsTIn6bCoFXrIKrW5H14ym7fnTIpMLsoSU4QZG0Ex/GMGFlnMhSJVYsmZUqSIxUyRrLvj7YqUbetw1bR1agqyxNojbBiREujFnp1a9lvUi1M6gw8aVRK8liLWIulWKmABmMtmlbpb1KK3ocyINbxOfC84CF4PmOXCnhjXx0cNaWrmtrOVBjeeoouG+MLxK4TE5N3bOWC3jtAw1cdGdAm4pIxrRCDgRd3QiW4/g7ZFVN/hoYPHYyeanxQmx8e3gvHlgGCq2mwe9dhSU5BmpJvSqDg09Bdm4CPzfqyU4nh/TfKTk2FholzAwfZaefy6UISN8wjyjQ42Qz4BXLTFqZOrSOhOFx4RgEne4wVxTAWfWvDWCu7eV+67B14oqX+g8Iqza16ZABhtG/6UaWBKJf1a0kCDUgHhSdLJcTiKc93F29+VuQ88+1ffcFVTtiu0z5nAZQT5xYdyej4kmW7BXFOKAeHM2TZjkpxZY65kAWqwRdnJy3z6Lp3z2Loejn4g+sYbAX4YL7hjpzbijCu6jdHwHr+kpuRyiurRrj3+T0WvZ7q2lFLMni7KwQ+/f3BuMcfiF2ccYWHP3q3w1YuX0XBInF0lQQ1tB/uasj+H/llkYUUePD6qjbHf/0BpN4N88O9AAAAAElFTkSuQmCC" alt="twitter" />
                                    </a>
                                    <a traget="_new" href="https://www.facebook.com">
                                        <img className="footer-social-link-icons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOwSURBVHgBvVdZTBNBGP7brnYrKptCvVBcoSpGo1WCRo1JqzHGGx88HojW+GD0QfHB6Bvw4hEfPF6M0ZhiTIwnxsQQE7XVqEhibSFaaEB3vShnt5UWWuiyziy2lrNTBL7k7/wznfm/Of5/5l8FEMJcWM6uXzcvX5+lnZs+Vc20Cp0sNVHJtwe7v3Hf/c43jian5ZyJJ7GlGJ7IyuzZmWWeM3PKzlkzJhlpNQUSapf6GVAi8fpD4KoTbP5AqGT35vk2GAnul9cZa74IXEdnRGpH8juB4D4BJJ2hiORwtZaZT1vZZPjg4TOuqM0XIiIbTDB5mxASbtx15Q9mf8D2vrM3Xly+OL0wIvXdxmSBDfvRlj95zpuPFiwp7f9fDK8qPUUrl+mK/5ewP3GFw2OKP2dVVMFnuDQn3TLxr7OMFmiagrRUjVEQN5Y635eGopORYf/UzC3M1rI9hMbsrjao4AKyrkuhYK8xY8i+2LurXd5La3KnncB1Cv9cuVVtXoQII0CGU6W1cP1VY6yel6EZlhQvJDNjUiEKwRLLJZMPTwLWr559nHSFLz809SEkBZNKw9ZNmYVYp3A8MVPUBlJSa40Q0x8cXQQGPUM0DvvJ9DTNAVQUUwU7sg3aVDWQbm1X3Owy02nQMmqicZg0K3Mqi285SqFQEK1ye1El1DeHICj+8+3t551ymctOhtunchPa0DI05OXpWEoUJRYI4O2SoCncN5ii9RlaGkghij0GirRzwSodtAQi8plWeeRwg8NrdaBBcb3RkAbJgJj0SH62XAZRuFR5er330IbZoGdTIRnM1Gl4ZaRbcipg/PD05U+fsqrW61SMAyumqOf8YLlgcirdbp/zR0PAB2MMTNrY2mHDuhJfS56WDpsKxhZKxFrLCfITJ1+DFR+bLofDZNfDBHQW6H6XhRR4lTX1Xv7Y/qWWaF3G68qGstxl0/LFBO8aSkeQiLKuoVVIErNTiOXGPdfBKGlsV6XJ256tWjF9X4qGYobjnUApZSIsWE8EFSL85QlathjnlkTbYqPw2T6y8rvCYdE3Ws6Mz9Fe1cyfufaxJL59gP23jp+GnHk6K61WMSKMDIo4wptlblP/fHjQRd0p59gFc1KsOXqUSSSZL2GDXcgpP7u9j2/ecR/EOwjJ4EXFr+IfjQEhGOrNa9sT5LwdqB9Oe4ZKPYmBH/m3do+5utZrreP8suF4wfmx+6tPsCHvP3vVYSSxmbTPmE9aDQuzGEaP3tB6PgDubz6e9Bsmij9g8xVNMqk+FAAAAABJRU5ErkJggg==" alt="facebook" />
                                    </a>
                                    <a traget="-new" href="https://www.instagram.com">
                                        <img className="footer-social-link-icons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVVSURBVHgBrZZ7bFNVHMe/vb1b2/W5h3RdV9jcJjCHQIIRhdiOGMOixkUD/iFKtxAfIZppYuIfJhLxD8VEFmI0xk0GUXCRIK9kYNRuMnSWQAcytsKgXWHr1o2u7dqu7+u53db13nW4Ad/ktPfce879nN/r3CPAAmVsMKk2blQbCh+S6Qvyc1Q0RanY+8OjfjsEzMCRk9b2li+e7caD0O5vLIazFpepb8DH+COJeduoL8KYe8Zsf15wGnGvMn5oKmnrvG1iX3Y3WKbGwvcdvGxcDA+H22yGq3bv+GJhfMtPdTj2Lgj41Q+92x2uIHM/wPTWa/Pu5zMEPAtLnnlKa5FIaFWmBYX9MQT98eQ1kzY1rzAbd1N3z1jjxrVL3pvp0zMXbHaWLVWY+MCe1j70d47AZvEiQmUjIphu5DoqyEJiGi6RCVG+WobanVrkqbmLWF6mamhqvdqx45XKYxxLL10f/7hsmXIXB/jdBViaLyN/nQ5afQlomYhAKCQEQsST/1Syz5Cx7uEIzv/qxiTxxM4vy6Etk3DAjqEJz57Gi6UtjdWeKStJpvLjODowzhxavZcxf21eUOwumX2MwxFidhl7mc/fuZZxTGvbjaRRFPtTv2WFIU8l5qxs+MRlKGRA5Y514GvCGcCgZYzEOJrs93a60fT+VfSc80D/8kPo7/bDPRKZM690qWp7KqZyuXg7f0BicAzKQu5CAs4J/L27E7csd5IxDZPYPra1Auvrl+PplwpQtUGJYGAqyqy7+bEt1clLjB+Y1kwlEsMY+NAsRCGRzmbopNOLrreOJpNH/9ETkBQpYDvrhKXVmoxqzbtV0y4KI4uJcstiWhIxDf16jYFmyRWlcyuE9nohYqKp/uCPZgh9PugP1SFHo0je06xVQySjYW7uQ2WNDgUVSgJjIEqEyHacQCZpi+SrqbKlsow1KfR5CHQ2LtE+B9QEMgOc0aqtj0BMIO7r7mSfhUqYEITIDM1ViHLp8pKMTGQTK2NpqxWTOowQS/mKTYQhJhC2Tmeg7CKoeSwNRRJK6kyHPeNDcZGK4175cjWi5/swaR3ijBs8eSUJyavInYIy09B5LI1GYl4aNG13e8gkXslQojho4ax787YZ4D/2Fxz1+5CzaQ1EK3RwtV+H66ITq940QKqRpyyV3AUaCEbtVMtn1fZRd8jDfyjMYUBNuGYXIZeg+PsG5FZXIvTHRQzvOQqKuLtqVw3K33gyNW5yyEfcHZ7XvSOuQHuyZCKR2HHyx6lVamUpqAv/gAkEIJBKk/dobT6WfPo6lmB+hZ0ejrvTdYd4tNMy0p3ckX47N9jCH0Bt2gShcALM/mYsVKEhDxzfmqBdW4AsuWjO816ru531bKqGzT13bJUVuSWcUb8fR+JgMxJSNZiihwGVmqS1FImogERMiBiJXJxs/iGycQSJW33XxhBXKPBoUz3EGiXnVcFQDB3nBqq31FS0p6A/k9OCYYPWxO4aXJ+4wPxyGIlrNiTGgkgEBYhPso1CLEGTHYr91JE5xYXIfnwl8rfpIZSL51h5y+lvWblMUTfnwb/9440P6sTAazb2SzbDEaZDJ6nNXbn54s06jawQD0hs8pxos9V90rCuKyO0u+tASFjw/BmZJLt2WbFchfsUCzx++mbd269W/pR+X8gf2N15wJOlfOGATifTKGTZa7JoCveigds++6mOgeqG16pOL2rivoNXjGxWLyZ+7NGVPSGwZ6753itYCLzpiLVWVyit1RXLXyzIk6hy0jKcLQX3eAihcLzdesPd0XbG0Zg6B90PNF3s95cERfWcvhj9dj+sNz0e8r23/x8oXf8Be9jKuvDcLN4AAAAASUVORK5CYII=" alt="insta" />
                                    </a>
                                    <a traget="_blank" href="https://youtube.com">
                                        <img className="footer-social-link-icons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANuSURBVHgBtVZNTBNBFJ5uCxZKZSlEhVJZJGCIhLZGoh6kNGr8iUjxJBoj3uRgrDcvpCVeTLxATDQeDPiTqDFENBAkJrQQTVQwBWODYqBbRAoC7WKlP7bddWeblpbu9kfKl0x35s177+ubmfdmeCBJ3LhtqlNWSRSZGXy5tFAMXB4fGvCRhPWn0zo5bTe2XqkxgnSgWWtAn/dbdOZpwrHg8FC/3X7OBnVev53tbL5uwBL55XFN9A39uIrJxHpZYQ4KUoCd8ICZWVd7bc22a0kbweiGR+cN8aJKphk+2CxcUUdFCpVazu0xVJZLMJAGuNx+nCZXN50oxSPlSOTgfH3Fi3QRQmRnCbBdUpEBrh4rqWliWbd/73YFSDNgEBeadnfGkMJlzUOFerBJqKqQaGDKhcYC+HP2VLlOgm6JUeYRBBA8fggQK073V9bkKwTTyJ1YWEahuYAswUCgvoH+lkT5yRIKgOpgoY7uGhkBjBK3rcacPuf8EkUbUxTtL5VG5qKU07YU4w/meSha5OQhWR1blMj4OOBZrSBVwBWAq7MeMNrqSomG8Z2fn93AZoxwEaL0QcQwEA9wO9ggk4rlzHxBnhBjU+BxGDKkFgsAOh3gQuT+R4IkSSY7EHFOZkplLgy9Pkiu0SRtUiARMlwI2AhwHICxsVQsmDKLLC67QMqAZGp1sMF+krATXtDVriYEgQBFsClQKMeq07kLlMrglwPr8zQsJ4NciC8QGGJVqJYDTtI4hIytnN2WcHoZLmR4ZKGHTSFQq+ImjkdIR0lWs5dwu8PNcDFXm3mKcMiK2C9r/vBQOGe50oiiy98aoZx1a+Dlru8YKe26qcaZ2vtlcrmDJmVNPBhxAGwcX6eILkgI+0zK9A/MtC/aPTjYJNCXOfG093tbaMyQwmP88bPtktvjB5uBR90TbaEoIaKeK3efmPVnjpfpYHFOF0zmXx2qfUXaSBk/ctDXfcdYpmjilWNoXYZgY8UK4t2nuQdHDhRfTkr51n2TdsHhdfzvSxC3/aF6DVYtl38+m/DNq3vvl3iHn20VZeTliDIVyS43PBPmb3bj4Ohc48XTFT1cerxEjuDLovEopi2R5aq2ZPAV0h2iqHlYT+cXV3HvX/9LWGhaW5TGRD4Tkkb9AfiUFALFMVUxMx4YnCWAD+Dw9Kfi5x+K9yQhRRUFkAAAAABJRU5ErkJggg==" alt="youtube" />
                                    </a>
                                </div>
                            </div> */}
                        </div>
                        {/* <div className="footer-contentSection-2">
                            <div className="footer-header">Quick Links</div>
                            <div className='footer-header'>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB3SURBVHgBhY8BDYAgEEUPRgAjEMEKNLCBNEEb2cAIRpAIkgD/beeGes6/vXHb+7sdREitdSAtEB3YQdKkF14FByJ3QAArCmSMmS/JmeS9FVyzhQtFChsKxTYygwWM4ODZNiKIiDxjbeZro1yb5GL//M6n6FXxlxMzB1jCP/KcPAAAAABJRU5ErkJggg==" alt="" className="vector-image" />
                                <a href="/" className="footer-links">HOME</a>
                            </div>
                            <div className='footer-header'>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB3SURBVHgBhY8BDYAgEEUPRgAjEMEKNLCBNEEb2cAIRpAIkgD/beeGes6/vXHb+7sdREitdSAtEB3YQdKkF14FByJ3QAArCmSMmS/JmeS9FVyzhQtFChsKxTYygwWM4ODZNiKIiDxjbeZro1yb5GL//M6n6FXxlxMzB1jCP/KcPAAAAABJRU5ErkJggg==" alt="" />
                                <a href="/about-us" className="footer-links">ABOUT US</a>
                            </div>
                            <div className='footer-header'>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB3SURBVHgBhY8BDYAgEEUPRgAjEMEKNLCBNEEb2cAIRpAIkgD/beeGes6/vXHb+7sdREitdSAtEB3YQdKkF14FByJ3QAArCmSMmS/JmeS9FVyzhQtFChsKxTYygwWM4ODZNiKIiDxjbeZro1yb5GL//M6n6FXxlxMzB1jCP/KcPAAAAABJRU5ErkJggg==" alt="" />
                                <a href="/blogs" className="footer-links">BLOGS</a>
                            </div>
                            <div className='footer-header'>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB3SURBVHgBhY8BDYAgEEUPRgAjEMEKNLCBNEEb2cAIRpAIkgD/beeGes6/vXHb+7sdREitdSAtEB3YQdKkF14FByJ3QAArCmSMmS/JmeS9FVyzhQtFChsKxTYygwWM4ODZNiKIiDxjbeZro1yb5GL//M6n6FXxlxMzB1jCP/KcPAAAAABJRU5ErkJggg==" alt="" />
                                <a href="/#contact" className="footer-links">CONTACT US</a>
                            </div>
                        </div> */}
                        {/* <div className="footer-contentSection-3">
                            <div className="footer-header">CONTACT US</div>
                            <div className="footer-contact-us-content-container">
                                <img className="footer-social-icons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAANCAYAAACdKY9CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACMSURBVHgBlZEBDYAgEEXvTGAEIxDBBkawghGMYAQbOBNoA21gBCOcn+2cyFDgb28Mxr/PHSwiJREZQMy8UkwwHPJoSjG4OnITJHa/ALOz32MGm1Br8U0HEBcuLhZKlZPS5pgGcALjnRstWIZMoyZ1um+9sU8hU3//iQT09bzKSXuJ6b+vCksNGmB7mC8GycU48PLOCQAAAABJRU5ErkJggg==" alt="phone" />
                                <div className="footer-content">90354 79766, 90354 79767</div>
                            </div>
                            <div className="footer-contact-us-content-container">
                                <img className="footer-social-icons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACXSURBVHgBpZKNCcIwEIXfFQfoCHES6wY6gXEScQNH6CbWSXQDu8H5Dh5SS/2JffDBJbkPkiPm7g2AHX7Pxcxao3jlIqEs60pSS45fmjuyVZ0qFY3kpRqGuUkIVs9df82B1CTHE8hJ6w25D/ryWHQJWUIi54meHMNxTCeuWItx9gu8T/pwhgp/ZpbYoSx9OBZVTK9E5JfrH5MBg2uLXPCwAAAAAElFTkSuQmCC" alt="inbox" />
                                <div className="footer-content">golden@property.com</div>
                            </div>
                            <div className="footer-contact-us-content-container">
                                <img className="footer-social-icons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAPCAYAAAAyPTUwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACSSURBVHgBjVDBDYAgDCy6ACM4giOwgY7AKIzgCG5gnMARHIER9OurXhMfhBTkkoOkvfYODCVg5hnXBA7gDe7GmJUy0QCerCNKPxVHrkP6tsfhofdUhwUfUuxly6K4HaRYjl80lze6gqUOWa/E2MArq58iDtwGL2LLDV+XRnE/YpdnL8UJpceGJqEyUBcmA6NWfwFpdn76C5jvwwAAAABJRU5ErkJggg==" alt="location" />
                                <div className="footer-content"> Basaveshwara Nagar, Bangalore-560079</div>
                            </div>
                            <div className="footer-golden-property-online">EXPERIENCE Golden Property APP ON MOBILE</div>
                            <div className="footer-online-app-container">
                                <div className="footer-online-app">
                                    <div className="footer-online-app-icon">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKLSURBVHgBrZTLS1RRHMe/53pHNHPmTumiJ9NCemggYRH0Jwhh2cKFCxHaRUmkaUkxRBFj0GMRRgvdJRqFZQ+kcBZhVNJAjEk0zb1hM8FAzLSYl87c0+94x+bN+PrC9z5/58P3d865FyApri5FGBsgSRyiiyddfJMc3OzpflihdtmwDjFMcQXlCMoVMyivHUVShqab+M3F2lsPsAYxTPMtlPMPkhS3agbStlHoZYwMDeB2WAeGV8FLAU0GcMnVM8CuMfHGEMcLYOEMrHe0lQMrMoDCFoLuHMupZMPQ4/ZS4KVFQVmO/zYBv05lV3LeAWZ6h+DF/tJAqRD0MOA7kVPOdoDxawj1qHWBzo7CQHMKWAgaOgr4j+cNUvS4bcQ3McQ/YYK/hy0biAxgIWjwGPC7OQ1LxjH14xEOxQLithmVULkbQ3zOADO4U6us012mkzne6oRS8xRT30fQmCCYDMOm/2c/HdvyExZJap1vwofBz8nGaABFtJ3qWuWMxotKiYTxdrAbdf7KMgT3Ai3f8os4xqmTgZJAAZu824MGnxc6Y5Cmd4MlKHLb1+USJ8HsbB+dU90bX0UBqCUcxmtHLw7Oe8El+hxppCiWPordw+bQPnuWNeJN5pg0ZhmasiUaxssbfWj4Sck4wXRGe5usI8Q5P8/uzR5gR7Jh2Ql5GmqmZM/tlwwYE49EOpohrjvKqxYczOkMoYjkrIQENdOcjfdfRr2mGnMGsYt0p55IdipfJlWUkJwLe9Lbj3pVA2eiRe6hX9lpq+uVEyuUDItxYQ5H8Lj7Cuq9mliAEPXXV+OeGMQqJSOBSHU8oo9cuCrt92gxatMRC/Pbe7RnIaxVQ+3Xz2l1rfdVW4sN69Q/NPkG5Mr0ql8AAAAASUVORK5CYII=" alt="" />
                                        <a href="footer" className="footer-online-app-text">Coming Soon</a>
                                    </div>
                                </div>
                                <div className="footer-online-app">
                                    <div className="footer-online-app-icon">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAWCAYAAAAinad/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGtSURBVHgBrVQtb8JAGL67UkTFJrAjISFhYmKTY4awToJC7D/MTlHBR0hA8Q8mpjET2HXBMUOy2ZmJEdyZCQgpH3veptc0TQVc9yRN33vvvSfvt8E00O/3c8Vikc9mMy+qz7Aj0Ol0Srvdrr5er0uFQsGBaqlF1mq16vv9vsY5Z/hLx3Fk3EYcQtRsNnMgqakzyMZJdgeRWZZ1qWSQjnu93jTJzkhSxhNcLpdPDcP4BdHLYrH4bDQaJ7ZtW67rrqLvOIuEYprmHR5ckzOk2263c5xfhRA/SHwe8g2+M3UPWcLma7PZjAeDgfTJ2u02GTwqo2NBpKjwUATJfdAlIqAgH+RZJpvN2jjkmCYQ/hQFGZEs4FWJpQDlS8kCXuWZJihXFF5Ixv4R5JlkmqBc07xGyeYsBWjwlcxRiVsk8Z6lALWG53mjDDr4HWdi1+4zFOIK05M3JpOJV61WTejOWQrAu5Gq5lvKQkjaJD4ZKrLEMD8zPSyRryEJ4QpCuLJSqawQ/0XSA3y0jsz4BYie0LjfJPP4ZdA3tYBgjtmdqhUdbBd/DVH3oy3cbrcbttYfVHvEeuf1XcEAAAAASUVORK5CYII=" alt="" />
                                        <a href="footer" className="footer-online-app-text">Coming Soon</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-devider"></div>
                        <div className="footer-bottom">Copyright © 2021 Golden Property - All Rights Reserved.</div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
