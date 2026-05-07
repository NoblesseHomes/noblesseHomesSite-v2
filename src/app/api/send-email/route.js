import { NextResponse } from 'next/server';
import sendMail from '@/lib/mailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, surname, email, phone, option, description } = body || {};
    const cleanData = {
      name: String(name || '').trim(),
      surname: String(surname || '').trim(),
      email: String(email || '').trim(),
      phone: String(phone || '').trim(),
      option: String(option || '').trim(),
      description: String(description || '').trim(),
    };

    if (!cleanData.name || !cleanData.surname || !cleanData.email || !cleanData.phone || !cleanData.option) {
      return NextResponse.json(
        {
          success: false,
          message: 'Vyplňte prosím všechna povinná pole.',
        },
        { status: 400 },
      );
    }

    const targetEmail = process.env.CONTACT_FORM_TO || process.env.SMTP_USER;
    if (!targetEmail) {
      return NextResponse.json(
        {
          success: false,
          message: 'Chybí konfigurace e-mailu na serveru.',
        },
        { status: 500 },
      );
    }

    await sendMail({
      to: targetEmail,
      replyTo: cleanData.email,
      subject: `Nová zpráva z kontaktního formuláře: ${cleanData.name} ${cleanData.surname}`,
      html: `
        <h2>Nová zpráva z webu</h2>
        <p><strong>Jméno:</strong> ${cleanData.name}</p>
        <p><strong>Příjmení:</strong> ${cleanData.surname}</p>
        <p><strong>E-mail:</strong> ${cleanData.email}</p>
        <p><strong>Telefon:</strong> ${cleanData.phone}</p>
        <p><strong>Předmět:</strong> ${cleanData.option}</p>
        <p><strong>Popis:</strong><br/>${cleanData.description || '-'}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Děkujeme, zpráva byla úspěšně odeslána.',
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: 'Nepodařilo se odeslat zprávu. Zkuste to prosím znovu.',
      },
      {
        status: 500,
      },
    );
  }
}
