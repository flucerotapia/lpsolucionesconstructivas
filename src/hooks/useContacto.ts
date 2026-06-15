import { useState } from 'react';
import { guardarContacto, ContactoForm } from '@/lib/contacto';

export function useContacto() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const enviarContacto = async (data: ContactoForm) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const resultado = await guardarContacto(data);

    if (resultado.success) {
      setSuccess(true);
      setError(null);
    } else {
      setError(resultado.error || 'Error desconocido');
      setSuccess(false);
    }

    setLoading(false);
    return resultado;
  };

  return { enviarContacto, loading, error, success };
}
