import React from 'react';
import footer from '../../assets/images/footer.png';

function Footer() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    var monthName = months[date.getMonth()];

        var days = new Array(7);
        days[0] = "Sunday";
        days[1] = "Monday";
        days[2] = "Tuesday";
        days[3] = "Wednesday";
        days[4] = "Thursday";
        days[5] = "Friday";
        days[6] = "Saturday";
        var day = days[date.getDay()];

    return (
        <footer
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover'
            }}
            className="p-10">
            <div className='footer'>
                <div className='m-auto'>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div className='m-auto'>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teeth Whitening</a>
                    <a className="link link-hover">Dental Implants</a>
                </div>
                <div className='m-auto'>
                    <span className="footer-title">Gentle Care</span>
                    <a className="link link-hover">About US</a>
                    <a className="link link-hover">Contact US</a>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">Appointment</a>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p className='bg-red-50 py-2 font-bold'>Copyright © {day}, {monthName} {new Date().getDate()}, {new Date().getFullYear()} || All Rights Reserved by Gentle Care.</p>
            </div>
        </footer>
    )
}

export default Footer