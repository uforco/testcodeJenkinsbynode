export const emailTamplate = () => {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>You're Invited!</title>
  </head>
  <body
    style="
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
      font-family: Arial, sans-serif;
    "
  >
    <table
      align="center"
      width="100%"
      cellpadding="0"
      cellspacing="0"
      style="margin: 10px auto; width: 100%; max-width: 600px"
    >
      <tr>
        <td align="center">
          <table
            width="600"
            cellpadding="0"
            cellspacing="0"
            style="
              background: #ffffff;
              border-radius: 12px;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
              overflow: hidden;
            "
          >
            <!-- Header -->
            <tr>
              <td
                align="center"
                style="
                  background-color: #4f46e5;
                  color: #ffffff;
                  padding: 30px 20px;
                  border-radius: 12px 12px 0 0;
                "
              >
                <h1 style="margin: 0; font-size: 24px">You're Invited!</h1>
              </td>
            </tr>
            <!-- Invitor & Invitees Row -->
            <tr>
              <td style="padding: 0 0 10px 0">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" style="padding: 10px 0 0 0">
                      <div>
                        <img
                          src="https://github.com/leerob.png"
                          width="50"
                          height="50"
                          style="
                            border-radius: 50%;
                            border: 3px solid #565bff;
                            display: inline-block;
                            margin-left: 0;
                          "
                        />
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Invitees -->
            <tr>
              <td style="padding: 0 0 20px 0">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td
                      align="center"
                      style="
                        padding-bottom: 5px;
                        border-bottom: 1px solid #e5e7eb;
                      "
                    >
                      <div style="display: inline-block">
                        <img
                          src="https://github.com/leerob.png"
                          width="40"
                          height="40"
                          style="
                            border-radius: 50%;
                            border: 2px solid #ffffff;
                            display: inline-block;
                            margin-left: 0;
                          "
                        />
                        <img
                          src="https://github.com/evilrabbit.png"
                          width="40"
                          height="40"
                          style="
                            border-radius: 50%;
                            border: 2px solid #ffffff;
                            display: inline-block;
                            margin-left: -20px;
                          "
                        />
                        <img
                          src="https://github.com/vercel.png"
                          width="40"
                          height="40"
                          style="
                            border-radius: 50%;
                            border: 2px solid #ffffff;
                            display: inline-block;
                            margin-left: -20px;
                          "
                        />
                        <img
                          src="https://github.com/nextjs.png"
                          width="40"
                          height="40"
                          style="
                            border-radius: 50%;
                            border: 2px solid #ffffff;
                            display: inline-block;
                            margin-left: -20px;
                          "
                        />
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Message Section -->
            <tr>
              <td
                align="center"
                style="
                  padding: 0px 20px 20px;
                  text-align: center;
                  color: #333333;
                "
              >
                <h2 style="font-size: 20px; margin-bottom: 10px">
                  Hello Jane,
                </h2>
                <p style="font-size: 16px; line-height: 1.5; margin: 0 0 20px">
                  You’re invited to <strong>Team Meetup 2025</strong> on
                  <strong>July 15, 2025</strong> at <strong>EcoHub HQ</strong>.
                </p>
                <a
                  href="https://example.com/rsvp"
                  style="
                    display: inline-block;
                    background-color: #4f46e5;
                    color: white;
                    text-decoration: none;
                    padding: 12px 24px;
                    border-radius: 8px;
                    font-weight: bold;
                  "
                >
                  Join the Event
                </a>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td
                align="center"
                style="
                  background-color: #e0e7ff;
                  color: #555555;
                  font-size: 13px;
                  padding: 15px;
                  border-radius: 0 0 12px 12px;
                "
              >
                &copy; 2025 EcoHub • Questions? Just reply to this email.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
};
