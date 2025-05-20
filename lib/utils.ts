import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export const htmlContent = (name: string) => `
// <!DOCTYPE html>
// <html>
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Welcome to Doexcess</title>
//     <link href="https://fonts.cdnfonts.com/css/gilroy-bold" rel="stylesheet">
//     <style>
//         @import url('https://fonts.cdnfonts.com/css/gilroy-bold');

//         body {
//             font-family: 'Gilroy', 'Helvetica Neue', Arial, sans-serif;
//             line-height: 1.6;
//             color: #333333;
//             margin: 0;
//             padding: 0;
//             background-color: #f7f7f7;
//         }
//         .container {
//             max-width: 600px;
//             margin: 0 auto;
//             padding: 20px;
//         }
//         .header {
//             background-color: #4045e1;
//             padding: 40px 20px;
//             text-align: center;
//             border-radius: 8px 8px 0 0;
//         }
//         .header h1 {
//             color: white;
//             margin: 0;
//             font-size: 32px;
//             font-weight: 700;
//             letter-spacing: -0.5px;
//         }
//         .content {
//             background-color: white;
//             padding: 40px;
//             border-radius: 0 0 8px 8px;
//             box-shadow: 0 4px 12px rgba(0,0,0,0.05);
//         }
//         .button {
//             display: inline-block;
//             background-color: #4045e1;
//             color: white !important;
//             text-decoration: none;
//             padding: 14px 28px;
//             border-radius: 6px;
//             font-weight: 600;
//             margin: 25px 0;
//             font-size: 16px;
//             transition: all 0.2s ease;
//         }
//         .button:hover {
//             background-color: #3338c7;
//             transform: translateY(-1px);
//         }
//         .footer {
//             text-align: center;
//             margin-top: 40px;
//             color: #777777;
//             font-size: 14px;
//         }
//         .logo {
//             max-width: 180px;
//             margin-bottom: 25px;
//         }
//         h2 {
//             color: #4045e1;
//             font-weight: 600;
//             font-size: 22px;
//             margin-top: 30px;
//             margin-bottom: 15px;
//         }
//         ul {
//             padding-left: 20px;
//         }
//         li {
//             margin-bottom: 10px;
//         }
//         .highlight {
//             background-color: #f0f2ff;
//             padding: 20px;
//             border-radius: 6px;
//             margin: 20px 0;
//             border-left: 4px solid #4045e1;
//         }
//         .social-icons {
//             margin: 30px 0;
//             text-align: center;
//         }
//         .social-icon {
//             margin: 0 10px;
//             display: inline-block;
//         }
//         .mb-10 {
//           margin-bottom: 10px;
//         }
//     </style>
// </head>
// <body>
//     <div class="container">

//         <div class="content">
//             <div class="mb-10">
//               <!-- Replace with your actual logo URL -->
//               <img src="https://doexcess.com/logo.png" alt="Doexcess Logo" class="logo">
//               <h1>Welcome to Doexcess!</h1>
//             </div>

//             <p>Hi ${name || 'there'},</p>

//             <h2>Thank you for joining us!</h2>

//             <p>We're excited to have you as part of the Doexcess community. You're now on our exclusive waitlist and will be among the first to experience our platform.</p>

//             <div class="highlight">
//                 <h2>What's Next?</h2>
//                 <ul>
//                     <li><strong>Early access</strong> to our platform before public launch</li>
//                     <li><strong>Exclusive updates</strong> about our development progress</li>
//                     <li><strong>Special offers</strong> reserved for waitlist members</li>
//                 </ul>
//             </div>

//             <p>Our team is working hard to deliver an exceptional experience, and we can't wait to share it with you.</p>

//             <div style="text-align: center;">
//                 <a href="https://doexcess.com" class="button">Explore Doexcess</a>
//             </div>

//             <div class="social-icons">
//                 <a href="https://x.com/doexcess" class="social-icon">X</a>
//                 <a href="https://linkedin.com/company/doexcess" class="social-icon">LinkedIn</a>
//                 <a href="https://instagram.com/doexcess" class="social-icon">Instagram</a>
//             </div>

//             <div class="footer">
//                 <p>Best regards,</p>
//                 <p><strong>The Doexcess Team</strong></p>
//                 <p style="margin-top: 20px;">
//                     <a href="https://doexcess.com" style="color: #4045e1; text-decoration: none;">doexcess.com</a> |
//                     <a href="mailto:hello@doexcess.com" style="color: #4045e1; text-decoration: none;">hello@doexcess.com</a>
//                 </p>
//                 <p style="margin-top: 15px; font-size: 12px;">
//                     © ${new Date().getFullYear()} Doexcess. All rights reserved.
//                 </p>
//             </div>
//         </div>
//     </div>
// </body>
// </html>
// `;
export const htmlContent = (name: string) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Doexcess</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Gilroy:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style type="text/css">
        /* Gilroy font face with fallbacks */
        @font-face {
            font-family: 'Gilroy';
            src: url('https://fonts.gstatic.com/s/gilroy/v1/8vIQ7wQ3Q4hTo6v7C8F4.woff2') format('woff2');
            font-weight: 400;
            font-display: swap;
        }
        
        body {
            font-family: 'Gilroy', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
                        'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            margin: 0;
            padding: 0;
            background-color: #f7f7f7;
            -webkit-font-smoothing: antialiased;
        }
        
        /* Outlook-specific fixes */
        .ExternalClass {
            width: 100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .header {
            background-color: #4045e1;
            padding: 40px 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        
        .header h1 {
            color: white;
            margin: 0;
            font-size: 32px;
            font-weight: 700;
            letter-spacing: -0.5px;
            mso-line-height-rule: exactly;
            line-height: 1.2;
        }
        
        .content {
            background-color: white;
            padding: 20px;
            border-radius: 0 0 8px 8px;
        }
        
        .button {
            display: inline-block;
            background-color: #4045e1;
            color: white !important;
            text-decoration: none;
            padding: 14px 28px;
            border-radius: 6px;
            font-weight: 600;
            margin: 25px 0;
            font-size: 16px;
            transition: all 0.2s ease;
            mso-padding-alt: 0;
        }
        
        /* Mobile responsiveness */
        @media screen and (max-width: 600px) {
            .container {
                width: 100% !important;
                padding: 10px !important;
            }
            .content {
                padding: 10px !important;
            }
            .header {
                padding: 30px 15px !important;
            }
            .header h1 {
                font-size: 26px !important;
            }
            .button {
                display: block !important;
                width: 80% !important;
                margin: 20px auto !important;
                text-align: center !important;
            }
            .mb-5{
              margin-bottom: 5px;
            }
        }
    </style>
</head>
<body style="margin:0; padding:0;">
    <!-- Outlook wrapper -->
    <div style="background-color:#f7f7f7;">
        <!--[if (gte mso 9)|(IE)]>
        <table width="600" align="center" cellpadding="0" cellspacing="0" border="0">
        <tr>
        <td>
        <![endif]-->
        
        <div class="container">
            
            <div class="content">
                <div>
                  <!-- Replace with your actual logo URL -->
                  <img src="https://doexcess.com/logo.png" alt="Doexcess" class="logo" width="180" style="max-width:180px; margin-bottom:25px;">
                  <h2 style="font-family:'Gilroy', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; font-weight:700;">Welcome to Doexcess!</h2>
                </div>

                <p style="margin:0 0 20px 0;">Hi ${name || 'there'},</p>
              
                <p style="margin:0 0 20px 0;">We're excited to have you as part of the Doexcess community. You're now on our exclusive waitlist and will be among the first to experience our platform.</p>
                
                <div style="background-color:#f0f2ff; padding:20px; border-radius:6px; margin:20px 0; border-left:4px solid #4045e1;">
                    <h2 style="font-family:'Gilroy', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; color:#4045e1; font-weight:600; font-size:22px; margin-top:0; margin-bottom:15px;">What's Next?</h2>
                    <ul style="padding-left:20px; margin:0;">
                        <li style="margin-bottom:10px;"><strong>Early access</strong> to our platform before public launch</li>
                        <li style="margin-bottom:10px;"><strong>Exclusive updates</strong> about our development progress</li>
                        <li style="margin-bottom:10px;"><strong>Special offers</strong> reserved for waitlist members</li>
                    </ul>
                </div>
                
                <p style="margin:0 0 20px 0;">Our team is working hard to deliver an exceptional experience, and we can't wait to share it with you.</p>
                
                <div style="text-align:center;">
                    <!--[if mso]>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://doexcess.com" style="height:44px;v-text-anchor:middle;width:200px;" arcsize="10%" stroke="f" fillcolor="#4045e1">
                        <w:anchorlock/>
                        <center style="color:#ffffff;font-family:sans-serif;font-size:16px;font-weight:bold;">Explore Doexcess</center>
                    </v:roundrect>
                    <![endif]-->
                    <a href="https://doexcess.com" class="button" style="font-family:'Gilroy', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">Explore Doexcess</a>
                </div>
                
                <div class="social-icons" style="margin:30px 0; text-align:center;">
                    <a href="https://x.com/doexcess" class="social-icon" style="margin:0 10px; display:inline-block; color:#4045e1; text-decoration:none;">X</a>
                    <a href="https://linkedin.com/company/doexcess" class="social-icon" style="margin:0 10px; display:inline-block; color:#4045e1; text-decoration:none;">LinkedIn</a>
                    <a href="https://instagram.com/doexcess" class="social-icon" style="margin:0 10px; display:inline-block; color:#4045e1; text-decoration:none;">Instagram</a>
                    <a href="https://tiktok.com/@doexcess" class="social-icon" style="margin:0 10px; display:inline-block; color:#4045e1; text-decoration:none;">Tiktok</a>
                </div>
                
                <div class="footer" style="text-align:center; margin-top:40px; color:#777777; font-size:14px;">
                    <p style="margin:0 0 5px 0;">Best regards,</p>
                    <p style="margin:0 0 20px 0; font-weight:600;">The Doexcess Team</p>
                    <p style="margin:20px 0 0 0;">
                        <a href="https://doexcess.com" style="color:#4045e1; text-decoration:none;">doexcess.com</a> | 
                        <a href="mailto:hello@doexcess.com" style="color:#4045e1; text-decoration:none;">hello@doexcess.com</a>
                    </p>
                    <p style="margin:15px 0 0 0; font-size:12px;">
                        © ${new Date().getFullYear()} Doexcess. All rights reserved.<br>
                        <a href="https://doexcess.com/unsubscribe" style="color:#777; text-decoration:none;">Unsubscribe</a>
                    </p>
                </div>
            </div>
        </div>
        
        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
    </div>
</body>
</html>
`;
