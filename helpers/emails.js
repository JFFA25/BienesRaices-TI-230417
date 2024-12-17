import nodemailer from 'nodemailer'

const emailRegistro = async (datos) => {

const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port:  process.env.EMAIL_PORT,
    auth: {
      user:  process.env.EMAIL_USER,
      pass:  process.env.EMAIL_PASS
    }
  });
  const  { email , nombre , token} = datos
  //Enviar emial
  await transport.sendMail({
      from : 'BienesRaices_230417.com',
      to : email,
      subject : 'Confirma tu cuenta en BienesRaices_230417.com',
      text : 'Confirma tu cuenta en BienesRaices_230417.com',
      html : `
              <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmación de cuenta</title>
    </head>
    <body style="background-color: #FFFFFF; font-family: Arial, sans-serif; color: #040506; margin: 0; padding: 0;">
        <div style="background-color: #3D95A9; padding: 20px; text-align: center;">
            <h1 style="color: #FFFFFF;">BienesRaices_230417</h1>
        </div>

        <div style="padding: 20px;">
            <p style="font-size: 16px; color: #040506;">Hola ${nombre},</p>

            <p style="font-size: 18px; color: #040506; font-weight: bold;">
                ¡Bienvenido a la familia de BienesRaices_230417! Estamos emocionados de que hayas decidido unirte a nosotros.
            </p>
            <p style="font-size: 16px; color: #040506;">
                Gracias por registrarte en <strong>BienesRaices_230417</strong>. Tu cuenta ya está lista, solo debes confirmar tu correo haciendo clic en el siguiente enlace:
            </p>

            <p style="text-align: center;">
                <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/confirmar/${token}" 
                  style="font-size: 18px; color: #FFFFFF; background-color: #0B6C95; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                  Confirmar Cuenta
                </a>
            </p>

            <p style="font-size: 16px; color: #040506;">
                Si no creaste esta cuenta, puedes ignorar este mensaje. No te preocupes, tu cuenta no será activada sin tu confirmación.
            </p>

            <br>
            <div style="margin-top: 30px; padding: 20px; background-color: #063156; color: #FFFFFF; text-align: center;">
                <p style="font-size: 16px;">Saludos cordiales,</p>
                <p style="font-size: 18px; font-weight: bold;">Jose Francisco Flores Amador</p>
                <img src="https://xdddd.s3.us-east-2.amazonaws.com/firmota.jpeg" alt="firma" width="250px" height="150px">
                <p style="font-size: 16px;">CEO y Fundador de BienesRaices_230417</p>
                <p style="font-size: 14px;">"Nuestro compromiso es brindarte las mejores oportunidades en el mundo inmobiliario."</p>
            </div>

            <div style="margin-top: 30px; padding: 20px; background-color: #063156; color: #FFFFFF; text-align: center;">
                <p style="font-size: 14px;">Si tienes alguna pregunta, no dudes en contactarnos.</p>
                <p style="font-size: 14px;">BienesRaices_230417 - Todos los derechos reservados</p>
            </div>
        </div>
    </body>
    </html>
      `
  })
}

const emailOlvidePassword = async (datos) => {

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port:  process.env.EMAIL_PORT,
        auth: {
          user:  process.env.EMAIL_USER,
          pass:  process.env.EMAIL_PASS
        }
      });
      const  { email , nombre , token} = datos
      //Enviar emial
      await transport.sendMail({
          from : 'BienesRaices_230417.com',
          to : email,
          subject : 'Restablece tu contraseña en BienesRaices_230417.com',
          text : ' Restablece tu contraseña en BienesRaices_230417.com',
          html : `
                  <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Confirmación de cuenta</title>
        </head>
        <body style="background-color: #FFFFFF; font-family: Arial, sans-serif; color: #040506; margin: 0; padding: 0;">
            <div style="background-color: #3D95A9; padding: 20px; text-align: center;">
                <h1 style="color: #FFFFFF;">BienesRaices_230417</h1>
            </div>
    
            <div style="padding: 20px;">
                <p style="font-size: 16px; color: #040506;">Hola ${nombre} has solicitado restablecer tu contraseña en BienesRaices_230417</p>
                <p style="font-size: 16px; color: #040506;"> Sigue el siguiente enlace para crear una contraseña nueva </p>
    
                <p style="text-align: center;">
                    <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/reset-password/${token}" 
                      style="font-size: 18px; color: #FFFFFF; background-color: #0B6C95; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                      Restablecer Contraseña
                    </a>
                </p>
    
                <p style="font-size: 16px; color: #040506;">
                    Si tu no solicitaste el cambio de contraseña, puedes ignorar este mensaje.
                </p>
    
                <br>
                <div style="margin-top: 30px; padding: 20px; background-color: #063156; color: #FFFFFF; text-align: center;">
                    <p style="font-size: 16px;">Saludos cordiales,</p>
                    <p style="font-size: 18px; font-weight: bold;">Jose Francisco Flores Amador</p>
                    <img src="https://xdddd.s3.us-east-2.amazonaws.com/firmota.jpeg" alt="firma" width="250px" height="150px">
                    <p style="font-size: 16px;">CEO y Fundador de BienesRaices_230417</p>
                    <p style="font-size: 14px;">"Nuestro compromiso es brindarte las mejores oportunidades en el mundo inmobiliario."</p>
                </div>
    
                <div style="margin-top: 30px; padding: 20px; background-color: #063156; color: #FFFFFF; text-align: center;">
                    <p style="font-size: 14px;">Si tienes alguna pregunta, no dudes en contactarnos.</p>
                    <p style="font-size: 14px;">BienesRaices_230417 - Todos los derechos reservados</p>
                </div>
            </div>
        </body>
        </html>
          `
      })
    }

export {
    emailRegistro,
    emailOlvidePassword
}