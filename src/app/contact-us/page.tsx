'use client'
import React, { useCallback, useState } from 'react';
import { Input, Textarea, Button } from "@nextui-org/react";
import { sendContactEmail } from '@/lib/send_email/send_email';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import verifyRecaptcha from '@/lib/google/verifyRecaptcha';

const MAX_SUBMISSIONS = 3;

export default function ContactPage() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
      scriptProps={{ async: true, defer: true, appendTo: 'body' }}
      container={{
        parameters: {
          badge: 'bottomright', // optional, default undefined
          theme: 'dark', // optional, default undefined
        }
      }}
    >
      <ContactWrapper />
    </GoogleReCaptchaProvider>
  );
}

// ContactPage Component
function ContactWrapper() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [responseMessage, setResponseMessage] = useState<string>('');
  const [submissions, setSubmissions] = useState<number>(0);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(false);



  const handleReCaptchaVerify = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check for too many submissions
    if (submissions <= MAX_SUBMISSIONS) {
      setIsSubmitDisabled(true);
      if (!executeRecaptcha) {
        console.log('Execute recaptcha not yet available');
        return;
      } else {
        console.log('Execute recaptcha available');
      }

      const token = await executeRecaptcha('contact_form');
      console.log("reCAPTCHA token : ", token);

      // If the token is valid (assuming you have some validation for it), call onSubmit
      if (await verifyRecaptcha(token)) { // validate the token here
        setSubmissions(s => s + 1);

        if (event) {
          const formData = new FormData(event.target as HTMLFormElement);
          const response = await sendContactEmail(formData);
          setResponseMessage(response.message);

          setIsSubmitDisabled(false);
        }
      }
    } else {
      setIsSubmitDisabled(true);
    }
  }, [executeRecaptcha, submissions]);

  return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <form onSubmit={handleReCaptchaVerify} className="w-full max-w-2xl mx-auto">
          <div className="mb-4">
            <Input type="text" name="name" label="Name" placeholder="Enter your name" color='primary' isRequired className="w-2/3 mx-auto" />
          </div>
          <div className="mb-4">
            <Input type="email" name="email" label="Email" placeholder="Enter your email" color='primary' isRequired className="w-2/3 mx-auto" />
          </div>
          <div className="mb-4">
            <Input type="text" name="subject" label="Subject" placeholder="Enter the subject" color='primary' isRequired className="w-2/3 mx-auto" />
          </div>
          <div className="mb-4">
            <Textarea name="message" label="How can we help you today?" placeholder="Type your message here" color='primary' isRequired className="w-2/3 mx-auto"></Textarea>
          </div>
          <div className="text-center">
            <Button color="primary" type="submit" isDisabled={isSubmitDisabled}>Send</Button>
          </div>
        </form>
        <p className="text-center text-yellow-600 mt-4">{responseMessage}</p>
      </div>
  );
}
