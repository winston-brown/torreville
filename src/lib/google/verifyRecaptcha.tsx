'use server'

interface RecaptchaResponse {
    score?: number;
    [key: string]: any;
  }
  
  async function verifyCaptcha(token: string): Promise<boolean> {
    try {
      const reCaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      });
  
      if (!reCaptchaRes.ok) {
        throw new Error('Failed to fetch data from reCAPTCHA API');
      }
  
      const reCaptchaData: RecaptchaResponse = await reCaptchaRes.json();
  
      return reCaptchaData?.score !== undefined && reCaptchaData.score > 0.5;
    } catch (error) {
      console.error("Error verifying reCAPTCHA:", error);
      return false;
    }
  }
  
  export default verifyCaptcha;
  