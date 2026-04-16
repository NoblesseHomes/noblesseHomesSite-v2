import React, { useState } from 'react';
import { XIcon, CheckCircleIcon } from 'lucide-react';

export function ManagementModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: '',
  });
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
      <div className="absolute inset-0 bg-accent-navy/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-premium-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-black/5 px-6 sm:px-8 py-6 rounded-t-3xl flex items-center justify-between">
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-accent-navy">
                Nezávazná poptávka
              </h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-accent-cream rounded-lg transition-colors cursor-pointer"
                aria-label="Close"
              >
                <XIcon className="w-6 h-6 text-accent-navy/60" strokeWidth={2.5} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-6 sm:py-8">
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-accent-navy/80 mb-2"
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
                    className="block text-sm font-semibold text-accent-navy/80 mb-2"
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
                    className="block text-sm font-semibold text-accent-navy/80 mb-2"
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
                    className="block text-sm font-semibold text-accent-navy/80 mb-2"
                  >
                    Typ nemovitosti *
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
                    className={inputClasses}
                  >
                    <option value="">Vyberte typ</option>
                    <option value="byt">Byt</option>
                    <option value="dum">Dům</option>
                    <option value="komercni">Komerční prostor</option>
                    <option value="jine">Jiné</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-accent-navy/80 mb-2"
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
                className="w-full mt-6 bg-primary text-white font-bold text-lg px-8 py-4 rounded-2xl hover:bg-primary-dark transition-all duration-300 shadow-premium-lg"
              >
                Odeslat poptávku
              </button>

              <p className="text-xs text-text/40 text-center mt-4">
                Odesláním souhlasíte se zpracováním osobních údajů
              </p>
            </form>
          </>
        ) : (
          <div className="px-6 sm:px-8 py-12 sm:py-16 text-center">
            <div className="w-20 h-20 rounded-full bg-accent-navy/8 flex items-center justify-center mx-auto mb-6">
              <CheckCircleIcon className="w-12 h-12 text-accent-navy" strokeWidth={2} />
            </div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-accent-navy mb-4">
              Děkujeme za poptávku!
            </h3>
            <p className="text-lg text-text/70">Ozveme se vám do 24 hodin.</p>
          </div>
        )}
      </div>
    </div>
  );
}
