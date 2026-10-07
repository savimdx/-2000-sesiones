import React, { useState } from 'react';
import { ShieldCheck, Lock, CreditCard, ChevronRight, CheckCircle, Download, BookOpen, Star } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import { BONUSES } from '../data';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PurchaseModal({ isOpen, onClose }: PurchaseModalProps) {
  const { formattedPrice, convertAndFormat } = useCurrency();
  const [formData, setFormData] = useState({ name: '', email: '', cardNum: '', cardDate: '', cardCvc: '' });
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [status, setStatus] = useState<'idle' | 'processing' | 'success'>('idle');

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Por favor, introduce tu nombre y tu correo electrónico.');
      return;
    }
    
    setStatus('processing');
    
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Close Button */}
        {status !== 'success' && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 text-lg font-bold"
            aria-label="Cerrar modal"
          >
            ✕
          </button>
        )}

        {status === 'idle' && (
          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest font-mono">PAGO 100 % SEGURO</span>
            </div>

            <h3 className="text-xl md:text-2xl font-black text-slate-950 tracking-tight">
              Estás a un clic de transformar tus entrenamientos
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Completa tus datos para recibir tu acceso inmediato a la biblioteca digital por correo electrónico.
            </p>

            {/* Order Summary Summary */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-5 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-700 font-medium">+2000 Sesiones de Entrenamiento de Fútbol (Digital)</span>
                <span className="text-xs text-slate-400 line-through">{convertAndFormat(287)}</span>
              </div>
              <div className="flex justify-between items-center text-emerald-600">
                <span className="text-xs font-semibold">10 Bonos Exclusivos Incluidos (Videos, Manuales y Tareas)</span>
                <span className="text-xs font-bold uppercase">GRATIS</span>
              </div>
              <div className="h-[1px] bg-slate-200 my-2" />
              <div className="flex justify-between items-center font-bold">
                <span className="text-sm sm:text-base text-slate-800">Total a pagar hoy:</span>
                <span
                  style={{ fontFamily: "'Arial Black', 'Montserrat', Impact, sans-serif" }}
                  className="text-3xl sm:text-4xl md:text-5xl text-orange-500 font-black whitespace-nowrap"
                >
                  {formattedPrice}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 text-right font-semibold whitespace-nowrap">
                (Puedes pagar en tu moneda local)
              </p>
            </div>

            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">Nombre completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Ej. Carlos Mendoza"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-xs text-slate-800 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">Correo electrónico (para la entrega inmediata)</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="ejemplo@correo.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-xs text-slate-800 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* Payment Methods toggle */}
              <div>
                <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">Método de pago</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2.5 px-4 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                        : 'bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" /> Tarjeta bancaria
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`py-2.5 px-4 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      paymentMethod === 'paypal'
                        ? 'bg-blue-50 border-blue-500 text-blue-700'
                        : 'bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <span className="font-black italic text-sm">PayPal</span>
                  </button>
                </div>
              </div>

              {/* Card inputs (if selected) */}
              {paymentMethod === 'card' && (
                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Número de tarjeta</label>
                    <input
                      type="text"
                      name="cardNum"
                      value={formData.cardNum}
                      onChange={handleInputChange}
                      placeholder="4000 1234 5678 9010"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-xs text-slate-800 focus:outline-none focus:border-emerald-500 transition-colors font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Fecha de vencimiento</label>
                      <input
                        type="text"
                        name="cardDate"
                        value={formData.cardDate}
                        onChange={handleInputChange}
                        placeholder="MM/AA"
                        maxLength={5}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-xs text-slate-800 focus:outline-none focus:border-emerald-500 transition-colors font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Código de seguridad (CVC / CVV)</label>
                      <input
                        type="password"
                        name="cardCvc"
                        value={formData.cardCvc}
                        onChange={handleInputChange}
                        placeholder="•••"
                        maxLength={4}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-xs text-slate-800 focus:outline-none focus:border-emerald-500 transition-colors font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom info banner */}
            <div className="flex gap-2 items-start mt-6 text-[10px] text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200">
              <Lock className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <p>Tus datos están protegidos con cifrado SSL de 256 bits. Transacción confidencial y segura.</p>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full mt-6 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 font-black py-4 px-6 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_4px_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 text-white"
            >
              FINALIZAR MI PEDIDO Y DESCARGAR <ChevronRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {status === 'processing' && (
          <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-6" />
            <h4 className="text-lg font-black text-slate-900">Procesando tu pedido de forma segura...</h4>
            <p className="text-xs text-slate-500 mt-2 max-w-xs">
              Por favor espera unos instantes mientras generamos tu acceso a la biblioteca...
            </p>
          </div>
        )}

        {status === 'success' && (
          <div className="p-6 md:p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-200 animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-emerald-600 leading-tight">
              ¡Pedido Confirmado con Éxito!
            </h3>
            <p className="text-xs text-slate-600 mt-2 max-w-md">
              Enhorabuena <strong className="text-slate-800">{formData.name}</strong>, tu acceso de por vida a la biblioteca está activado. Hemos enviado tus enlaces de descarga a <strong className="text-emerald-600">{formData.email}</strong>.
            </p>

            <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 my-6 text-left space-y-4">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200 pb-2 flex items-center justify-between">
                <span>ARCHIVOS LISTOS PARA DESCARGAR:</span>
                <span className="text-emerald-600 font-mono">{BONUSES.length + 1} ARCHIVOS DIGITALES</span>
              </p>

              {/* Main manual */}
              <div className="flex items-center justify-between gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-500" />
                  <div>
                    <p className="text-xs font-bold text-slate-800">Manual Principal: +2000 Sesiones de Entrenamiento de Fútbol</p>
                    <p className="text-[10px] text-slate-400">Formato PDF • 58.4 MB</p>
                  </div>
                </div>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white p-2 rounded-lg transition-colors flex items-center justify-center"
                  title="Descargar archivo"
                >
                  <Download className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* 11 Bonuses from BONUSES array */}
              {BONUSES.map((bonus) => (
                <div key={bonus.id} className="flex items-center justify-between gap-2 bg-white p-2.5 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-emerald-600" />
                    <div>
                      <p className="text-xs font-bold text-slate-800">Bono {bonus.number}: {bonus.title}</p>
                      <p className="text-[10px] text-slate-400">Formato Digital • Acceso directo</p>
                    </div>
                  </div>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white p-2 rounded-lg transition-colors flex items-center justify-center"
                    title="Descargar bono"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>

            <button
              onClick={onClose}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors"
            >
              Cerrar y volver a la página
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
