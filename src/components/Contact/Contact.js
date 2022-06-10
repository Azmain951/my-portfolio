import React, { useRef } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_15t9vwx', 'template_nh86ja1', form.current, 'qT3cBSJdOSl3P9Z2o')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }



    return (
        <div id='contact' className='contact py-20'>
            <h2 className='text-center text-4xl uppercase font-bold text-white mb-5'>Contact</h2>
            <p className='text-accent text-center text-xl'>Have a question or want to work together? </p>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col justify-center items-center gap-3 mt-10'>
                <input type="text" name='name' placeholder="Name" class="input input-bordered input-accent w-full max-w-sm" />
                <input type="email" name='email' placeholder="Email" class="input input-bordered input-accent w-full max-w-sm" />
                <textarea class="textarea textarea-accent w-full max-w-sm" name='message' placeholder="Your Message"></textarea>
                <input className='btn btn-accent w-full max-w-sm' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Contact;