import { supabase } from './supabase';

export interface ContactoForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject?: string;
}

export async function guardarContacto(data: ContactoForm) {
  try {
    const { data: result, error } = await supabase
      .from('contactos')
      .insert([
        {
          nombre: data.name,
          email: data.email,
          telefono: data.phone,
          mensaje: data.message,
          asunto: data.subject || 'Consulta general',
          creado_en: new Date().toISOString(),
          leido: false,
        },
      ])
      .select();

    if (error) {
      console.error('Error guardando contacto:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data: result };
  } catch (err) {
    console.error('Error:', err);
    return { success: false, error: 'Error al guardar contacto' };
  }
}
