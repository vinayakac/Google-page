import React from 'react';
import "./Contact.css"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Image from "./images/image1.png"
// import Logo from "./images/image-2.png"

export class PhoneInputGfg extends React.Component {
    constructor(props) {
        super(props);
        this.state = { phone: "" };
    }
    render() {
        return (
            <div >
                <PhoneInput
                    country={'us'}
                    value={this.state.phone}
                    onChange={phone => this.setState({ phone })}
                />
            </div>
        );
    }
};


const Contact = () => {
    return <div className='contact-info-container'>
                <div className='contact-info-body'>
                    <div className='contact-info-details-container'>
                    <img src={Image} alt="#" className="box1"></img>
                        <div className='contact-info-info-icon'>
                            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.64288 15.0273L15.7857 20.1117L22.9286 15.0273" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7063 2.03719C15.0333 1.83771 15.4063 1.73291 15.7857 1.73291C16.1651 1.73291 16.5381 1.83771 16.8651 2.03719L17.221 1.45389L16.8651 2.03719L28.2937 9.01008C28.6053 9.20021 28.8646 9.47008 29.0453 9.79456C29.226 10.1191 29.3214 10.4866 29.3214 10.8612V26.649C29.3214 27.2246 29.0964 27.7742 28.6998 28.1775C28.3037 28.5804 27.769 28.8043 27.2143 28.8043H4.35714C3.80238 28.8043 3.26776 28.5804 2.87159 28.1775C2.475 27.7742 2.25 27.2246 2.25 26.649V25.7686H0.75V26.649C0.75 27.6144 1.12704 28.5428 1.80209 29.2293C2.47756 29.9161 3.39638 30.3043 4.35714 30.3043H27.2143C28.175 30.3043 29.0939 29.9161 29.7693 29.2293C30.4444 28.5428 30.8214 27.6144 30.8214 26.649L30.8214 10.8612C30.8214 10.2323 30.6613 9.6135 30.3559 9.06487C30.0503 8.51615 29.6095 8.05574 29.0749 7.7296L17.6463 0.756714C17.0852 0.414343 16.442 0.23291 15.7857 0.23291C15.1294 0.23291 14.4862 0.414343 13.9251 0.756714L2.49651 7.7296L2.49651 7.7296C1.96198 8.05574 1.52108 8.51616 1.21557 9.06487C0.9101 9.6135 0.749994 10.2323 0.75 10.8612V19.7686H2.25V10.8612C2.25 10.4866 2.34542 10.1191 2.52612 9.79456C2.70679 9.47008 2.96616 9.20021 3.27777 9.01008L14.7063 2.03719L14.3157 1.39695L14.7063 2.03719Z" fill="#fff"></path></svg>
                        </div>
                        <div>
                            <div class="contact-info-title">Email:</div>
                            <div class="contact-info-details">sales@delightcapitals.com</div>
                        </div>
                        <div className='contact-info-info-container'>
                        <div className='contact-info-info-icon2'>
                            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.0088 14.2516C27.3198 14.3457 27.6502 14.1702 27.7236 13.8537C28.0211 12.5726 28.0337 11.2379 27.7577 9.94112C27.4406 8.45127 26.7525 7.05821 25.7553 5.88737C24.7581 4.71652 23.4832 3.80467 22.0453 3.23391C20.7901 2.73565 19.4451 2.511 18.1035 2.57265C17.7811 2.58746 17.5508 2.87997 17.5904 3.20025C17.6291 3.5139 17.9126 3.73621 18.2284 3.72387C19.3819 3.67883 20.537 3.87577 21.6162 4.30416C22.8727 4.80293 23.9868 5.59979 24.8583 6.62297C25.7297 7.64616 26.331 8.86354 26.6082 10.1655C26.8442 11.2744 26.8387 12.4149 26.5948 13.5123C26.5244 13.8295 26.6979 14.1575 27.0088 14.2516Z" fill="#fff"></path><mask id="path-2-inside-1_46_168" fill="white"><path d="M22.6297 12.7021C22.8018 12.7484 22.9805 12.6466 23.0114 12.4711C23.0973 11.9847 23.0834 11.4847 22.9695 11.0018C22.8307 10.4139 22.548 9.86979 22.1466 9.41839C21.7453 8.96698 21.238 8.62248 20.6704 8.41591C20.2041 8.24622 19.7092 8.17398 19.2161 8.20229C19.0381 8.21251 18.9161 8.37799 18.9421 8.55434C18.968 8.73068 19.1321 8.85078 19.3102 8.84396C19.697 8.82915 20.084 8.88938 20.4496 9.02245C20.9166 9.19241 21.334 9.47585 21.6643 9.84726C21.9945 10.2187 22.2271 10.6664 22.3413 11.1501C22.4306 11.5287 22.4452 11.9202 22.3852 12.3025C22.3576 12.4786 22.4576 12.6557 22.6297 12.7021Z"></path></mask><path d="M22.6297 12.7021C22.8018 12.7484 22.9805 12.6466 23.0114 12.4711C23.0973 11.9847 23.0834 11.4847 22.9695 11.0018C22.8307 10.4139 22.548 9.86979 22.1466 9.41839C21.7453 8.96698 21.238 8.62248 20.6704 8.41591C20.2041 8.24622 19.7092 8.17398 19.2161 8.20229C19.0381 8.21251 18.9161 8.37799 18.9421 8.55434C18.968 8.73068 19.1321 8.85078 19.3102 8.84396C19.697 8.82915 20.084 8.88938 20.4496 9.02245C20.9166 9.19241 21.334 9.47585 21.6643 9.84726C21.9945 10.2187 22.2271 10.6664 22.3413 11.1501C22.4306 11.5287 22.4452 11.9202 22.3852 12.3025C22.3576 12.4786 22.4576 12.6557 22.6297 12.7021Z" fill="#fff" stroke="black" stroke-width="2" mask="url(#path-2-inside-1_46_168)"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.50028 10.7463L6.85554 11.5072L7.30785 12.3962C9.87755 17.4463 14.0723 21.1771 19.0134 23.7088L20.0057 24.2172L20.7786 23.4135L22.499 21.6244C22.5193 21.6058 22.5446 21.5924 22.5729 21.5859C22.6043 21.5786 22.6302 21.5817 22.6468 21.5875L22.6548 21.5902L22.6628 21.5928C24.6809 22.2595 26.8564 22.6186 29.0833 22.6186C29.1245 22.6186 29.165 22.634 29.1998 22.6688C29.2345 22.7036 29.25 22.7441 29.25 22.7852V28.6019C29.25 28.6431 29.2345 28.6836 29.1998 28.7183C29.165 28.7531 29.1245 28.7686 29.0833 28.7686C19.6847 28.7686 11.4159 23.9386 6.62331 16.6249L5.139 17.0911C10.1625 25.0119 19.0081 30.2686 29.0833 30.2686C30 30.2686 30.75 29.5186 30.75 28.6019V22.7852C30.75 21.8686 30 21.1186 29.0833 21.1186C27.0167 21.1186 25 20.7852 23.1333 20.1686C22.55 19.9686 21.8833 20.1186 21.4333 20.5686L19.6974 22.3738C14.9807 19.9572 11.0447 16.4326 8.64474 11.7159L10.45 9.58522C10.9167 9.11856 11.05 8.46856 10.8667 7.88522C10.25 6.01856 9.91667 4.01855 9.91667 1.93522C9.91667 1.01855 9.16667 0.268555 8.25 0.268555H2.41667C1.5 0.268555 0.75 1.01855 0.75 1.93522C0.75 5.70015 1.48404 9.29339 2.81683 12.5797L4.25325 12.1285C2.96202 8.98582 2.25 5.5438 2.25 1.93522C2.25 1.89405 2.26549 1.85355 2.30024 1.8188C2.335 1.78404 2.3755 1.76855 2.41667 1.76855H8.25C8.29117 1.76855 8.33167 1.78404 8.36642 1.8188C8.40118 1.85356 8.41667 1.89405 8.41667 1.93522C8.41667 4.17381 8.77408 6.32738 9.43734 8.34049C9.44827 8.37844 9.44756 8.41147 9.44155 8.43715C9.43593 8.46115 9.42324 8.49067 9.38934 8.52456L9.34557 8.56834L9.30555 8.61557L7.50028 10.7463Z" fill="#fff"></path></svg>
                        </div>
                        <div>
                            <div class="contact-info-title2">Phone:</div>
                            <div class="contact-info-details2">9035479766</div>
                        </div>
                        <div className='contact-info-info-container'>
                        <div className='contact-info-info-icon3'>
                            <svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.5745 15.8522C20.5745 19.0369 18.1423 21.5466 15.2284 21.5466C12.3146 21.5466 9.88232 19.0369 9.88232 15.8522C9.88232 12.6674 12.3146 10.1577 15.2284 10.1577C18.1423 10.1577 20.5745 12.6674 20.5745 15.8522Z" stroke="#fff" stroke-width="1.5"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.4356 5.90005L24.4393 5.90369C25.6427 7.11378 26.6013 8.56165 27.2566 10.1634C27.9119 11.7651 28.25 13.4871 28.25 15.2276C28.25 16.9681 27.9119 18.69 27.2566 20.2918C26.6013 21.8935 25.6427 23.3414 24.4393 24.5515L24.4356 24.5551L15.2492 33.8561L6.06448 24.5552L6.06073 24.5515C5.64181 24.1302 5.25257 23.6802 4.89545 23.2049L3.09515 23.2424C3.64468 24.0962 4.28183 24.8899 4.99716 25.6092L14.195 34.9234L15.2491 35.9908L16.3032 34.9235L25.5028 25.6092C26.8472 24.2574 27.9155 22.6426 28.6449 20.8598C29.3743 19.0769 29.75 17.162 29.75 15.2276C29.75 13.2931 29.3743 11.3782 28.6449 9.5954C27.9155 7.81256 26.8472 6.19777 25.5028 4.84595C19.8403 -0.8868 10.6596 -0.8868 4.99716 4.84595C3.65275 6.19777 2.58446 7.81256 1.85509 9.5954C1.12573 11.3782 0.75 13.2931 0.75 15.2276C0.75 16.2126 0.847428 17.1926 1.03937 18.1527L2.56544 18.1209C2.35638 17.1743 2.25 16.2038 2.25 15.2276C2.25 13.4871 2.58811 11.7651 3.24341 10.1634C3.89867 8.56165 4.85727 7.11378 6.06073 5.90369L6.06434 5.90005C11.1396 0.761833 19.3604 0.761833 24.4356 5.90005Z" fill="#fff"></path></svg>
                        </div>
                        <div>
                            <div class="contact-info-title3">Location:</div>
                            <div class="contact-info-details3">Basaveshwara Nagar, Bangalore-560079</div>
                        </div>
                    </div>
                    </div>
                        
                    </div>
         
         
                    <div className='contact-info-form-container'>
                        {/* <img src={Image} alt="#" className="box2"></img> */}
                    <div class="contact-info-header" Style="color: rgb(9, 9, 9);">Connect with us</div>
                        <div className='contact-info-form-section'>
                            <div className='contact-info-form-input-container'>
                                <div class="contact-info-form-title">Full Name</div>
                                <div>
                                    <input class="contact-info-form-input" placeholder="Eg. Kiran Kumar" value="" fdprocessedid="3ks1p"></input>
                                </div>
                            </div>

                            <div className='contact-info-form-input-container'>
                                <div class="contact-info-form-title">Email</div>
                                <div>
                                    <input class="contact-info-form-input" placeholder="Eg. kirankumar1234@gmail.com" value="" fdprocessedid="tiihxu" />
                                </div>
                            </div>

                            <div className='contact-info-form-input-container1'>
                                <div class="contact-info-form-title1">Phone Number</div>

                                <div>
                                    <div>
                                         <PhoneInputGfg />
                                    </div>
                                </div>
                            </div>
                            <div className='contact-info-button-block'>
                                 <button class="contact-info-form-button">CONNECT</button>
                            </div>
                        </div>
                        {/* <img src={Image} alt="#" className="box2"></img>
                        <div className='title'>
                            <div className='heading'>Connect with us</div>
                        </div>
                        <div className='box3'>
                            <div className='text-c'>Full Name</div>
                        </div>
                        <div className='box-3'>
                            <div className='eg1'>
                                <div className='eg-t'>Eg. Kiran Kumar</div>
                            </div>
                        </div>
                       
                        <div className='box4'>
                            <div className='text-c1'>Email</div>
                        </div>
                        <div className='box-4'>
                            <div className='eg2'>
                                <div className='eg-t1'>E mail id</div>
                            </div>
                        </div>
                        <div className='contact-info-form-input-container'>
                            <div class="contact-info-form-title">Phone Number</div>
                            <div>
                                <div>
                                    <PhoneInputGfg />
                                </div>
                            </div>
                        </div> */}
                    
                    </div>
                    
                </div>
            </div>;
}



export default Contact;