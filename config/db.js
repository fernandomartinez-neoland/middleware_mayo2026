import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL

console.log('🔌 Intentando conectar a Supabase...')
console.log('Connection string:', connectionString ? connectionString.substring(0, 50) + '...' : 'No definido')

const sql = postgres(connectionString, {
  ssl: 'require',
  connect_timeout: 10,
  idle_timeout: 30,
  max_lifetime: 60 * 30,
  onnotice: (notice) => console.log('📢 Notice:', notice.message),
})

sql.onclose = () => console.log('❌ Conexión a Supabase cerrada')

export default sql
