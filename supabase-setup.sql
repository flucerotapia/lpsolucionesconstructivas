-- Crear tabla de contactos para LP Construcción
CREATE TABLE IF NOT EXISTS contactos (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefono VARCHAR(20) NOT NULL,
  asunto VARCHAR(255),
  mensaje TEXT NOT NULL,
  creado_en TIMESTAMP DEFAULT NOW(),
  leido BOOLEAN DEFAULT FALSE,
  respondido BOOLEAN DEFAULT FALSE
);

-- Crear índices para búsquedas rápidas
CREATE INDEX idx_contactos_email ON contactos(email);
CREATE INDEX idx_contactos_creado_en ON contactos(creado_en DESC);
CREATE INDEX idx_contactos_leido ON contactos(leido);

-- Habilitar RLS (Row Level Security)
ALTER TABLE contactos ENABLE ROW LEVEL SECURITY;

-- Permitir inserts desde la aplicación
CREATE POLICY "Allow public insert on contactos"
  ON contactos
  FOR INSERT
  WITH CHECK (true);

-- Permitir que solo Supabase vea los datos (opcional)
CREATE POLICY "Allow authenticated read on contactos"
  ON contactos
  FOR SELECT
  USING (auth.role() = 'authenticated');
