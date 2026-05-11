'use client';

import { useState, useRef } from 'react';
import toast from 'react-hot-toast';

export default function ContactFeedbackForm() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const showError = (value) => toast.error(value);
  const showSuccess = (value) => toast.success(value);

  const formSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Контроллер нужен, чтобы мы могли вручную отменить fetch по таймауту.
    const controller = new AbortController();
    // Если сервер не ответил за 15с, прерываем запрос (иначе UI может "висеть").
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
      setLoading(true);
      // Отправляем форму на API роут.
      const request = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        signal: controller.signal,
      });

      // Пытаемся прочитать JSON-ответ.
      // Если тело пустое/битое, не падаем с ошибкой — получаем null.
      const response = await request.json().catch(() => null);

      // Ошибкой считаем оба случая:
      // 1) HTTP-статус неуспешный (request.ok === false)
      // 2) API явно вернул success: false
      if (!request.ok || !response?.success) {
        showError(response?.message || 'Nepodařilo se odeslat formulář.');
        return;
      }

      formRef?.current?.reset();
      setMessage('');
      showSuccess(response.message || 'Formulář byl odeslán.');
    } catch (caughtError) {
      console.error(caughtError);
      // AbortError возникает, когда мы сами отменили запрос по таймауту через controller.abort().
      // Это не "падение" приложения, а контролируемый сценарий долгого ответа сервера.
      if (caughtError.name === 'AbortError') {
        showError('Požadavek vypršel. Zkuste to prosím znovu.');
        return;
      }
      // Любая другая ошибка: сеть, CORS, проблемы соединения и т.д.
      showError('Chyba sítě. Zkontrolujte připojení a zkuste to znovu.');
    } finally {
      // Всегда чистим таймер, чтобы не осталось "висячих" setTimeout.
      clearTimeout(timeout);
      setLoading(false);
    }

    // console.log(data);

    // formRef?.current?.reset();
  };

  return (
    <section className="bg-accent-cream w-full pb-16 sm:pb-24" id="kontakt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8 md:p-10">
          <div className="mb-8">
            <h2 className="text-accent-navy text-2xl font-extrabold sm:text-3xl">
              Kontaktní formulář
            </h2>
            <p className="text-text mt-3 text-sm leading-relaxed sm:text-base">
              Nechte nám na sebe kontakt a stručně popište váš požadavek. Ozveme se vám co nejdříve.
            </p>
          </div>

          <form ref={formRef} className="space-y-5" onSubmit={formSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                {/* <label htmlFor="firstName" className="text-accent-navy text-sm font-semibold">
                  Jméno
                </label> */}
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="given-name"
                  className="text-text placeholder:text-text/55 focus:border-text w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm transition-colors duration-200 outline-none sm:text-base"
                  placeholder="Zadejte jméno * "
                  required
                />
              </div>

              <div className="space-y-2">
                {/* <label htmlFor="lastName" className="text-accent-navy text-sm font-semibold">
                  Příjmení
                </label> */}
                <input
                  id="surname"
                  name="surname"
                  type="text"
                  autoComplete="family-name"
                  className="text-text placeholder:text-text/55 focus:border-text w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm transition-colors duration-200 outline-none sm:text-base"
                  placeholder="Zadejte příjmení *"
                  required
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                {/* <label htmlFor="email" className="text-accent-navy text-sm font-semibold">
                  E-mail
                </label> */}
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="text-text placeholder:text-text/55 focus:border-text w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm transition-colors duration-200 outline-none sm:text-base"
                  placeholder="example@mail.com *"
                  required
                />
              </div>

              <div className="space-y-2">
                {/* <label htmlFor="phone" className="text-accent-navy text-sm font-semibold">
                  Telefon
                </label> */}
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="text-text placeholder:text-text/55 focus:border-text w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm transition-colors duration-200 outline-none sm:text-base"
                  placeholder="+420 ... *"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              {/* <label htmlFor="subject" className="text-accent-navy text-sm font-semibold">
                Předmět
              </label> */}
              <select
                id="option"
                name="option"
                className="text-text placeholder:text-text/55 focus:border-text w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm transition-colors duration-200 outline-none sm:text-base"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Vyberte předmět *
                </option>
                <option value="sprava">Správa nemovitosti</option>
                <option value="pronajem">Pronájem</option>
                <option value="spoluprace">Spoluprace</option>
                <option value="jine">Jiné</option>
              </select>
            </div>

            <div className="space-y-2">
              {/* <label htmlFor="message" className="text-accent-navy text-sm font-semibold">
                Stručný popis
              </label> */}
              <div className="relative">
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  maxLength={500}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="text-text placeholder:text-text/55 focus:border-text min-h-32 w-full resize-y rounded-xl border border-black/15 bg-white px-4 py-3 pb-9 text-sm transition-colors duration-200 outline-none sm:text-base"
                  placeholder="Popište svůj požadavek ve 2-3 větách"
                />
                <span className="text-text/60 pointer-events-none absolute right-4 bottom-4 text-xs sm:text-sm">
                  {message.length}/500
                </span>
              </div>
              <p className="text-text/50 mt-2 text-xs">Pole označená * jsou povinná</p>
            </div>

            <button
              type="submit"
              className="bg-accent-navy text-text-main hover:bg-accent-navy/90 w-full cursor-pointer rounded-xl px-6 py-3.5 text-sm font-semibold transition-colors duration-200 sm:w-auto sm:min-w-56 sm:text-base"
              disabled={loading}
            >
              {/* Odeslat */}
              {loading ? 'Odesílám...' : 'Odeslat'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
