import React  from "react";
//import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import "./Footer.css";


//import baladi from'./assets/baladi.png';

export class PhoneInputGfg extends React.Component {
  constructor(props) {
    super(props);
    this.state = { phone: "" };
  }
  render(){
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


export function ContactUs() {
  return (
    <div className="feedback-form-container">
      
      <div className="contact-info-container">
        <div className="contact-information-container">
          <span> Contact Information</span>
        </div>
        <div className="contact-reachUs-container">
          <div className="reachUs-description-container">
            <div className="description-email-container">
                <div className="svg-icon-container">
                    {/* <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7063 2.03719C15.0333 1.83771 15.4063 1.73291 15.7857 1.73291C16.1651 1.73291 16.5381 1.83771 16.8651 2.03719L17.221 1.45389L16.8651 2.03719L28.2937 9.01008C28.6053 9.20021 28.8646 9.47008 29.0453 9.79456C29.226 10.1191 29.3214 10.4866 29.3214 10.8612V26.649C29.3214 27.2246 29.0964 27.7742 28.6998 28.1775C28.3037 28.5804 27.769 28.8043 27.2143 28.8043H4.35714C3.80238 28.8043 3.26776 28.5804 2.87159 28.1775C2.475 27.7742 2.25 27.2246 2.25 26.649V25.7686H0.75V26.649C0.75 27.6144 1.12704 28.5428 1.80209 29.2293C2.47756 29.9161 3.39638 30.3043 4.35714 30.3043H27.2143C28.175 30.3043 29.0939 29.9161 29.7693 29.2293C30.4444 28.5428 30.8214 27.6144 30.8214 26.649L30.8214 10.8612C30.8214 10.2323 30.6613 9.6135 30.3559 9.06487C30.0503 8.51615 29.6095 8.05574 29.0749 7.7296L17.6463 0.756714C17.0852 0.414343 16.442 0.23291 15.7857 0.23291C15.1294 0.23291 14.4862 0.414343 13.9251 0.756714L2.49651 7.7296L2.49651 7.7296C1.96198 8.05574 1.52108 8.51616 1.21557 9.06487C0.9101 9.6135 0.749994 10.2323 0.75 10.8612V19.7686H2.25V10.8612C2.25 10.4866 2.34542 10.1191 2.52612 9.79456C2.70679 9.47008 2.96616 9.20021 3.27777 9.01008L14.7063 2.03719L14.3157 1.39695L14.7063 2.03719Z" fill="#090909"/>
                    <svg width="17" height="7" viewBox="0 0 17 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.64288 1.02734L8.78574 6.11174L15.9286 1.02734" stroke="#090909" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </svg> */}

                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.64288 15.0273L15.7857 20.1117L22.9286 15.0273" stroke="#090909" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7063 2.03719C15.0333 1.83771 15.4063 1.73291 15.7857 1.73291C16.1651 1.73291 16.5381 1.83771 16.8651 2.03719L17.221 1.45389L16.8651 2.03719L28.2937 9.01008C28.6053 9.20021 28.8646 9.47008 29.0453 9.79456C29.226 10.1191 29.3214 10.4866 29.3214 10.8612V26.649C29.3214 27.2246 29.0964 27.7742 28.6998 28.1775C28.3037 28.5804 27.769 28.8043 27.2143 28.8043H4.35714C3.80238 28.8043 3.26776 28.5804 2.87159 28.1775C2.475 27.7742 2.25 27.2246 2.25 26.649V25.7686H0.75V26.649C0.75 27.6144 1.12704 28.5428 1.80209 29.2293C2.47756 29.9161 3.39638 30.3043 4.35714 30.3043H27.2143C28.175 30.3043 29.0939 29.9161 29.7693 29.2293C30.4444 28.5428 30.8214 27.6144 30.8214 26.649L30.8214 10.8612C30.8214 10.2323 30.6613 9.6135 30.3559 9.06487C30.0503 8.51615 29.6095 8.05574 29.0749 7.7296L17.6463 0.756714C17.0852 0.414343 16.442 0.23291 15.7857 0.23291C15.1294 0.23291 14.4862 0.414343 13.9251 0.756714L2.49651 7.7296L2.49651 7.7296C1.96198 8.05574 1.52108 8.51616 1.21557 9.06487C0.9101 9.6135 0.749994 10.2323 0.75 10.8612V19.7686H2.25V10.8612C2.25 10.4866 2.34542 10.1191 2.52612 9.79456C2.70679 9.47008 2.96616 9.20021 3.27777 9.01008L14.7063 2.03719L14.3157 1.39695L14.7063 2.03719Z" fill="#090909"/>
                    </svg>

                    


                </div>
                <div className="details-container">
                    <span className="d1">Email</span>
                    <span className="d2-email">sales@delightcapitals.com</span>
                </div>
            </div>
            <div className="description-phone-container">
            <div className="svg-icon-container">
                {/* <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.50028 10.7463L6.85554 11.5072L7.30785 12.3962C9.87755 17.4463 14.0723 21.1771 19.0134 23.7088L20.0057 24.2172L20.7786 23.4135L22.499 21.6244C22.5193 21.6058 22.5446 21.5924 22.5729 21.5859C22.6043 21.5786 22.6302 21.5817 22.6468 21.5875L22.6548 21.5902L22.6628 21.5928C24.6809 22.2595 26.8564 22.6186 29.0833 22.6186C29.1245 22.6186 29.165 22.634 29.1998 22.6688C29.2345 22.7036 29.25 22.7441 29.25 22.7852V28.6019C29.25 28.6431 29.2345 28.6836 29.1998 28.7183C29.165 28.7531 29.1245 28.7686 29.0833 28.7686C19.6847 28.7686 11.4159 23.9386 6.62331 16.6249L5.139 17.0911C10.1625 25.0119 19.0081 30.2686 29.0833 30.2686C30 30.2686 30.75 29.5186 30.75 28.6019V22.7852C30.75 21.8686 30 21.1186 29.0833 21.1186C27.0167 21.1186 25 20.7852 23.1333 20.1686C22.55 19.9686 21.8833 20.1186 21.4333 20.5686L19.6974 22.3738C14.9807 19.9572 11.0447 16.4326 8.64474 11.7159L10.45 9.58522C10.9167 9.11856 11.05 8.46856 10.8667 7.88522C10.25 6.01856 9.91667 4.01855 9.91667 1.93522C9.91667 1.01855 9.16667 0.268555 8.25 0.268555H2.41667C1.5 0.268555 0.75 1.01855 0.75 1.93522C0.75 5.70015 1.48404 9.29339 2.81683 12.5797L4.25325 12.1285C2.96202 8.98582 2.25 5.5438 2.25 1.93522C2.25 1.89405 2.26549 1.85355 2.30024 1.8188C2.335 1.78404 2.3755 1.76855 2.41667 1.76855H8.25C8.29117 1.76855 8.33167 1.78404 8.36642 1.8188C8.40118 1.85356 8.41667 1.89405 8.41667 1.93522C8.41667 4.17381 8.77408 6.32738 9.43734 8.34049C9.44827 8.37844 9.44756 8.41147 9.44155 8.43715C9.43593 8.46115 9.42324 8.49067 9.38934 8.52456L9.34557 8.56834L9.30555 8.61557L7.50028 10.7463Z" fill="#090909"/>
                
                <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_46_170" fill="white">
                <path d="M4.62973 4.70206C4.80183 4.74844 4.98045 4.64664 5.01142 4.47111C5.09725 3.98469 5.08343 3.48472 4.96947 3.00181C4.83074 2.41393 4.54797 1.86979 4.14664 1.41839C3.7453 0.96698 3.23799 0.62248 2.67039 0.415909C2.20413 0.246219 1.70921 0.17398 1.21609 0.202295C1.03814 0.212512 0.91614 0.377993 0.942065 0.554336C0.96799 0.730679 1.13211 0.850778 1.31022 0.843959C1.69698 0.829151 2.08402 0.889384 2.44964 1.02245C2.91665 1.19241 3.33405 1.47585 3.66426 1.84726C3.99447 2.21866 4.22712 2.66637 4.34126 3.15005C4.43062 3.52874 4.44515 3.92017 4.38518 4.30254C4.35757 4.47863 4.45764 4.65567 4.62973 4.70206Z"/>
                </mask>
                <path d="M4.62973 4.70206C4.80183 4.74844 4.98045 4.64664 5.01142 4.47111C5.09725 3.98469 5.08343 3.48472 4.96947 3.00181C4.83074 2.41393 4.54797 1.86979 4.14664 1.41839C3.7453 0.96698 3.23799 0.62248 2.67039 0.415909C2.20413 0.246219 1.70921 0.17398 1.21609 0.202295C1.03814 0.212512 0.91614 0.377993 0.942065 0.554336C0.96799 0.730679 1.13211 0.850778 1.31022 0.843959C1.69698 0.829151 2.08402 0.889384 2.44964 1.02245C2.91665 1.19241 3.33405 1.47585 3.66426 1.84726C3.99447 2.21866 4.22712 2.66637 4.34126 3.15005C4.43062 3.52874 4.44515 3.92017 4.38518 4.30254C4.35757 4.47863 4.45764 4.65567 4.62973 4.70206Z" fill="#090909" stroke="black" stroke-width="2" mask="url(#path-1-inside-1_46_170)"/>
                </svg>

                <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0088 12.2516C10.3198 12.3457 10.6502 12.1702 10.7236 11.8537C11.0211 10.5726 11.0337 9.23793 10.7577 7.94112C10.4406 6.45127 9.75246 5.05821 8.75528 3.88737C7.75809 2.71652 6.48317 1.80467 5.04531 1.23391C3.79008 0.735655 2.44509 0.511005 1.10353 0.572649C0.781148 0.587462 0.550833 0.879965 0.590389 1.20025C0.629124 1.5139 0.912565 1.73621 1.22835 1.72387C2.38185 1.67883 3.53698 1.87577 4.61618 2.30416C5.87271 2.80293 6.98685 3.59979 7.85827 4.62297C8.7297 5.64616 9.33104 6.86354 9.60816 8.16549C9.84419 9.27436 9.83871 10.4149 9.59483 11.5123C9.52435 11.8295 9.69786 12.1575 10.0088 12.2516Z" fill="#090909"/>
                </svg>


                </svg> */}
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.0088 14.2516C27.3198 14.3457 27.6502 14.1702 27.7236 13.8537C28.0211 12.5726 28.0337 11.2379 27.7577 9.94112C27.4406 8.45127 26.7525 7.05821 25.7553 5.88737C24.7581 4.71652 23.4832 3.80467 22.0453 3.23391C20.7901 2.73565 19.4451 2.511 18.1035 2.57265C17.7811 2.58746 17.5508 2.87997 17.5904 3.20025V3.20025C17.6291 3.5139 17.9126 3.73621 18.2284 3.72387C19.3819 3.67883 20.537 3.87577 21.6162 4.30416C22.8727 4.80293 23.9868 5.59979 24.8583 6.62297C25.7297 7.64616 26.331 8.86354 26.6082 10.1655C26.8442 11.2744 26.8387 12.4149 26.5948 13.5123C26.5244 13.8295 26.6979 14.1575 27.0088 14.2516V14.2516Z" fill="#090909"/>
                <mask id="path-2-inside-1_46_168" fill="white">
                <path d="M22.6297 12.7021C22.8018 12.7484 22.9805 12.6466 23.0114 12.4711C23.0973 11.9847 23.0834 11.4847 22.9695 11.0018C22.8307 10.4139 22.548 9.86979 22.1466 9.41839C21.7453 8.96698 21.238 8.62248 20.6704 8.41591C20.2041 8.24622 19.7092 8.17398 19.2161 8.20229C19.0381 8.21251 18.9161 8.37799 18.9421 8.55434V8.55434C18.968 8.73068 19.1321 8.85078 19.3102 8.84396C19.697 8.82915 20.084 8.88938 20.4496 9.02245C20.9166 9.19241 21.334 9.47585 21.6643 9.84726C21.9945 10.2187 22.2271 10.6664 22.3413 11.1501C22.4306 11.5287 22.4452 11.9202 22.3852 12.3025C22.3576 12.4786 22.4576 12.6557 22.6297 12.7021V12.7021Z"/>
                </mask>
                <path d="M22.6297 12.7021C22.8018 12.7484 22.9805 12.6466 23.0114 12.4711C23.0973 11.9847 23.0834 11.4847 22.9695 11.0018C22.8307 10.4139 22.548 9.86979 22.1466 9.41839C21.7453 8.96698 21.238 8.62248 20.6704 8.41591C20.2041 8.24622 19.7092 8.17398 19.2161 8.20229C19.0381 8.21251 18.9161 8.37799 18.9421 8.55434V8.55434C18.968 8.73068 19.1321 8.85078 19.3102 8.84396C19.697 8.82915 20.084 8.88938 20.4496 9.02245C20.9166 9.19241 21.334 9.47585 21.6643 9.84726C21.9945 10.2187 22.2271 10.6664 22.3413 11.1501C22.4306 11.5287 22.4452 11.9202 22.3852 12.3025C22.3576 12.4786 22.4576 12.6557 22.6297 12.7021V12.7021Z" fill="#090909" stroke="black" stroke-width="2" mask="url(#path-2-inside-1_46_168)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.50028 10.7463L6.85554 11.5072L7.30785 12.3962C9.87755 17.4463 14.0723 21.1771 19.0134 23.7088L20.0057 24.2172L20.7786 23.4135L22.499 21.6244C22.5193 21.6058 22.5446 21.5924 22.5729 21.5859C22.6043 21.5786 22.6302 21.5817 22.6468 21.5875L22.6548 21.5902L22.6628 21.5928C24.6809 22.2595 26.8564 22.6186 29.0833 22.6186C29.1245 22.6186 29.165 22.634 29.1998 22.6688C29.2345 22.7036 29.25 22.7441 29.25 22.7852V28.6019C29.25 28.6431 29.2345 28.6836 29.1998 28.7183C29.165 28.7531 29.1245 28.7686 29.0833 28.7686C19.6847 28.7686 11.4159 23.9386 6.62331 16.6249L5.139 17.0911C10.1625 25.0119 19.0081 30.2686 29.0833 30.2686C30 30.2686 30.75 29.5186 30.75 28.6019V22.7852C30.75 21.8686 30 21.1186 29.0833 21.1186C27.0167 21.1186 25 20.7852 23.1333 20.1686C22.55 19.9686 21.8833 20.1186 21.4333 20.5686L19.6974 22.3738C14.9807 19.9572 11.0447 16.4326 8.64474 11.7159L10.45 9.58522C10.9167 9.11856 11.05 8.46856 10.8667 7.88522C10.25 6.01856 9.91667 4.01855 9.91667 1.93522C9.91667 1.01855 9.16667 0.268555 8.25 0.268555H2.41667C1.5 0.268555 0.75 1.01855 0.75 1.93522C0.75 5.70015 1.48404 9.29339 2.81683 12.5797L4.25325 12.1285C2.96202 8.98582 2.25 5.5438 2.25 1.93522C2.25 1.89405 2.26549 1.85355 2.30024 1.8188C2.335 1.78404 2.3755 1.76855 2.41667 1.76855H8.25C8.29117 1.76855 8.33167 1.78404 8.36642 1.8188C8.40118 1.85356 8.41667 1.89405 8.41667 1.93522C8.41667 4.17381 8.77408 6.32738 9.43734 8.34049C9.44827 8.37844 9.44756 8.41147 9.44155 8.43715C9.43593 8.46115 9.42324 8.49067 9.38934 8.52456L9.34557 8.56834L9.30555 8.61557L7.50028 10.7463Z" fill="#090909"/>
                </svg>


            </div>
                <div className="details-container">
                    <span className="d1"> Phone </span>
                    <span className="d2"> +91 8792694702   | +918496894702</span>
                    {/* <span className="d2-resized"> +91 8792694702 |</span>
                    <span className="d2-resized">  +91 8496894702</span> */}
                    
                </div>
            </div>
            <div className="description-location-container">
            <div className="svg-icon-container">
                <svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5745 15.8522C20.5745 19.0369 18.1423 21.5466 15.2284 21.5466C12.3146 21.5466 9.88232 19.0369 9.88232 15.8522C9.88232 12.6674 12.3146 10.1577 15.2284 10.1577C18.1423 10.1577 20.5745 12.6674 20.5745 15.8522Z" stroke="#090909" stroke-width="1.5"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.4356 5.90005L24.4393 5.90369C25.6427 7.11378 26.6013 8.56165 27.2566 10.1634C27.9119 11.7651 28.25 13.4871 28.25 15.2276C28.25 16.9681 27.9119 18.69 27.2566 20.2918C26.6013 21.8935 25.6427 23.3414 24.4393 24.5515L24.4356 24.5551L15.2492 33.8561L6.06448 24.5552L6.06073 24.5515C5.64181 24.1302 5.25257 23.6802 4.89545 23.2049L3.09515 23.2424C3.64468 24.0962 4.28183 24.8899 4.99716 25.6092L14.195 34.9234L15.2491 35.9908L16.3032 34.9235L25.5028 25.6092C26.8472 24.2574 27.9155 22.6426 28.6449 20.8598C29.3743 19.0769 29.75 17.162 29.75 15.2276C29.75 13.2931 29.3743 11.3782 28.6449 9.5954C27.9155 7.81256 26.8472 6.19777 25.5028 4.84595C19.8403 -0.8868 10.6596 -0.8868 4.99716 4.84595C3.65275 6.19777 2.58446 7.81256 1.85509 9.5954C1.12573 11.3782 0.75 13.2931 0.75 15.2276C0.75 16.2126 0.847428 17.1926 1.03937 18.1527L2.56544 18.1209C2.35638 17.1743 2.25 16.2038 2.25 15.2276C2.25 13.4871 2.58811 11.7651 3.24341 10.1634C3.89867 8.56165 4.85727 7.11378 6.06073 5.90369L6.06434 5.90005C11.1396 0.761833 19.3604 0.761833 24.4356 5.90005Z" fill="#090909"/>
                </svg>

               
                </div>
                <div className="details1-container">
                    <span className="d1"> Location</span>
                    <span className="d2"> No-657, 3rd Stage, 3rd Block, Basaveshwara Nagar, Bangalore -560079</span>

                </div>
            </div>
          </div>

          <div className="reachUs-sub-connectUs-container">
            <span className="connect-us-title"> Connect Us</span>
            <div className="connect-us-icons-container">
            <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="33.336" height="31.9972" rx="15.9986" fill="white"/>
            <path d="M21.065 24.9972V16.8012H23.83L24.241 13.5922H21.065V11.5482C21.065 10.6222 21.323 9.98817 22.652 9.98817H24.336V7.12717C23.5166 7.03936 22.693 6.99696 21.869 7.00017C19.425 7.00017 17.747 8.49217 17.747 11.2312V13.5862H15V16.7952H17.753V24.9972H21.065Z" fill="#F5A023"/>
            </svg>

            
            <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.335999" width="32.7743" height="32.5844" rx="16.2922" fill="white"/>
            <path d="M25.436 10.8898C24.7951 11.1738 24.1067 11.3656 23.383 11.4523C24.1298 11.0055 24.6884 10.3023 24.9548 9.47387C24.2532 9.89058 23.4854 10.1839 22.6847 10.3411C22.1462 9.76616 21.433 9.3851 20.6558 9.25705C19.8786 9.129 19.0808 9.26113 18.3864 9.63292C17.692 10.0047 17.1397 10.5954 16.8154 11.3132C16.4911 12.031 16.4128 12.8358 16.5927 13.6027C15.1712 13.5313 13.7805 13.1618 12.511 12.5182C11.2415 11.8746 10.1215 10.9713 9.22376 9.8668C8.91678 10.3963 8.74027 11.0103 8.74027 11.6641C8.73993 12.2528 8.88488 12.8324 9.16227 13.3515C9.43966 13.8707 9.84091 14.3134 10.3304 14.6403C9.76272 14.6222 9.20755 14.4688 8.71111 14.1929V14.2389C8.71105 15.0645 8.99662 15.8646 9.51937 16.5036C10.0421 17.1426 10.7698 17.5811 11.579 17.7446C11.0524 17.8871 10.5003 17.9081 9.96434 17.806C10.1927 18.5163 10.6374 19.1375 11.2363 19.5825C11.8352 20.0276 12.5582 20.2742 13.3042 20.2879C12.0378 21.282 10.4738 21.8213 8.86383 21.8189C8.57864 21.819 8.29368 21.8023 8.01044 21.769C9.64468 22.8198 11.5471 23.3775 13.49 23.3753C20.0669 23.3753 23.6624 17.928 23.6624 13.2036C23.6624 13.0501 23.6586 12.8951 23.6517 12.7416C24.351 12.2359 24.9547 11.6096 25.4344 10.8921L25.436 10.8898Z" fill="#F5A023"/>
            </svg>

            
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.110352" width="32.2325" height="32.2325" rx="16.1163" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7463 7.72497C13.6465 7.68353 13.9335 7.67432 16.2266 7.67432C18.5198 7.67432 18.8068 7.68429 19.7062 7.72497C20.6057 7.76564 21.2196 7.90915 21.7568 8.11713C22.3194 8.32971 22.8297 8.66201 23.2518 9.09178C23.6816 9.51311 24.0131 10.0227 24.2249 10.586C24.4337 11.1232 24.5764 11.7371 24.6178 12.6351C24.6593 13.5368 24.6685 13.8238 24.6685 16.1162C24.6685 18.4093 24.6585 18.6963 24.6178 19.5965C24.5772 20.4944 24.4337 21.1084 24.2249 21.6456C24.0131 22.209 23.681 22.7194 23.2518 23.1413C22.8297 23.5711 22.3194 23.9026 21.7568 24.1144C21.2196 24.3232 20.6057 24.4659 19.7078 24.5074C18.8068 24.5488 18.5198 24.558 16.2266 24.558C13.9335 24.558 13.6465 24.548 12.7463 24.5074C11.8484 24.4667 11.2344 24.3232 10.6972 24.1144C10.1339 23.9026 9.62344 23.5705 9.20149 23.1413C8.77201 22.7197 8.43966 22.2096 8.2276 21.6463C8.01963 21.1091 7.87688 20.4952 7.83544 19.5973C7.794 18.6955 7.78479 18.4085 7.78479 16.1162C7.78479 13.8231 7.79477 13.536 7.83544 12.6366C7.87612 11.7371 8.01963 11.1232 8.2276 10.586C8.43997 10.0227 8.77258 9.51258 9.20225 9.09101C9.62361 8.66163 10.1335 8.32928 10.6965 8.11713C11.2337 7.90915 11.8484 7.76641 12.7463 7.72497ZM19.6379 9.2445C18.7477 9.20383 18.4806 9.19538 16.2266 9.19538C13.9727 9.19538 13.7056 9.20383 12.8154 9.2445C11.9919 9.28211 11.5453 9.41948 11.2475 9.53536C10.8538 9.68885 10.5721 9.87073 10.2767 10.1662C9.99659 10.4387 9.78104 10.7704 9.64583 11.137C9.52995 11.4348 9.39258 11.8814 9.35497 12.7049C9.3143 13.5951 9.30586 13.8622 9.30586 16.1162C9.30586 18.3701 9.3143 18.6372 9.35497 19.5274C9.39258 20.3509 9.52995 20.7976 9.64583 21.0953C9.7809 21.4614 9.99656 21.7937 10.2767 22.0661C10.5491 22.3463 10.8814 22.5619 11.2475 22.697C11.5453 22.8129 11.9919 22.9502 12.8154 22.9878C13.7056 23.0285 13.9719 23.037 16.2266 23.037C18.4814 23.037 18.7477 23.0285 19.6379 22.9878C20.4614 22.9502 20.908 22.8129 21.2058 22.697C21.5995 22.5435 21.8811 22.3616 22.1766 22.0661C22.4567 21.7937 22.6724 21.4614 22.8074 21.0953C22.9233 20.7976 23.0607 20.3509 23.0983 19.5274C23.139 18.6372 23.1474 18.3701 23.1474 16.1162C23.1474 13.8622 23.139 13.5951 23.0983 12.7049C23.0607 11.8814 22.9233 11.4348 22.8074 11.137C22.654 10.7433 22.4721 10.4617 22.1766 10.1662C21.9041 9.88614 21.5724 9.67059 21.2058 9.53536C20.908 9.41948 20.4614 9.28211 19.6379 9.2445ZM13.1584 13.0479C13.5613 12.645 14.0397 12.3254 14.5661 12.1073C15.0926 11.8893 15.6568 11.777 16.2266 11.777C16.7965 11.777 17.3607 11.8893 17.8872 12.1073C18.4136 12.3254 18.8919 12.645 19.2949 13.0479C19.6978 13.4509 20.0174 13.9292 20.2355 14.4557C20.4535 14.9821 20.5658 15.5463 20.5658 16.1162C20.5658 16.686 20.4535 17.2502 20.2355 17.7767C20.0174 18.3031 19.6978 18.7815 19.2949 19.1844C18.4811 19.9981 17.3775 20.4553 16.2266 20.4553C15.0758 20.4553 13.9722 19.9981 13.1584 19.1844C12.3447 18.3707 11.8875 17.267 11.8875 16.1162C11.8875 14.9654 12.3447 13.8617 13.1584 13.0479ZM21.5281 12.4232C21.628 12.3291 21.7079 12.2158 21.7632 12.0902C21.8185 11.9645 21.848 11.8291 21.85 11.6918C21.852 11.5546 21.8264 11.4183 21.7748 11.2911C21.7232 11.1639 21.6466 11.0484 21.5496 10.9513C21.4525 10.8543 21.337 10.7777 21.2098 10.7261C21.0826 10.6745 20.9463 10.6489 20.8091 10.6509C20.6718 10.6529 20.5364 10.6824 20.4108 10.7377C20.2851 10.793 20.1718 10.8729 20.0777 10.9728C19.8945 11.167 19.7942 11.4249 19.7981 11.6918C19.802 11.9587 19.9097 12.2136 20.0985 12.4024C20.2873 12.5912 20.5422 12.6989 20.8091 12.7028C21.076 12.7067 21.3339 12.6064 21.5281 12.4232Z" fill="#F5A023"/>
            </svg>

            </div>
          </div>
        </div>
      </div>

      <div className="message-form-container">
        <div className="form-title-container">
            <span>Send us a Message</span>
        </div>
        <div className="form-inputfields-container">
            <form className="formy">
            <label className="form-title">Full Name
                 <input className="form-fillups" type="text" placeholder="eg. Kiran Kumar"/>
            </label>

            <label className="form-title">Phone Number
                 {/* <input className="fillups" type="text"  placeholder="Phone number"/> */}
                 <PhoneInputGfg/>
            </label>

            <label className="form-title">Email
                 <input className="form-fillups" type="text"  placeholder="eg. kirankumar1234@gmail.com"/>
            </label>

            <label className="form-title">Message
                 <input className="message-fillups" type="text"  placeholder="Message"/>
            </label>
            </form>
        </div>
        <div className="form-button-container">
            <button className="form-connect-button">
               <label>CONNECT</label> 
            </button>
        </div>
      </div>

    </div>
  );
}



function Footer() {
  return (
    <>
      <div className="footer-layout-container">
        
        <ContactUs />
         <div className="footer-copyright-container">
          <div className="Footer-container">
            {/* <p>happy</p> */}
            <div className="top-footer-container">
            <div className="logo-social-media-container">
              <div className="Logo-container">
                {/* <img className="baladi" src={baladi} alt="baladi"/> */}
                <img className="baladi" src={require("./assets/baladi.png")} alt=""/>
                
              </div>
              <div className="socialMedia-container">

                <div className="linkedin-container">
                  <img className="linkedin"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMsSURBVHgBxVi7bhNBFL27IYqoYoSEKJC8tIiHhYREx1JRIfEBSAklVQwthfkB5NDQ2jRUIKegAFHYEh/gpEIUKGtqpBgpQjGJPTk3vhOvR7vrfcwmRzrax507c/bO6846VABKKQ8XH1wFL4VM2+DQcZwe5YRLGQExPtgC9/DYBR+A141ia2BTTdEF16gsoPINFiMN8X0lhU8FXAc74C7YkChbEeRLpSzIp5xgQWBb6ioWwVCUnpAliEAW16Q8kLD3rYV+vu6KdG8/zZCIEpXeKQdQ/2tuJ23hhoS6EmF7MZmorfFYvcP9ZbIAGXfNRYV0/3um7ehIPYMoFWKX7AirSO/UkwrFzhgI+WIIU2QJaLMmk+y0l9yQcR2XbazW76OdyRwLu2QJaJN3irdgPaLhk2jV4pz399VVROmjROvnaKRukkVIl86PbV6neAGlcwY0bPJM5fsL8o4X0PYCJ56Ft0KvhtIFJJEOz2J+/x98NJnQXVxd16XfuH6FT5DQzBbYCDe6t2ghxRLx3Bj8n7QN99/DNt66cN0xJ4vYXia1o7W48rXBgi+JrCO+curgcjvG9gZt3qN49ECfZ6UHDigjHIeSlotFO8bTBNsO6GlhAdnFAYQ/Bi8eHtINs35E7X6CL5etsjD+uiEVgBk9PH/A0PgMHqysOD/w/MpwubKozswZbBQi9oBvxvMvyggWxtGymkWMx/TPfEUZoYWtUrnIsq964ICF8WLoUwFgDCUCEyAL7oB9V1bvSpGkEGPMIXvgdXWgBz+Ls5bXm1heTldOJxEcLC2MU53yzn6UOqKc9vT4Rm/ivHnyAdWL25qwCf9Bl53asDn/1fd4P8A4u6afl5ZoZLjzLA1CzwFFgw/PD+feyMGgRecEOWu0ogw6UfPpjJF01tAF/LgTUsnCujpBTCrEWWSHzgjShemyZ/mC0sdb6AzrpXXQZ71OWd2aWZThvJnbOb5OT3qkW+ij1fT/FotrFREovaCjVCcbULN/W0oE+hl8fRGkf/p5afwybb5q9s91g6bpSY+mOXpgFGVblWZZC2957SwHntxZgYisCauGmQ83AdjLcfo6wTHaWMsdAQuT9AAAAABJRU5ErkJggg=="
                  alt="linkedIN"/>
                {/* <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="0.98877" width="36.1825" height="36.1825" rx="18.0913" stroke="white"/>
                </svg> */}

                </div>

                <div className="facebook-container">
                  <img className="facebook"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ2SURBVHgBzVjBbdtAEFwJ+eRlpgJTFYSpIHzmE0SpQE4FcgEBwg6cVCClgrgDyRVIrkAMAgT5Wa7gMmvO2SeBkLhHyuYAA0l33OXc8m61y4G0gHMuxUcGnoNvgqmSXA8Gg61EYCBGQEyOjzE4AfWma/A3v3u8BRNQr12Cc/AGIkvpGioIXIArsGC0mtrNXYVZU7smjtNAUC6RoB9d0B34TdoADsbgBryUjhAsdBEVPV0VRWVyAjB6G5O4QFRzowiYxAWP7/jFHYDiVscuSk/5+A7c9xd4degCPdaFxDn/yA39B/ynNNgmPK153WSm0ZIIwO6rq4HRx4UurG5CwzkRI2DzGvzbVhh9bXai5veWRICZPYQ6/wC+EyM0X+5EjQMziUCNsEIiEey1ZMixT+BPeWGwEtGiIPPCMg70Abei1QtP48pqzdTQBKnRr57Oa42Y1k1RxVwDzCNqMH1y50M5LWL2rQYp8RG7Fzs+gyPwy974D46PEK2lROIVFZ6JETxBW+yHcm9q27KETtWHRqzkjz5hO+TqNPMn0g9o6rr1m3/JgT7gPbjwwm6karX6gFz2IjaVF4YmV6ma5PJBGI/12rVozzqCll3znRFWCQsxwnVUXfCv6LH0esz8Phm6DntII7QJLmpn3FMzkooBtPM0px1XtYuzYxddUtyz5DXcZ+oMvWXhqncVJxUH/xMX0Y3bW3ibqCnLaHtiD8SZu6cDPrWuv2q9aKYDdTJrGz2fEsDvnW2TIHoqcGywS3jq7liO503sYl51XkiVoX0Do82DJsaw2DzjfC5VIaqV7LWlcDQLCwQmvLm+bx3JbrF5T9H6vxfVff0HoEPBkEXc6TIAAAAASUVORK5CYII="
                  alt="fb"/>
                {/* <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.18256" y="0.989258" width="36.1825" height="36.1825" rx="18.0913" stroke="white"/>
                </svg> */}
                </div>

                <div className="twitter-container">
                {/* <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.36505" y="0.928223" width="36.1825" height="36.1825" rx="18.0913" stroke="white"/>
                </svg> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="white" version="1.1" id="Capa_1" width="39px" height="38px" viewBox="0 0 39 38" xml:space="preserve">
                  <g>
                    <path d="M30.414,10.031c0.014,0.297,0.021,0.595,0.021,0.897c0,9.187-6.992,19.779-19.779,19.779c-3.928,0-7.58-1.149-10.657-3.123   c0.546,0.063,1.099,0.095,1.658,0.095c3.26,0,6.254-1.107,8.632-2.974c-3.039-0.058-5.607-2.065-6.491-4.828   c0.424,0.082,0.858,0.125,1.308,0.125c0.635,0,1.248-0.084,1.83-0.244c-3.177-0.639-5.576-3.448-5.576-6.815   c0-0.029,0-0.058,0-0.087c0.939,0.521,2.01,0.833,3.15,0.869C2.646,12.48,1.419,10.35,1.419,7.938c0-1.274,0.343-2.467,0.94-3.495   c3.427,4.206,8.552,6.973,14.327,7.263c-0.117-0.509-0.18-1.038-0.18-1.584c0-3.838,3.112-6.949,6.953-6.949   c1.998,0,3.805,0.844,5.07,2.192c1.582-0.311,3.072-0.89,4.416-1.686c-0.521,1.624-1.621,2.986-3.057,3.844   c1.406-0.166,2.746-0.54,3.991-1.092C32.949,7.826,31.771,9.05,30.414,10.031z"/>
                  </g>
                </svg> */}

                <img className="twitter"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAmCAYAAABH/4KQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM+SURBVHgBvVg9aBRBFH4bxFIv2Amas0hj41paeSDYWHithdwJgqVBQQtRT7GwMCpYWAia2KiNmIBgod4JCmKhCVgp5M5C7HKJEEuf37t9422O2d2Z3c198LG7M2/efPNmZucnoAJg5ioeNXAnOAlOgT80e0kYBEGPciIgT0BQDY862ADXwA64ru89sApWVGioxcTmWhGhmaLANtgFWxo1l3Kh2ne1fEhlQUTERNWoAFC+qX4euTYuzVmozu6CFSoB4kf9dXMLRMEG2C8arRT/MyrQr5tRoF6oZe71hF4CdYxtubBYfTXtoaqLsQiboTFCu7idZXRVZhKVV+kUuMPRtp0YFO1OtoXXZ6bCdrs2ss9DfAWPGl/gaTCw1N+31oXEuaSoIf2+VEhu4p6yHX/Bz/p+LqGsaGjZMrpJg1JDLrhB6cKanI334E3wuKX8YHKMJtbTBiTyPsScf0tpxCK7oZVSV5f13zqhabKQL1AyPsXep0Fx8Bg8MmI3Tdm4hQ1AKyVfdNTi4g5QtMVJwiz4eyTtJPgaAn+Br8Db+N5G2fiZkd+h4W5mEEpB4oxE3mXwCrjBxXGCUsC6CJgPmdr9jAIvuDxkLlViJE/pVonYWob9AyoHqxhvS67GEy5GcPgSj+tUHIte1trHfQe7CY7+Y985Pw6RA0y3mg/7srG5QIU3L0m+eEZuwgbbKHk33dqj6GCSCHStjMvzlA8b4EVH24rq+S/uHemPLw0Q+BCPY+Ay+eGUx8mrrnoisJ6sHAuLfQDOOnZny8Ov8AvHjwax8ZQ17vaCF8AVB1Hi7wx5QMfbii2jZWsl0naB8+A6u+OJNIT8hJktU8OWKdHrJkUP6fvBe+BHi5g/4Bvwkq+omP/0s4tGL3ObztGY26MOd1NBxKI2k2ZkotegMUGFnbWONYtxyGM6GqqwgxxNsKproeZWC4wJW+Ucp34jsLxboaEoGbN1jViT8oCjn7MIdDp5OQqbBO+osGIN1xk5l3eiqCATrZqKes4l3VqZSkw3D0S6jEcVtI+jQ7aIesset1Z5r12boJw7e8plfRpUKbp2PUzRLmMeXMDi3yEPeIsbERqqkFDFGMildQ/sFLkH/gfq81MUi0Dv6AAAAABJRU5ErkJggg=="
                alt="tweet"/>
                

                </div>

                <div className="instagram-container">
                <img className="instagram"
                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANsSURBVHgBvVj/VdtADJZ5/A8b4E6AN6g7AZmgMRMAEyQbBCZImKDtBEkXqMMEcRdoYAFUKfcZXxz7fviF6D09J7ak+ySddLITGkjMfCmXTDgF17QVfhGukiSpaCAlMcIAcyecA1QlvBb+a4mpzDWevwqvhJ8E5JqOTQIoFV4Ib4UfhfNAvUz4TngjvAzVCwU1geEpIjbUTgE7c3WUhhKiVMLTlI5EcFABZhRLALWLEn0CaUphfxyjVIMq6BPJWscPTvcQhO/pBGSBy3yCWnmPdEKS9UYAt1dYiSVQyGUi/eZLoEE15KzS0AaLYLDIP3Q9VNQjjwEN/Qz9rKZ3dtPS17+whbZ29Sd4UMhlLIi/uUDJpSQTpRWZrq8dn21bFtUnQI7/D2L/0WF/qjoic2/fXPqqAxFljuze1gZndvRDq/Au9xQ9xnOkbEbhgHRT/9MKhz77CgsBKvT3GZlQv3jW+UomVb86jKljEzZHzcyK6BWZdF5JelZkpo4rzzrPWOujRTj7Fptj5CAVAMQdhTBHavI6NUiTLzNN9gKrZtEGpnsS98pan5sp5CDt8v+PDxjktjtn4EnqEZ5jsdS6V/bpwllmq2niXgiwnU3dYymZgc5FCe0343p6Xfc0Ud0r2kZuKJ4qxXS2WzVJfMDaVEeiT0/vJ63nTBGkwCpfKtuEKOmiI+4eHkcAYld76Biv9l7PsIBvMmU69HgqfCE8rx1DJeqm/y78PPBlJCVNJ6qocEmiP713tIuZ1So23JyhZYesPi8962hVa7+jczJvOb4x9w3X/dFEpgExpOm6gadqa0UmWu39p7oVuUlx/D5A2UfcHCkTGkBYQ8l3JGn2xvaNpavJcjOWbGMLBbolgGUe2Q/757inZ6BGY9WloGkRhVv5+UNY98qCTNre+tYgU4U69hRkimTqeunFPv+5VzBWRHJye5RZ3oeQFoxOGHfkIW6dInY314P8xjUs2o5QUzBM/T0q6PsF9m4qsrd9Aks+0RuStWbKvvPaEsrptKBGIcIZD32FHwZqGqOUBXtyKlAdyoOaqsPuGB1g+F7mZiLdcMwHkG5bOYqrPNo24eY1fgOP00C9SwtQVJRiP3XmZDq5HtoVme7fPgG0y+tnhvpzpz5/El7FDKRRwDpAXgPEhfVIQepsr1PHesB0vKP/5bUtLeW/KUEAAAAASUVORK5CYII=" 
                 alt="insta"/>


                </div>
              </div>
            </div>
                <div className="footer-links">
            <div className="quickLinks-container">
              <div className="links-title-container">
                Quick Links
              </div>
              <div className="links-container">
                <a  className="quicklinks" href="/">Home</a>
                <a className="quicklinks"  href="/">About</a>
                <a className="quicklinks"  href="/"> Properties</a>
                <a className="quicklinks"  href="/"> Contact Us</a>
              </div>
            </div>
            <div className="ReachUs-container">
              <div className="reachus-title-container">
                Reach Us
              </div>
              <div className="links-container">

                <div className="call-container">
                    <div className="svg-icons-container">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.9225 9.93408L11.0175 9.71658C10.56 9.66408 10.11 9.82158 9.7875 10.1441L8.4075 11.5241C6.285 10.4441 4.545 8.71158 3.465 6.58158L4.8525 5.19408C5.175 4.87158 5.3325 4.42158 5.28 3.96408L5.0625 2.07408C4.9725 1.31658 4.335 0.746582 3.57 0.746582H2.2725C1.425 0.746582 0.72 1.45158 0.7725 2.29908C1.17 8.70408 6.2925 13.8191 12.69 14.2166C13.5375 14.2691 14.2425 13.5641 14.2425 12.7166V11.4191C14.25 10.6616 13.68 10.0241 12.9225 9.93408Z" fill="white"/>
                    </svg>


                    </div>
                    <div className="detail-container">
                    <span>+918496894702  |  +91872694702</span>
                    </div>
                </div>

                <div className="message-container">
                <div className="svg-icons-container">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 0.489258H0V12.4893H15V0.489258ZM13.5 3.48926L7.5 7.23926L1.5 3.48926V1.98926L7.5 5.73926L13.5 1.98926V3.48926Z" fill="white"/>
                </svg>


                </div >
                <div className="detail-container">
                    <span> sunilraj@baladibuilders.com</span>
                    </div>
                </div>

                <div className="address-container ">
                <div className="svg-icons-container">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0.489258C6.0116 0.491592 4.10531 1.27876 2.6993 2.67808C1.29328 4.07739 0.502354 5.97461 0.500008 7.95354C0.497626 9.57073 1.0284 11.144 2.01092 12.4321C2.01092 12.4321 2.21546 12.7002 2.24887 12.7388L8 19.4893L13.7539 12.7354C13.7839 12.6995 13.9891 12.4321 13.9891 12.4321L13.9898 12.4301C14.9718 11.1426 15.5023 9.56999 15.5 7.95354C15.4976 5.97461 14.7067 4.07739 13.3007 2.67808C11.8947 1.27876 9.9884 0.491592 8 0.489258ZM8 10.6678C7.4606 10.6678 6.93331 10.5086 6.48481 10.2104C6.03631 9.91214 5.68675 9.48823 5.48033 8.99226C5.27391 8.49628 5.2199 7.95053 5.32513 7.42401C5.43037 6.89749 5.69011 6.41385 6.07153 6.03425C6.45294 5.65465 6.9389 5.39614 7.46794 5.29141C7.99697 5.18668 8.54534 5.24043 9.04368 5.44587C9.54202 5.65131 9.96797 5.99921 10.2676 6.44557C10.5673 6.89193 10.7273 7.41671 10.7273 7.95354C10.7264 8.67314 10.4387 9.36301 9.92747 9.87184C9.41621 10.3807 8.72304 10.6669 8 10.6678Z" fill="white"/>
                </svg>


                </div>
                <div className="detail-container">
                    <span> No-657, 3rd Stage, 3rd Block, Basaveshwara Nagar, 
                      Bangalore -560079</span>
                    
                    </div>
                </div>
              </div>
            </div>
            </div>

            <div className="socialMedia-container-resized">

                <div className="i-container-2">
                  <img className="linkedin2"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMsSURBVHgBxVi7bhNBFL27IYqoYoSEKJC8tIiHhYREx1JRIfEBSAklVQwthfkB5NDQ2jRUIKegAFHYEh/gpEIUKGtqpBgpQjGJPTk3vhOvR7vrfcwmRzrax507c/bO6846VABKKQ8XH1wFL4VM2+DQcZwe5YRLGQExPtgC9/DYBR+A141ia2BTTdEF16gsoPINFiMN8X0lhU8FXAc74C7YkChbEeRLpSzIp5xgQWBb6ioWwVCUnpAliEAW16Q8kLD3rYV+vu6KdG8/zZCIEpXeKQdQ/2tuJ23hhoS6EmF7MZmorfFYvcP9ZbIAGXfNRYV0/3um7ehIPYMoFWKX7AirSO/UkwrFzhgI+WIIU2QJaLMmk+y0l9yQcR2XbazW76OdyRwLu2QJaJN3irdgPaLhk2jV4pz399VVROmjROvnaKRukkVIl86PbV6neAGlcwY0bPJM5fsL8o4X0PYCJ56Ft0KvhtIFJJEOz2J+/x98NJnQXVxd16XfuH6FT5DQzBbYCDe6t2ghxRLx3Bj8n7QN99/DNt66cN0xJ4vYXia1o7W48rXBgi+JrCO+curgcjvG9gZt3qN49ECfZ6UHDigjHIeSlotFO8bTBNsO6GlhAdnFAYQ/Bi8eHtINs35E7X6CL5etsjD+uiEVgBk9PH/A0PgMHqysOD/w/MpwubKozswZbBQi9oBvxvMvyggWxtGymkWMx/TPfEUZoYWtUrnIsq964ICF8WLoUwFgDCUCEyAL7oB9V1bvSpGkEGPMIXvgdXWgBz+Ls5bXm1heTldOJxEcLC2MU53yzn6UOqKc9vT4Rm/ivHnyAdWL25qwCf9Bl53asDn/1fd4P8A4u6afl5ZoZLjzLA1CzwFFgw/PD+feyMGgRecEOWu0ogw6UfPpjJF01tAF/LgTUsnCujpBTCrEWWSHzgjShemyZ/mC0sdb6AzrpXXQZ71OWd2aWZThvJnbOb5OT3qkW+ij1fT/FotrFREovaCjVCcbULN/W0oE+hl8fRGkf/p5afwybb5q9s91g6bpSY+mOXpgFGVblWZZC2957SwHntxZgYisCauGmQ83AdjLcfo6wTHaWMsdAQuT9AAAAABJRU5ErkJggg=="
                  alt="linkedIN"/>
                {/* <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="0.98877" width="36.1825" height="36.1825" rx="18.0913" stroke="white"/>
                </svg> */}

                </div>

                <div className="i-container-2">
                  <img className="facebook2"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ2SURBVHgBzVjBbdtAEFwJ+eRlpgJTFYSpIHzmE0SpQE4FcgEBwg6cVCClgrgDyRVIrkAMAgT5Wa7gMmvO2SeBkLhHyuYAA0l33OXc8m61y4G0gHMuxUcGnoNvgqmSXA8Gg61EYCBGQEyOjzE4AfWma/A3v3u8BRNQr12Cc/AGIkvpGioIXIArsGC0mtrNXYVZU7smjtNAUC6RoB9d0B34TdoADsbgBryUjhAsdBEVPV0VRWVyAjB6G5O4QFRzowiYxAWP7/jFHYDiVscuSk/5+A7c9xd4degCPdaFxDn/yA39B/ynNNgmPK153WSm0ZIIwO6rq4HRx4UurG5CwzkRI2DzGvzbVhh9bXai5veWRICZPYQ6/wC+EyM0X+5EjQMziUCNsEIiEey1ZMixT+BPeWGwEtGiIPPCMg70Abei1QtP48pqzdTQBKnRr57Oa42Y1k1RxVwDzCNqMH1y50M5LWL2rQYp8RG7Fzs+gyPwy974D46PEK2lROIVFZ6JETxBW+yHcm9q27KETtWHRqzkjz5hO+TqNPMn0g9o6rr1m3/JgT7gPbjwwm6karX6gFz2IjaVF4YmV6ma5PJBGI/12rVozzqCll3znRFWCQsxwnVUXfCv6LH0esz8Phm6DntII7QJLmpn3FMzkooBtPM0px1XtYuzYxddUtyz5DXcZ+oMvWXhqncVJxUH/xMX0Y3bW3ibqCnLaHtiD8SZu6cDPrWuv2q9aKYDdTJrGz2fEsDvnW2TIHoqcGywS3jq7liO503sYl51XkiVoX0Do82DJsaw2DzjfC5VIaqV7LWlcDQLCwQmvLm+bx3JbrF5T9H6vxfVff0HoEPBkEXc6TIAAAAASUVORK5CYII="
                  alt="fb"/>
                {/* <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.18256" y="0.989258" width="36.1825" height="36.1825" rx="18.0913" stroke="white"/>
                </svg> */}
                </div>

                <div className="i-container-2">
                {/* <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.36505" y="0.928223" width="36.1825" height="36.1825" rx="18.0913" stroke="white"/>
                </svg> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="white" version="1.1" id="Capa_1" width="39px" height="38px" viewBox="0 0 39 38" xml:space="preserve">
                  <g>
                    <path d="M30.414,10.031c0.014,0.297,0.021,0.595,0.021,0.897c0,9.187-6.992,19.779-19.779,19.779c-3.928,0-7.58-1.149-10.657-3.123   c0.546,0.063,1.099,0.095,1.658,0.095c3.26,0,6.254-1.107,8.632-2.974c-3.039-0.058-5.607-2.065-6.491-4.828   c0.424,0.082,0.858,0.125,1.308,0.125c0.635,0,1.248-0.084,1.83-0.244c-3.177-0.639-5.576-3.448-5.576-6.815   c0-0.029,0-0.058,0-0.087c0.939,0.521,2.01,0.833,3.15,0.869C2.646,12.48,1.419,10.35,1.419,7.938c0-1.274,0.343-2.467,0.94-3.495   c3.427,4.206,8.552,6.973,14.327,7.263c-0.117-0.509-0.18-1.038-0.18-1.584c0-3.838,3.112-6.949,6.953-6.949   c1.998,0,3.805,0.844,5.07,2.192c1.582-0.311,3.072-0.89,4.416-1.686c-0.521,1.624-1.621,2.986-3.057,3.844   c1.406-0.166,2.746-0.54,3.991-1.092C32.949,7.826,31.771,9.05,30.414,10.031z"/>
                  </g>
                </svg> */}

                <img className="twitter2"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAmCAYAAABH/4KQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM+SURBVHgBvVg9aBRBFH4bxFIv2Amas0hj41paeSDYWHithdwJgqVBQQtRT7GwMCpYWAia2KiNmIBgod4JCmKhCVgp5M5C7HKJEEuf37t9422O2d2Z3c198LG7M2/efPNmZucnoAJg5ioeNXAnOAlOgT80e0kYBEGPciIgT0BQDY862ADXwA64ru89sApWVGioxcTmWhGhmaLANtgFWxo1l3Kh2ne1fEhlQUTERNWoAFC+qX4euTYuzVmozu6CFSoB4kf9dXMLRMEG2C8arRT/MyrQr5tRoF6oZe71hF4CdYxtubBYfTXtoaqLsQiboTFCu7idZXRVZhKVV+kUuMPRtp0YFO1OtoXXZ6bCdrs2ss9DfAWPGl/gaTCw1N+31oXEuaSoIf2+VEhu4p6yHX/Bz/p+LqGsaGjZMrpJg1JDLrhB6cKanI334E3wuKX8YHKMJtbTBiTyPsScf0tpxCK7oZVSV5f13zqhabKQL1AyPsXep0Fx8Bg8MmI3Tdm4hQ1AKyVfdNTi4g5QtMVJwiz4eyTtJPgaAn+Br8Db+N5G2fiZkd+h4W5mEEpB4oxE3mXwCrjBxXGCUsC6CJgPmdr9jAIvuDxkLlViJE/pVonYWob9AyoHqxhvS67GEy5GcPgSj+tUHIte1trHfQe7CY7+Y985Pw6RA0y3mg/7srG5QIU3L0m+eEZuwgbbKHk33dqj6GCSCHStjMvzlA8b4EVH24rq+S/uHemPLw0Q+BCPY+Ay+eGUx8mrrnoisJ6sHAuLfQDOOnZny8Ov8AvHjwax8ZQ17vaCF8AVB1Hi7wx5QMfbii2jZWsl0naB8+A6u+OJNIT8hJktU8OWKdHrJkUP6fvBe+BHi5g/4Bvwkq+omP/0s4tGL3ObztGY26MOd1NBxKI2k2ZkotegMUGFnbWONYtxyGM6GqqwgxxNsKproeZWC4wJW+Ucp34jsLxboaEoGbN1jViT8oCjn7MIdDp5OQqbBO+osGIN1xk5l3eiqCATrZqKes4l3VqZSkw3D0S6jEcVtI+jQ7aIesset1Z5r12boJw7e8plfRpUKbp2PUzRLmMeXMDi3yEPeIsbERqqkFDFGMildQ/sFLkH/gfq81MUi0Dv6AAAAABJRU5ErkJggg=="
                alt="tweet"/>
                

                </div>

                <div className="i-container-2">
                <img className="instagram2"
                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANsSURBVHgBvVj/VdtADJZ5/A8b4E6AN6g7AZmgMRMAEyQbBCZImKDtBEkXqMMEcRdoYAFUKfcZXxz7fviF6D09J7ak+ySddLITGkjMfCmXTDgF17QVfhGukiSpaCAlMcIAcyecA1QlvBb+a4mpzDWevwqvhJ8E5JqOTQIoFV4Ib4UfhfNAvUz4TngjvAzVCwU1geEpIjbUTgE7c3WUhhKiVMLTlI5EcFABZhRLALWLEn0CaUphfxyjVIMq6BPJWscPTvcQhO/pBGSBy3yCWnmPdEKS9UYAt1dYiSVQyGUi/eZLoEE15KzS0AaLYLDIP3Q9VNQjjwEN/Qz9rKZ3dtPS17+whbZ29Sd4UMhlLIi/uUDJpSQTpRWZrq8dn21bFtUnQI7/D2L/0WF/qjoic2/fXPqqAxFljuze1gZndvRDq/Au9xQ9xnOkbEbhgHRT/9MKhz77CgsBKvT3GZlQv3jW+UomVb86jKljEzZHzcyK6BWZdF5JelZkpo4rzzrPWOujRTj7Fptj5CAVAMQdhTBHavI6NUiTLzNN9gKrZtEGpnsS98pan5sp5CDt8v+PDxjktjtn4EnqEZ5jsdS6V/bpwllmq2niXgiwnU3dYymZgc5FCe0343p6Xfc0Ud0r2kZuKJ4qxXS2WzVJfMDaVEeiT0/vJ63nTBGkwCpfKtuEKOmiI+4eHkcAYld76Biv9l7PsIBvMmU69HgqfCE8rx1DJeqm/y78PPBlJCVNJ6qocEmiP713tIuZ1So23JyhZYesPi8962hVa7+jczJvOb4x9w3X/dFEpgExpOm6gadqa0UmWu39p7oVuUlx/D5A2UfcHCkTGkBYQ8l3JGn2xvaNpavJcjOWbGMLBbolgGUe2Q/757inZ6BGY9WloGkRhVv5+UNY98qCTNre+tYgU4U69hRkimTqeunFPv+5VzBWRHJye5RZ3oeQFoxOGHfkIW6dInY314P8xjUs2o5QUzBM/T0q6PsF9m4qsrd9Aks+0RuStWbKvvPaEsrptKBGIcIZD32FHwZqGqOUBXtyKlAdyoOaqsPuGB1g+F7mZiLdcMwHkG5bOYqrPNo24eY1fgOP00C9SwtQVJRiP3XmZDq5HtoVme7fPgG0y+tnhvpzpz5/El7FDKRRwDpAXgPEhfVIQepsr1PHesB0vKP/5bUtLeW/KUEAAAAASUVORK5CYII=" 
                 alt="insta"/>


                </div>
              </div>
            </div>
          <div className="copyright-container">
            <span className="copyrights">Copyright 2020-2022 · BALADI BUILDERS & DEVELOPERS.®· All Rights Reserved</span>
          </div>
          
          </div>
          
        </div> 
      </div>
    </>
  );
}

export default Footer;
