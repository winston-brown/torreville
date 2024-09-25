'use server'

// Send an email with nodemailer
import nodemailer from 'nodemailer';

async function sendEmail(formData: FormData): Promise<{ message: string }> {
    const transporter = nodemailer.createTransport({
        host: "torrevillecabinetry.com",
        port: 465,
        secure: true, // use TLS
        auth: {
            user: `${process.env.EMAIL_USER}`,
            pass: `${process.env.EMAIL_PASS}`,
        },
    });

    const mailOptions = {
        from: formData.get('from') as string,
        to: formData.get('to') as string,
        subject: formData.get('subject') as string,
        text: formData.get('message') as string,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        return { message: 'Message sent successfully! We will contact you shortly.' };
    } catch (error) {
        console.log("Error sending email: ", error);
        return { message: String(error) };
    }
}

export async function sendContactEmail(formData: FormData): Promise<{ message: string }> {
    if (formData.get('name') &&
        formData.get('email') &&
        formData.get('subject') &&
        formData.get('message')) {
        const transformData = new FormData();
        transformData.append("to", `${process.env.INFO_EMAIL}`) 
        transformData.append("from", `${process.env.INFO_EMAIL}`) 
        transformData.append("name", `${formData.get('name')}`);
        transformData.append("subject", `${formData.get('subject')}`);
        transformData.append("message", `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nMessage: ${formData.get('message')}`);

        try {
            const response = await sendEmail(transformData);
            return response;
        } catch (error) {
            if (error instanceof Error) {
                return { message: error.message };
            } else {
                return { message: String(error) };
            }
        }
    }
    // Error
    return { message: 'Invalid formData' }
}
