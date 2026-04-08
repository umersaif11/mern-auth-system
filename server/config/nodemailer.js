import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    auth: {
        user: process.env.SMPTP_USER,
        pass: process.env.SMPTP_PASS
    }
})

export default transporter