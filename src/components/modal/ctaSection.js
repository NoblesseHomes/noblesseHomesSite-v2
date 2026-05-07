import { useState, useEffect } from 'react';
import { XIcon, CheckCircleIcon } from 'lucide-react';

export function ManagementModal({ isOpen, onClose, type = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: type != '' ? type : '',
    message: '',
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Очистка при размонтировании компонента
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]); // Добавляем isOpen в зависимости

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        message: '',
      });
    }, 2000);
  };
  if (!isOpen) return null;
  const inputClasses =
    'w-full px-4 py-3 rounded-xl border border-black/10 bg-accent-cream/30 focus:border-accent-navy focus:bg-white focus:outline-none transition-colors text-accent-navy placeholder:text-text/30';
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="bg-accent-navy/50 absolute inset-0 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="shadow-premium-lg relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white">
        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="sticky top-0 flex items-center justify-between rounded-t-3xl border-b border-black/5 bg-white px-6 py-6 sm:px-8">
              <h3 className="font-heading text-accent-navy text-2xl font-bold sm:text-3xl">
                Nezávazná poptávka
              </h3>
              <button
                onClick={onClose}
                className="hover:bg-accent-cream cursor-pointer rounded-lg p-2 transition-colors"
                aria-label="Close"
              >
                <XIcon className="text-accent-navy/60 h-6 w-6" strokeWidth={2.5} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 py-6 sm:px-8 sm:py-8">
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-accent-navy/80 mb-2 block text-sm font-semibold"
                  >
                    Jméno a příjmení *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    placeholder="Jan Novák"
                    className={inputClasses}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-accent-navy/80 mb-2 block text-sm font-semibold"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    placeholder="jan.novak@email.cz"
                    className={inputClasses}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="text-accent-navy/80 mb-2 block text-sm font-semibold"
                  >
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    placeholder="+420 123 456 789"
                    className={inputClasses}
                  />
                </div>

                {/* Property Type */}
                <div>
                  <label
                    htmlFor="propertyType"
                    className="text-accent-navy/80 mb-2 block text-sm font-semibold"
                  >
                    Typ poptávky *
                  </label>
                  <select
                    id="propertyType"
                    required
                    value={formData.propertyType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        propertyType: e.target.value,
                      })
                    }
                    className={`${inputClasses} cursor-pointer`}
                  >
                    <option value="" disabled>
                      Vyberte typ
                    </option>
                    <option value="sprava">Správa nemovitosti</option>
                    <option value="pronajem">Pronajem</option>
                    <option value="spoluprace">Spoluprace</option>
                    <option value="jine">Jiné</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-accent-navy/80 mb-2 block text-sm font-semibold"
                  >
                    Poznámka (nepovinné)
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    placeholder="Napište nám více o vaší nemovitosti..."
                    rows={4}
                    className={`${inputClasses} resize-none`}
                  />
                </div>
              </div>

              {/* Submit Button — gold stays here as CTA */}
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark shadow-premium-lg mt-6 w-full cursor-pointer rounded-2xl px-8 py-4 text-lg font-bold text-white transition-all duration-300"
              >
                Odeslat poptávku
              </button>

              <p className="text-text/40 mt-4 text-center text-xs">
                Odesláním souhlasíte se zpracováním osobních údajů
              </p>
            </form>
          </>
        ) : (
          <div className="px-6 py-12 text-center sm:px-8 sm:py-16">
            <div className="bg-accent-navy/8 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full">
              <CheckCircleIcon className="text-accent-navy h-12 w-12" strokeWidth={2} />
            </div>
            <h3 className="font-heading text-accent-navy mb-4 text-2xl font-bold sm:text-3xl">
              Děkujeme za poptávku!
            </h3>
            <p className="text-text/70 text-lg">Ozveme se vám do 24 hodin.</p>
          </div>
        )}
      </div>
    </div>
  );
}
